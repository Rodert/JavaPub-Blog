---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: nacos安装-Windows
# 设置作者
author: Wang Shiyu
# 设置写作时间
date: 2022-06-01
# 一个页面可以有多个分类
category:
  - nacos
# 一个页面可以有多个标签
tag:
  - nacos
  - 软件安装
# 此页面会出现在首页的文章板块中
star: true
---

nacos下载安装教程-windows


<!-- more -->


1. 打开Nacos官网


> https://nacos.io/zh-cn/

![image](https://tvax1.sinaimg.cn/large/007F3CC8ly1h2suwhm5fyj31gy0qz4bu.jpg)

2. 进入GitHub，点击Tags

`如果打不开Github，直接看最后一条`

![image](https://tvax1.sinaimg.cn/large/007F3CC8ly1h2suxqciqhj31gb0ruh5o.jpg)

3. 点击Releases，下滑到需要的版本

![image](https://tvax1.sinaimg.cn/large/007F3CC8ly1h2sv0rjjbrj31gv0ruwua.jpg)

4. 下载解压后，得到目录

![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1h2sv1jejztj30l8089gnp.jpg)

5. 修改配置

`有些特殊情况会出现异常，建议按照如下配置`

> 以notepad++方式打开startup.cmd
> 然后修改大概在26行的set MODE="cluster"为set MODE="standalone"

![image](https://tva2.sinaimg.cn/large/007F3CC8ly1h2sv40n17ej31hc0qekdd.jpg)

6. 启动

进入 bin 目录，双击 startup.cmd 运行

![image](https://tva1.sinaimg.cn/large/007F3CC8ly1h2sv2n5h24j31hn0sn7wh.jpg)


---

如果无法访问Github，移驾如下地址下载or给博主留言免费下载：https://download.csdn.net/download/qq_40374604/14894556



