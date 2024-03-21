---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: ip飘移
# 设置作者
author: Wang Shiyu
# 设置写作时间
date: 2022-05-01
# 一个页面可以有多个分类
category:
  - vpn
# 一个页面可以有多个标签
tag:
  - vpn
  - v2ray
  - 时事
# 此页面会出现在首页的文章板块中
star: true
---

各大主流社交软件显示ip地址，如何实现ip飘移

<!-- more -->



[toc]

今日一则被一则报道刷下，**微信公众号、抖音、微博等社交媒体平台全量开放IP属地功能，导致很多大V都“翻车”了。**

大致原因微信也做了解释如下：

![image](https://tvax1.sinaimg.cn/large/007F3CC8ly1h1srm99siyj30ic0vdn6c.jpg)


看看各位up主身在何方！


![image](https://tva3.sinaimg.cn/large/007F3CC8ly1h1srrx5azzj30k10lsdnm.jpg)


![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1h1srsfvp6yj30jz0gxwkl.jpg)



互联网不是法外之地。习惯在阳光下说话，秉持“底线自觉”，网络空间中的文明指数一定会逐步提升，每个人也都将是受益者。双手支持国家的这项政策。

其实作为up主，相信很多人都收到过或大或小的网络暴力，这次得举动也是对网络环境的一点点警示作用。还有类似 Russia and Ukraine 等如果太激进话题也不符合社会主义核心价值观。

后台看了下，大多数股东都是从事互联网行业的，让自己的ip闪电飘移是基础操作。今天介绍一种傻瓜式操作方式、保姆级教程、手把手教学。当然，如果保姆没教会，可以私信我。

## 搭建

这里使用热门的 V2Ray 搭建梯服务器的工具和协议

官网在这里，为了防止漏洞，大家定时更新下客户端和服务端。
<https://github.com/v2ray/v2ray-core/>


**首先：**

需要的服务器资源，自行解决，某云也有提供。如果你想白嫖也可以私信我，白嫖稳定性可想而知，但是突然用一下是够。

### 服务端

服务器系统 centos7 64位

1. 安装wget

> yum -y install wget

2. 下载脚本

> wget https://install.direct/go.sh

3. 安装unzip

因为centos不支持apt-get，我们需要安装unzip

> yum install zip unzip

4. 执行安装

> bash go.sh

![image](https://tvax3.sinaimg.cn/large/007F3CC8ly1h1t02qio7hj30kb0ckjzl.jpg)


执行以上步骤提示如下错误信息：

```bash
ERROR: This script has been DISCARDED, please switch to fhs-install-v2ray project.

HOW TO USE: https://github.com/v2fly/fhs-install-v2ray

TO MIGRATE: https://github.com/v2fly/fhs-install-v2ray/wiki/Migrate-from-the-old-script-to-this

可以参见：http://loonlog.com/2020/10/5/v2ray-server-new/，如果还有问题可以私信
```

使用以下脚本：

> curl -Ls https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh | sudo bash

5. 配置

服务端其实是不需要再进行任何配置的，配置文件位于 `/etc/v2ray/config.json`，使用 `cat /etc/v2ray/config.json` 查看配置信息。

配置信息主要注意以下几点：

- 配置文件中的id、端口、alterId需要和客户端的配置保持一致；

- 服务端使用脚本安装成功之后默认就是vmess协议；

- 配置完成之后重启v2ray。

- 下图后面也有，可以对比理解

![image](https://tvax3.sinaimg.cn/large/007F3CC8ly1h1t09loyx2j30uz0fuwl4.jpg)

6. 常用的启动，停止，重启v2ray命令

在首次安装完成之后，V2Ray不会自动启动，需要手动运行上述启动命令。而在已经运行V2Ray的VPS上再次执行安装脚本，安装脚本会自动停止V2Ray 进程，升级V2Ray程序，然后自动运行V2Ray。在升级过程中，配置文件不会被修改。

启动

> systemctl start v2ray

停止

`systemctl stop v2ray`

重启

`systemctl restart v2ray`

关于软件更新：更新 V2Ray 的方法是再次执行安装脚本！再次执行安装脚本！再次执行安装脚本！

7. 防火墙端口的打开

centos系统防火墙需要开启

查看已开放端口

> firewall-cmd --zone=public --list-ports

添加开放端口

> firewall-cmd --zone=public --add-port=80/tcp --permanent

重载防火墙配置，不然查看开放端口都查不到，也不能用，重载配置后即可

> firewall-cmd --reload


如果哪一天发现怎么无法使用了，有可能是IP被屏蔽，也有肯能是端口被封，这个时候就需要换个端口，别忘记防火墙开启新端口，那旧端口就可以删除了：

删除端口：

> firewall-cmd --zone=public --remove-port=123456/tcp --permanent


### 客户端Windows

**1. 下载windows客户端**

```bash
下载【v2ray-windows-64.zip Github Release】； https://github.com/v2ray/v2ray-core/releases

下载【v2rayN-v2rayN.exe-Github Release】；https://github.com/2dust/v2rayN/releases
```


第一个下载，对v2ray-windows-64.zip进行解压，

第二个下载，解压后，将下载的V2RayN.exe和一个汉化文件夹复制到第一个下载解压后的目录，即两个下载好的文件需要在同一目录。

![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1h1t0fe5rnoj306o06ewfr.jpg)

![image](https://tva4.sinaimg.cn/large/007F3CC8ly1h1t0fkftu4j30gs09uwj1.jpg)

**2. 配置windows客户端**

运行V2RayN.exe，然后进行配置。

客户端的配置需要根据你的服务端进行相应的配置，因为你的服务端协议可能是vmess,shadowsocks等。

如果你的服务端配置是协议vmess，则配置如下：

![image](https://tva1.sinaimg.cn/large/007F3CC8ly1h1t0gc9iklj30rg0h7n2x.jpg)


![image](https://tvax1.sinaimg.cn/large/007F3CC8ly1h1t0gga6kmj30uz0fuwl4.jpg)

**3. 启用代理**

右击V2RayN运行的图标

![image](https://tva2.sinaimg.cn/large/007F3CC8ly1h1t0h4dd4pj30ee04s40y.jpg)

以上代理就完成了，但是还不能 `学科网上`


需要如下设置，就是设置本地代理模式，这里使用谷歌浏览器的一个插件：“SwitchyOmega”

SwitchyOmega

这具体是个什么东西，自行百度，我也说不明白，哈哈

1. 下载谷歌浏览器插件

下载地址，翻到下面，下载crx文件 <https://github.com/FelisCatus/SwitchyOmega/releases/>

![image](https://tva4.sinaimg.cn/large/007F3CC8ly1h1t0kawbkfj30m9051gmv.jpg)

2. 安装插件

把下载的文件扩展名crx改为zip，然后解压

点击谷歌浏览器右边面包按钮，找到更多工具-扩展程序，打开开发这模式

加载已解压的扩展程序，选择刚刚解压的文件夹，即可安装成功，有错误提示忽略

3. 配置扩展程序

打开配置界面，如下3张图：

根据123步骤进行配置

![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1h1t0l0c9v5j30pe0iewjv.jpg)

![image](https://tva1.sinaimg.cn/large/007F3CC8ly1h1t0l7cbk9j30po0fy0yv.jpg)

![image](https://tvax3.sinaimg.cn/large/007F3CC8ly1h1t0lytreqj30pg0mz79q.jpg)

这个规则列表地址是 https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt

大家可以直接复制利用

规则列表地址是大神提供的需要地址，这里我们直接使用，这样就可以facebook，内网就正常渠道上网

![image](https://tva1.sinaimg.cn/large/007F3CC8ly1h1t0mky07uj30tt0ixtjb.jpg)


### 客户端

1. 安卓：https://github.com/2dust/v2rayNG/releases

2. 安卓：https://apkpure.com/bifrostv/com.github.dawndiy.bifrostv

3. ios：https://itunes.apple.com/us/app/i2ray/id1445270056?mt=8

4. mac：https://github.com/Cenmrev/V2RayX/releases

如果有什么疑惑联系讨论


