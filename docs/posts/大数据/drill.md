Apache Drill

https://github.com/apache/drill


[toc]

## 前言

这里更偏向于应用，而不是将官方文档翻译给你。

Apache Drill 是阿帕奇的顶级项目，但是它的中文文档很少，这篇文档将帮你了解如何使用 Apache Drill。并且会在文末整理一些专业的文档供你参考学习。

当然如果你是官网爱好者，那么你可以直接访问官网：https://drill.apache.org/。


**适合人群**

1. 初学者
2. 临时使用者
3. 想了解 Apache Drill 的人

## 1. 概述

如果你看到这篇文章，相信你对 Drill 已经有所了解，如果你还不了解 Drill，请看下面的简要介绍。

Apache Drill是一款开源的数据探索工具，一个分布式SQL查询和分析引擎。它包含了很多专有的设计，来进行高性能分析，支持半结构化数据源（JSON、XML和日志等）和基于应用不断创新的数据格式。在此基础上，Drill不仅支持行业标准的 ANSI SQL，做到开箱即用和快速上手，还支持大数据生态的集成，如 Apache Hive 和 Apache Hbase 等存储系统，即插即用的部署方式。

**Apache Drill 关键特性**

- 低延迟的SQL查询。
- 直接对自描述数据进行动态查询而无需提前定义Schema，如 JSON、Parquet、TEXT 和 Hbase等。
- 行业标准的查询语法，ANSI SQL。
- 支持嵌套数据结构。
- 支持集成Hive。能够查询Hive表和视图，支持所有的Hive数据格式和UDFs。
- 支持标准的JDBC和ODBC驱动连接BI工具。


> 看到这里你应该对 Drill 有了一个初步了解了吧。


## 2. 安装

前置条件：

你已经安装了 JDK 8，安装教程一大把，如果不会可以访问 javapub.net.cn

### 2.1 下载

**注意：** 这里下载的是 Apache Drill 1.18.0 版本，下载地址：https://drill.apache.org/download/

### 2.2 解压






## 推荐阅读

1. 部分中文教程 https://drill.apache.org/zh/docs/drill-introduction/
2. https://github.com/apache/drill
3. https://drill.apache.org/

