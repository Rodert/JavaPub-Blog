---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: 10道不得不会的 Docker 面试题
# 设置作者
author: Wang Shiyu
# 设置写作时间
date: 2022-06-19
# 一个页面可以有多个分类
category:
  - 最少必要面试题
# 一个页面可以有多个标签
tag:
  - docker
  - 面试题
# 此页面会出现在首页的文章板块中
star: true
---

Docker

<!-- more -->

10道不得不会的 Docker 面试题

我是JavaPub，专注于面试、副业，技术人的成长记录。

以下是 Docker 面试题，相信大家都会有种及眼熟又陌生的感觉、看过可能在短暂的面试后又马上忘记了。**JavaPub**在这里整理这些容易忘记的重点知识及**解答**，`建议收藏，经常温习查阅`。

评论区见

@[toc]

# Docker

https://www.jianshu.com/p/825dbf39af9e

以下是一些docker的基础面试题，下一篇docker进阶面试题。本系列《最少必要面试题》

## 1. 什么是 Docker 容器？

Docker 是一种流行的开源软件平台，可简化创建、管理、运行和分发应用程序的过程。它使用容器来打包应用程序及其依赖项。我们也可以将容器视为 Docker 镜像的运行时实例。


## 2. 什么是 DockerFile？

Dockerfile 是一个文本文件，其中包含我们需要运行以构建 Docker 镜像的所有命令，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。Docker 使用 Dockerfile 中的指令自动构建镜像。我们可以 `docker build` 用来创建按顺序执行多个命令行指令的自动构建。


## 3. 使用Docker Compose时如何保证容器A先于容器B运行？

> Docker Compose 是一个用来定义和运行复杂应用的Docker工具。一个使用Docker容器的应用，通常由多个容器组成。使用Docker Compose不再需要使用shell脚本来启动容器。Compose 通过一个配置文件来管理多个Docker容器。简单理解：Docker Compose 是docker的管理工具。

Docker Compose 在继续下一个容器之前不会等待容器准备就绪。为了控制我们的执行顺序，我们可以使用“**取决于**”条件，`depends_on` 。这是在 docker-compose.yml 文件中使用的示例

```yml
version: "2.4"

services:

 backend:

   build: .    # 构建自定义镜像

   depends_on:

     - db

 db:

   image: mysql
```

用 `docker-compose up` 命令将按照我们指定的依赖顺序启动和运行服务。




低谷蓄力


**《最少必要面试题》**

[10道不得不会的Java基础面试题](https://javapub.blog.csdn.net/article/details/122011870)

[10道不得不会的MySQL基础面试题](https://javapub.blog.csdn.net/article/details/122087243)

[10道不得不会的Java并发基础面试题](https://javapub.blog.csdn.net/article/details/122159231)

[10道不得不会的JVM面试题](https://javapub.blog.csdn.net/article/details/124008535)

[10道不得不会的ElasticSearch面试题](https://blog.csdn.net/qq_40374604/article/details/123761794)

[10道不得不会的Spring面试题](https://blog.csdn.net/qq_40374604/category_11740063.html)


![image](https://tvax3.sinaimg.cn/large/007F3CC8ly1h32gkgw3jrj30je0aignk.jpg)

