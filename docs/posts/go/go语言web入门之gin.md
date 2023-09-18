<!--
 * @Author: JavaPub
 * @Date: 2023-09-18 21:21:17
 * @LastEditors: your name
 * @LastEditTime: 2023-09-18 21:29:40
 * @Description: Here is the JavaPub code base. Search JavaPub on the whole web.
 * @FilePath: \JavaPub-Blog\docs\posts\go\go语言web入门之gin.md
-->
老朋友都知道我一直在用 Java 语言，从去年开始我在大量使用 Go 语言，一个是应为工作需要，第二是因为 Go 语言的简洁性，真的非常丝滑。

本篇带就带你学习如何使用 Go 语言快速开发一个接口。如果你有后端开发经验，比如你会 Java、Python、PHP、C++、Ruby、C#、JavaScript、TypeScript、C、C++、Rust 等等，那么你会很快入门 Go 语言。

## 前言

之前给大家分享过我入门时学习的一些课程，非常不错。

[Java急速转职GoLang工程师资料](https://mp.weixin.qq.com/s?__biz=MzUzNDUyOTY0Nw==&mid=2247489690&idx=1&sn=38c26022739081ffd610d89d0ee74463&chksm=fa920b9acde5828c69a26f7011f040d82339407ec81adbb37b066a8d822104d1d987d80df2ff&token=386372553&lang=zh_CN#rd)

就目前的市场行情来说，学习 Go 语言必要学以下几个技术栈：gin、gorm、consul、etcd、docker、protobuf、grpc。这几个技术栈在目前各大小公司都是非常主流的技术。

## 用什么技术

本篇就讲传统意义上后端最常做的事，写接口。这里我们用 gin 框架，它是一个 web 框架，非常简洁，非常容易上手。

在开始之前，保证你已经安装了 Go 语言开发环境。编辑器我们选择简洁且大多数 Go 开发者使用的编辑器 vscode。整个操作过程我们会放到 bilibili 视频里。
https://space.bilibili.com/404747369




## 编码实战

