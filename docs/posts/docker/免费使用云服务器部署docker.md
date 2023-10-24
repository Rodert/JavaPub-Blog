<!--
 * @Author: JavaPub
 * @Date: 2023-10-24 19:34:55
 * @LastEditors: your name
 * @LastEditTime: 2023-10-24 23:28:08
 * @Description: Here is the JavaPub code base. Search JavaPub on the whole web.
 * @FilePath: \JavaPub-Blog\docs\posts\docker\免费使用云服务器部署docker.md
 https://deepwisdom.feishu.cn/wiki/Q8ycw6J9tiNXdHk66MRcIN8Pnlg
-->



白嫖在线云服务器，免费在 linux 服务器使用 docker 。 附视频+附文档


@[toc]

视频： `https://www.bilibili.com/video/BV1WN411W79V/`



国内互联网经过多年发展，单体应用已经无法支持我们的互联网业务，分布式、微服务架构已经是大势所趋。

就算是一些小公司，也已经开始使用分布式、微服务架构。说到微服务，就离不开容器技术，而容器技术，就离不开 Docker。今天就给大家分享一个也可以 在线 免费 使用 Docker 学习网站，它叫 Play With Docker。

有了它，你就相当于**免费拥有了一台自己的服务器**。


<iframe src="//player.bilibili.com/player.html?aid=492593442&bvid=BV1WN411W79V&cid=1310104420&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 前言

**Play With Docker 在线实验室**


继 DockerCon 2017 会议之后，Marcos Nils 和 Jonathan Leibiusky 决定共同打造一款可以在浏览器上帮助大家学习Docker的产品，于是 Play With Docker 就这样诞生了。Play With Docker( PWD )是一个利用云主机搭建的在线实验环境，具有开源免费、 Web 端友好、指引步骤详细、开箱即用等特性，用户可以构建、运行Docker容器，甚至可以在Docker Swarm模式下创建集群。


免费使用Docker的网站， https://labs.play-with-docker.com/

![](https://ghproxy.com/https://raw.githubusercontent.com/Rodert/javapub_oss/main/other/play-with-docker.jpeg?raw=true)



## 启动 Nginx 案例

用Docker快速启动一个服务并暴露给外部访问的基本步骤如下:

1. 搜索并拉取需要的镜像

```bash
docker pull nginx
```

2. 使用镜像创建容器,并 Publish 端口映射,-p 参数用于端口映射



```bash
docker run -d -p 外部端口:容器内端口 --name 容器名称 nginx

docker run -d -p 80:80 --name mynginx nginx
```

这个命令会使用nginx镜像创建一个容器,并把容器内的80端口映射到主机的80端口。

3. 查看容器是否运行

```bash
docker ps
```

这样就可以通过访问主机的80端口来访问到nginx服务器了。

我们也可以通过 -P 参数自动随机映射一个端口:

```bash
docker run -d -P --name mynginx nginx
```

然后通过 `docker ps` 查看被映射的端口号。

通过上面的简单几步,我们就可以快速通过 Docker 来启动一个 nginx 服务,并映射端口暴露给外部访问。Docker 帮我们把复杂的配置环境安装都封装到镜像中,做到快速部署。

## 最后

由于云主机的性能资源有限，所以每次启动PWD，只提供了四个小时的在线实验时间，所以，当你的实验完成或者因为各种原因终止实验的时候，应当关闭当前终端，即点击左上角的橙色按钮“CLOSE SEESION”。

