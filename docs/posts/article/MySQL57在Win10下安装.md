# Windows 10安装MySQL 5.7完整教程 

## 1. 下载MySQL 5.7安装包 

下载地址:https://dev.mysql.com/downloads/mysql/5.7.html 

选择下载windows(x86, 64-bit), ZIP Archive版本,下载完成后解压到您的电脑硬盘上。

> 国内镜像下载
> 
> http://mirrors.sohu.com/mysql/
> 
> http://mirrors.sohu.com/

## 2. 配置MySQL环境变量  

在Windows的 Cortana搜索框中输入“环境变量”,选择“编辑你的环境变量”。  

在 “用户变量” 下新建:

```bash
MYSQL_HOME: MySQL安装路径,比如D:\soft\mysql-5.7.28-winx64  
MYSQL_PATH: %MYSQL_HOME%\bin
```


然后点击“新建”,在“用户变量”下输入: 

```bash
变量名:Path
变量值:%MYSQL_PATH%;%MYSQL_PATH%\mysqld-debug;  
%MYSQL_HOME%\lib;%MYSQL_HOME%\lib\plugin
```  

在”系统变量“下,找到Path,双击并在原有变量值后加上 
;%MYSQL_PATH%;%MYSQL_HOME%\lib;%MYSQL_HOME%\lib\plugin



点击“确定”保存环境变量。 

## 3. 配置my.ini文件  

在MySQL安装目录下,新建my.ini文件,填入以下内容: 

```bash
ini
[mysqld]  
basedir=MySQL安装路径  
datadir=MySQL的数据文件路径  
port=3306
language=简体中文
character-set-client-handshake = false  
default_authentication_plugin=mysql_native_password  
[client]  
default-character-set=utf8 
```


basedir、datadir请根据您的实际安装路径填写。 
language可选“英语”或“简体中文”。

保存并关闭my.ini文件。 

## 4. 安装MySQL服务  

以管理员身份打开 CMD窗口,进入 MySQL\bin 目录。 

执行以下命令:
```bash
mysqld -install MySQL安装路径\my.ini 
net start MySQL 
```

重启电脑,MySQL服务将自动启动。 

## 5. 修改密码并测试 

通过MySQL自带的MySQL服务管理器 或 MySQL Workbench 连接MySQL。 

连接成功后,执行以下SQL修改密码: 
```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';
```


通过MySQL的自带客户端或其他工具使用新密码连接MySQL,如果成功连接表示MySQL安装成功!

有任何问题可以在评论区提出,我将进行解答。