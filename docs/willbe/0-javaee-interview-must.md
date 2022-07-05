---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: 10道不得不会的 JavaEE 面试题
# 设置作者
author: Wang Shiyu
# 设置写作时间
date: 2022-06-25
# 一个页面可以有多个分类
category:
  - 最少必要面试题
# 一个页面可以有多个标签
tag:
  - javaee
  - 面试题
# 此页面会出现在首页的文章板块中
star: true
---

JavaEE

<!-- more -->

10道不得不会的 JavaEE 面试题

我是 JavaPub，专注于面试、副业，技术人的成长记录。

以下是 JavaEE 面试题，相信大家都会有种及眼熟又陌生的感觉、看过可能在短暂的面试后又马上忘记了。**JavaPub**在这里整理这些容易忘记的重点知识及**解答**，`建议收藏，经常温习查阅`。

评论区见

@[toc]


https://blog.csdn.net/qq_35995691/article/details/120446084

https://www.cnblogs.com/liufei2/p/14660474.html

https://www.runoob.com/servlet/servlet-life-cycle.html

# JavaEE



本系列[《最少必要面试题》](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUzNDUyOTY0Nw==&action=getalbum&album_id=2344061143381508097#wechat_redirect)


目前很多新项目很少会用到JavaEE的技术栈，但是对于部分维护老代码的工程师来说，还是尤为重要。

### 1. JSP 有哪些内置对象？作用分别是什么？

JSP有9个内置对象：

- request：封装客户端的请求，其中包含来自GET或POST请求的参数；

- response：封装服务器对客户端的响应；

- pageContext：通过该对象可以获取其他对象；

- session：封装用户会话的对象；

- application：封装服务器运行环境的对象；

- out：输出服务器响应的输出流对象；

- config：web应用的配置对象；

- page：jsp页面本身（相当于Java程序中的this）；

- exception：封装页面抛出异常的对象。


![JSP的9内置对象及其含义](https://tva4.sinaimg.cn/large/007F3CC8ly1h3uz7jfq18j30rx0bytdd.jpg)

### 2. 介绍一下 Servlet 生命周期

Servlet是运行在服务器端，以多线程的方式处理客户端请求的小程序。是sun公司提供的一套规范（规范的实现是接口）。

servlet的生命周期就是从servlet出现到消亡(销毁)的全过程。主要分为以下几个阶段：

**加载类—>实例化(为对象分配空间)—>初始化(为对象的属性赋值)—>请求响应(服务阶段)—>销毁**

详细介绍：

1. 加载

  在下列时刻会加载Servlet（只执行一次）：

  - 如果已经配置自动加载选项，则在启动服务器时自动加载web.xml文件中设置的<load-on-start>；
  - 服务器启动之后，客户机首次向Servlet发出请求时会加载；
  - 重新加载Servlet时会进行一次加载；

2. 实例化

  加载Servlet后，服务器创建一个Servlet实例。（只执行一次）

3. 初始化

- 调用 Servlet 的 `init()` 方法。在初始化阶段，Servlet 初始化参数被传递给 Servlet 配置对象 ServletConfig。（只执行一次）；

4. 请求处理

  对于到达服务器的客户机请求，服务器创建针对此次请求的一个"请求对象"和一个"响应对象"。

  服务器调用 Servlet 的 `service()` 方法，该方法用于传递"请求"和"响应"对象。

  `service()` 方法从"请求"对象获得请求信息、处理该请求并用"响应"对象的方法将响应回传给客户端。

  `service()` 方法可以调用其他方法来处理请求，例如 `doGet()、doPost()` 或其他方法。


5. 销毁

  当服务器不需要 Servlet，或重新装入 Servlet 的新实例时，服务器会调用 Servlet 的 `destroy()` 方法。（只执行一次）；


### 3. Servlet和JSP的区别和联系

**区别：**

1. JSP是在HTML代码里面写Java代码；而Servlet是在Java代码中写HTML代码，Servlet本身是个Java类；

2. JSP使人们将显示和逻辑分隔称为可能，这意味着两者的开发可以并行进行；而Servlet并没有将两者分开；

3. Servlet独立地处理静态表示逻辑与动态业务逻辑，任何文件的变动都需要对此服务程序重新编译；JSP允许使用特殊标签直接嵌入到HTML页面，HTML内容与JAVA内容也可放在单独文件中，HTML内容的任何变动会自动编译装入到服务程序；

4. Servlet需要在web.xml中配置；而JSP无需配置；

5. 目前JSP主要用在视图层，负责显示；而Servlet主要用在控制层，负责调度；

**联系：**

1. 都是SUN公司推出的动态网页技术；

2. 先有Servlet，针对Servlet缺点推出JSP。JSP是Servlet的一种特殊形式，每个JSP页面就是一个Servlet实例，JSP页面由系统翻译成Servlet，Servlet再负责响应用户的请求。

### 4. JSP的执行过程

在JSP运行过程中，首先由客户端发出请求，Web服务器接收到请求之后，如果是第一次访问某个JSP页面，Web服务器对它进行一下三个操作：

1. 翻译

  由.jsp变为.java，由JSP引擎完成。

2. 编译

  由.java变为.class，由Java编译器实现。

3. 执行

  由.class变为.html，用Java虚拟机执行编译文件，然后将执行结果返回给Web服务器，并最终返回给客户端。
  
  如果不是第一次访问某个JSP页面，则只执行第三步，**所以第一次访问JSP较慢**。

### 5. Session和Cookie的区别和联系；说明在自己项目中如何使用？



















低谷蓄力


**《最少必要面试题》**


[10道不得不会的Java基础面试题](https://javapub.blog.csdn.net/article/details/122011870)

[10道不得不会的Java并发基础面试题](https://javapub.blog.csdn.net/article/details/122159231)

[10道不得不会的JVM面试题](https://javapub.blog.csdn.net/article/details/124008535)

[10道不得不会的MySQL基础面试题](https://javapub.blog.csdn.net/article/details/122087243)

[10道不得不会的MyBatis面试题](https://javapub.blog.csdn.net/category_11740063.html)

[10道不得不会的Spring面试题](https://javapub.blog.csdn.net/category_11740063.html)

[10道不得不会的ElasticSearch面试题](https://javapub.blog.csdn.net/article/details/123761794)

[10道不得不会的Redis面试题](https://javapub.blog.csdn.net/category_11740063.html)

[10道不得不会的Kafka面试题](https://javapub.blog.csdn.net/category_11740063.html)


[10道不得不会的Zookeeper面试题](https://javapub.blog.csdn.net/category_11740063.html)

[10道不得不会的Docker面试题](https://javapub.blog.csdn.net/category_11740063.html)

