https://baijiahao.baidu.com/s?id=1626633654476933953&wfr=spider&for=pc


https://www.cnblogs.com/caoweixiong/p/12186736.html

[toc]

# 前言
# 1.安装及环境
## 1.1.Linux安装
## 1.2.Windows安装

# 2.初识Docker
## 2.1.进入docker
https://www.cnblogs.com/xhyan/p/6593075.


## 2.2.命令行基本操作


1. 安装依赖

> yum install -y yum-utils device-mapper-persistent-data lvm2

# Docker实例
## Docker安装Centos

CentOS镜像库地址：https://hub.docker.com/_/centos?tab=tags&page=1

1. 拉取安装指定版本

> $ docker pull centos:centos7

2. 查看本地镜像 

> $ docker images

3. 运行容器

> $ docker run -itd --name centos-test centos:centos7

docker run 镜像标识|镜像名称

例子：docker run -d -p 宿机端口:容器端口 --name  容器名称  镜像标识|镜像名称

-d表示后台运行  -p表示宿机与容器间的映射端口  --name表示给容器指定的命名

4. 进入CentOS容器

> $ docker exec -it centos-test /bin/bash

如果使用 xshell，需要再 centOS 安装 sshd 连接。

5. 安装成功

查看容器的运行情况

> $ docker ps

## 使用

### 启动、关闭、删除容器

docker start 容器id　　//启动容器

docker stop 容器id　　//关闭容器

docker rm 容器id  　　//删除容器 


### 将主机中的文件放入容器中的方式

docker cp 文件名称 容器id:容器内部的路径

### 查看容器日志

docker logs -f 容器id

-f表示查看最后几行

