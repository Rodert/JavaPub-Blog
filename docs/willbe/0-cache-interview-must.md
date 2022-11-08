---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: 10道不得不会的缓存面试题
# 设置作者
author: Wang Shiyu
# 设置写作时间
date: 2022-06-15
# 一个页面可以有多个分类
category:
  - 最少必要面试题
# 一个页面可以有多个标签
tag:
  - 缓存
  - 面试题
# 此页面会出现在首页的文章板块中
star: true
---

缓存

<!-- more -->

10道不得不会的 缓存 面试题

以下是 缓存 面试题，相信大家都会有种及眼熟又陌生的感觉、看过可能在短暂的面试后又马上忘记了。**JavaPub**在这里整理这些容易忘记的重点知识及**解答**，`建议收藏，经常温习查阅`。

评论区见

什么是缓存穿透？怎么解决？

缓存雪崩

怎么保证缓存和数据库数据的一致性？


掌握缓存击穿
掌握缓存雪崩
掌握缓存穿透
掌握旁路缓存与缓存一致性
https://blog.csdn.net/m0_50946558/article/details/125897293

缓存算法
https://www.jianshu.com/p/ea467a2bd662

@[toc]

# 缓存

说到缓存，首先你一定要对 Java容器、和 Redis 有一定了解，建议阅读[《最少必要面试题》](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUzNDUyOTY0Nw==&action=getalbum&album_id=2344061143381508097#wechat_redirect)： [【Java容器篇】](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUzNDUyOTY0Nw==&action=getalbum&album_id=2344061143381508097#wechat_redirect) [【Redis篇】](https://mp.weixin.qq.com/s?__biz=MzUzNDUyOTY0Nw==&mid=2247487032&idx=1&sn=b159a678e4b2c704263d9f1a1389ff2a&chksm=fa921d38cde5942ecc291d64012235bd21c937d7fc8078a15c56be8030f605fd49b9cb81201c&scene=178&cur_album_id=2344061143381508097#rd)

### 1. 什么是缓存？

缓存，就是数据交换的缓冲区，针对服务对象的不同（本质就是不同的硬件）都可以构建缓存。而我们平时说的缓存，大多是指内存。

目的是， **把读写速度【慢】的介质的数据保存在读写速度【快】的介质中，从而提高读写速度，减少时间消耗。** 例如：

- CPU 高速缓存 ：高速缓存的读写速度远高于内存。
	- CPU 读数据时，如果在高速缓存中找到所需数据，就不需要读内存
	- CPU 写数据时，先写到高速缓存，再回写到内存。
- 磁盘缓存：磁盘缓存其实就把常用的磁盘数据保存在内存中，内存读写速度也是远高于磁盘的。
	- 读数据，时从内存读取。
	- 写数据时，可先写到内存，定时或定量回写到磁盘，或者是同步回写。



### 为什么要用缓存？

使用缓存的目的，就是提升读写性能。而实际业务场景下，更多的是为了提升读性能，带来更好的性能，更高的并发量。

日常业务中，我们使用比较多的数据库是 MySQL ，缓存是 Redis 。Redis 比 MySQL 的读写性能好很多。那么，我们将 MySQL 的热点数据，缓存到 Redis 中，提升读取性能，也减小 MySQL 的读取压力。例如说：

- 论坛帖子的访问频率比较高，且要实时更新阅读量，使用 Redis 记录帖子的阅读量，可以提升性能和并发。
- 商品信息，数据更新的频率不高，但是读取的频率很高，特别是热门商品。


### 请说说有哪些缓存算法？是否能手写一下 LRU 代码的实现？




### 


### 


### 


### 


### 



## 推荐阅读：


[【Java基础】10道不得不会的Java基础面试题](java-basics-interview-must.md)

[【Java并发】10道不得不会的Java并发基础面试题](java-concurrent-interview-must)

[【MySQL】10道不得不会的MySQL基础面试题](mysql-interview-must.md)

[【ElasticSearch】10道不得不会的ElasticSearch面试题](elasticsearch-interview-must.md)

[【JVM】10道不得不会的JVM面试题](jvm-interview-must.md)

[【Spring】10道不得不会的Spring面试题](willbe/spring-interview-must.md)

[GItHub](https://github.com/Rodert)|[GitEE](https://gitee.com/rodert)

