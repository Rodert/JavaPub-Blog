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
  - lock
## 一个页面可以有多个标签
tag:
  - lock
## 此页面会出现在首页的文章板块中
star: true
---

java的12把锁，以锁看人生。

<!-- more -->


[toc]

## 乐观锁

常用代表：CAS

什么是乐观锁？永远处于乐观积极状态，因此乐观锁觉得并发操作期间是不会出问题的，操作数据**不加锁**，只会在最后更新数据时检查数据有没有被修改，没有的话才更新（更新期间加锁，保证是原子性的）。

![JavaPub手绘：乐观锁]()

提到CAS，这个也是高频考点。大白话介绍一下、便于更好理解乐观锁。

CAS 是一种乐观锁实现机制（比较并替换），主要是三部分：内存值+旧的预期值+要修改的值。每次修改数据先比较内存中值与预期值是否相同，不同就自旋，相同才修改。实现依靠unsafe(里面全是native修饰的本地方法，可以直接调用操作系统) + lock cmpxchg(底层依靠硬件指令)。

当然CAS的特性也导致了它的**缺点**，ABA问题、自旋导致的资源浪费、只能保障一个变量的原子性。
