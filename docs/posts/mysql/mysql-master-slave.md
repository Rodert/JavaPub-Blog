---
## 这是侧边栏索引
index: 1
## 这是页面的图标
icon: page
## 这是文章的标题
title: mysql主从搭建
## 设置作者
author: Wang Shiyu
## 设置写作时间
date: 2022-04-27
## 一个页面可以有多个分类
category:
  - mysql
## 一个页面可以有多个标签
tag:
  - mysql
  - mysql主从
## 此页面会出现在首页的文章板块中
star: true
---

基于linux搭建mysql主从服务器，单机搭建

<!-- more -->


[toc]

## 下载


> wget wget https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.32-el7-x86_64.tar.gz


## 创建多实例配置目录


```bash
#为每个实例创建单独的文件，以便存放对应的数据文件、日志文件、临时文件
mkdir -p /mnt/databases/mysql/{mysql_3306,mysql_3307}
mkdir /mnt/databases/mysql/mysql_3306/{data,log,tmp}
mkdir /mnt/databases/mysql/mysql_3307/{data,log,tmp}

#更改目录权限
chown -R mysql-admin:mysql /mnt/databases/mysql/ 
chown -R mysql-admin:mysql /usr/local/mysql/

#添加环境变量
echo 'export PATH=$PATH:/usr/local/mysql/bin' >>  /etc/profile 
source /etc/profile 
```

## 配置my.cnf

> vim /usr/local/mysql/support-files/my.cnf

```bash
[client]
port=3306
socket=/tmp/mysql.sock

[mysqld_multi]
mysqld=/usr/local/mysql/bin/mysqld_safe
mysqladmin=/usr/local/mysql/bin/mysqladmin
log=/mnt/databases/mysql/mysqld_multi.log

[mysqld]
user=mysql-admin
basedir=/usr/local/mysql
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

[mysqld3306]
mysqld=mysqld
mysqladmin=mysqladmin
datadir=/mnt/databases/mysql/mysql_3306/data
port=3306
server_id=3306
socket=/tmp/mysql_3306.sock
log-output=file
slow_query_log=1
long_query_time=1
slow_query_log_file=/mnt/databases/mysql/mysql_3306/log/slow.log
log-error=/mnt/databases/mysql/mysql_3306/log/error.log
binlog_format=mixed
log-bin=/mnt/databases/mysql/mysql_3306/log/mysql3306_bin

[mysqld3307]
mysqld=mysqld
mysqladmin=mysqladmin
datadir=/mnt/databases/mysql/mysql_3307/data
port=3307
server_id=3307
socket=/tmp/mysql_3307.sock
log-output=file
slow_query_log=1
long_query_time=1
slow_query_log_file=/mnt/databases/mysql/mysql_3307/log/slow.log
log-error=/mnt/databases/mysql/mysql_3307/log/error.log
binlog_format=mixed
log-bin=/mnt/databases/mysql/mysql_3307/log/mysql3307_bin
```


> cp /usr/local/mysql/support-files/my.cnf /etc/my.cnf

## 初始化数据库

```bash
#进入到mysql的bin目录下
cd /usr/local/mysql/bin
#执行初始化3306数据库
./mysqld --initialize --user=mysql-admin --basedir=/usr/local/mysql/ --datadir=/mnt/databases/mysql/mysql_3306/data

#初始化3307数据库
./mysqld --initialize --user=mysql-admin --basedir=/usr/local/mysql/ --datadir=/mnt/databases/mysql/mysql_3307/data
```

## 管理多实例

```bash
#启动全部实例：
/usr/local/mysql/bin/mysqld_multi start

#查看全部实例状态：
/usr/local/mysql/bin/mysqld_multi report 

#启动单个实例：
/usr/local/mysql/bin/mysqld_multi start 3306 

#停止单个实例：
/usr/local/mysql/bin/mysqld_multi stop 3306 

#查看单个实例状态：
/usr/local/mysql/bin/mysqld_multi report 3306 

#停止实例命令失效时，使用如下命令：
mysqladmin -u root -p -S /tmp/mysql_3306.sock shutdown
Enter password:

#查看启动进程
netstat -tlnap | grep mysql
```

## 修改临时密码

```bash
#逐一登录mysql，输入临时密码登录；
mysql -S /tmp/mysql_3306.sock -p
Enter password:
#设置新密码
set password for root@'localhost'=password('123456'); 
flush privileges; 
```

---

---

## 主从

### 配置修改

```bash
#打开配置文件my.cnf
vim /usr/local/mysql/support-files/my.cnf
#在 主库[mysqld3306] 下增加配置，忽略同步的数据库名称；
binlog-ignore-db=mysql
binlog-ignore-db=performance_schema
binlog-ignore-db=sys
```

重启

```bash
#关闭3306，启动3306；3307没有修改，不需要进行重启；
mysqladmin -u root -p -S /tmp/mysql_3306.sock shutdown
mysqld_multi start 3306
```

### 授权

主库

```bash
grant replication slave on *.* to 'root'@'127.0.0.1' identified by '123456';
#授权后需要刷新后，才能生效；
flush privileges; 
#查看主库授权状态
show master status; 
```

![image](https://tva1.sinaimg.cn/large/007F3CC8ly1h1oaj3c3y7j30nr0nx7pp.jpg)

从库

```bash
#注意：从库的几个参数一定要和主库的保持一致
change master to master_host='127.0.0.1',master_user='root',master_password='123456',master_log_file='mysql3306-bin.000006',master_log_pos=597;
#启动主从拷贝
start slave; 
#查看拷贝状态
show slave status;
 #清除授权，授权信息也被清除掉
reset slave all;
#查看状态
show slave status \G
```

**检验**

```bash
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
```

## 附加

建立从库只读账户

```bash
GRANT SElECT ON *.* TO 'root_readonly'@'%' IDENTIFIED BY "123456";
#执行刷新，刷新后；
flush privileges;
```