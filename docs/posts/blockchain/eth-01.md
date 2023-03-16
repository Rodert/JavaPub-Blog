---
## 这是侧边栏索引
index: 1
## 这是页面的图标
icon: page
## 这是文章的标题
title: 币
## 设置作者
author: Wang Shiyu
## 设置写作时间
date: 2022-12-22
## 一个页面可以有多个分类
category:
  - 币
## 一个页面可以有多个标签
tag:
  - btc
  - luna
  - eth
  - tron
## 此页面会出现在首页的文章板块中
star: true
---

eth tron 快速入门

这破玩意就是区块链？

<!-- more -->


[toc]

web3.0、区块链、比特币、以太坊这些一定有听过，这篇带你快速入门。通过学习你可以掌握以太坊的运转，实现原理，及如何搭建自己的区块链节点。

![image](https://tvax1.sinaimg.cn/large/007F3CC8ly1h9cy9la7ytj30po0eg74l.jpg)

## 历史

说到区块链，我们马上就会想到比特币、中本聪、当下最火的链**以太坊**，以及华人孙宇晨创立的**波场**[tron]。

但是今天我们不讨论金融和娱乐，单纯讲解什么是区块链技术，如果你打算涉猎，希望可以帮助到你，我是 `JavaPub` 博主。

## 前提

在开始阅读本文以前，你可以先了解区块链中的一些专有名词，例如：什么是外部账户、合约账户、双重支付、同质化代币、工作量证明等。

掌握这些概念会让你接下来的阅读更轻松。如果你了解可以访问以太坊浏览器：`https://ethereum.org/zh/glossary/#contract-account`

本篇我们以以太坊为例讲解，它也目前社区活跃度最高的区块链。


## 区块链节点

我们知道区块链是一个去中心化的账本，每个人都可以参与记账和对账，更多的人参与也造就了区块链被篡改的高成本。

![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1h9cyr9706cj30zk0ff0u3.jpg)

以太坊有三种节点方式。

1、**轻节点**；轻节点只包含区块标头Block Header，没有储存Body，借此大幅降低储存空间的需求。当需要验证交易时会向邻近的全节点发起相关信息请求以进行验证。应用在个人钱包，个人本地测试时使用。

2、**全节点**储存了所有区块的Block Header与Body（交易列表）。因为存储全部历史交易，它可以验证每一个交易的合法性；参与全网络的验证并广播。

3、**归档节点**相对于全节点，它存储了每个区块高度时的区块状态。比如当需要查询某个账户在指定时间点的余额时，归档节点就派上了用场。
--syncmode snap --gcmode archive

> https://geth.ethereum.org/docs/interface/sync-modes


### 那么如何搭建自己的区块链节点呢？

搭建以太坊包含俩个服务。

![image](https://tva4.sinaimg.cn/large/007F3CC8ly1h9cyuhdcawj30lz0bowfo.jpg)


- **共识端**是处理区块传播和分叉选择、也就是向执行客户端提供权益证明共识机制。

- **执行端**是处理和传播交易，因为我们在以太坊上执行操作都是发起一次转账交易。

> https://ecn.mirror.xyz/kFzA6fZKF-qIjAOvOkJT03WizNea0Bo2Gx6tUDamFsY

### 全节点搭建命令

![image](https://tvax3.sinaimg.cn/large/007F3CC8ly1h9cyw7stsyj30mu0bhdho.jpg)

### 参数解析

**重要参数**


```bash
--datadir “xxx”                 数据库和keystore密钥的数据目录

--cache value                       分配给内部缓存的内存MB数量，缓存值(最低16 mb /数据库强制要求)(默认:128)

--maxpeers value                 最大的网络节点数量(如果设置为0，网络将被禁用)(默认值:25)

--ws                                      启用WS-RPC服务器，允许以 websocket 方式提供访问

--http                                    启用HTTP服务器

--http.api		             基于Http.rpc 提供的api

--http.vhosts "*" 	             设置访问来源设置

--http.corsdomain value       允许跨域请求的域名列表(逗号分隔)(浏览器强制)

--http-web3provider 指定可信任的ETH节点

https://learnblockchain.cn/2017/11/29/geth_cmd_options/
```

当然全节点是比较占用资源的，主要是磁盘资源，到目前为止，大概需要准备 4T 硬盘空间可正常运行。

### 轻节点搭建

如果我们做测试使用，轻节点也足够使用。

**mac 安装方式**

只需简单三步

![image](https://tva4.sinaimg.cn/large/007F3CC8ly1h9cz1dqbl0j30bp0bq3zf.jpg)

> https://ecn.mirror.xyz/kFzA6fZKF-qIjAOvOkJT03WizNea0Bo2Gx6tUDamFsY

## 数据模型

数据模型是维持区块链正常运转的底层结构，也是介绍区块链的核心。

这是一张区块链的大体模型图，一个接一个的区块。

![image](https://tva4.sinaimg.cn/large/007F3CC8ly1h9cz3fhqbdj30zk047js2.jpg)

下面这张是一个区块的内部数据结构模型图。

![image](https://tva1.sinaimg.cn/large/007F3CC8ly1h9cz4m87rqj30u80gm7a5.jpg)

既然有模型，我们来看看区块链对外暴露的数据结构长什么样。

![image](https://tvax3.sinaimg.cn/large/007F3CC8ly1h9cz5tjfuej30g50fz45i.jpg)

到这里，我们对区块链的数据结构有了一定掌握。

### MPT

在开始了解区块链数据以前，看一下以太坊中最重要、也是基础的一个数据结构；

第一张图是一个普通的二叉树，第二张是一个压缩前缀树。可以明显看到它的优势：

1. 减少空间消耗。
2. 也增加了查询速度。


![image](https://tvax2.sinaimg.cn/large/007F3CC8ly1h9czjnw84ej30av0e4gna.jpg)

![image](https://tva3.sinaimg.cn/large/007F3CC8ly1h9czjwyceij30jd0cc40u.jpg)

> https://learnblockchain.cn/books/geth/part3/mpt.html

再来看一下这棵默克尔树。树根值是由从子叶开始不断进行哈希计 算得到最终能代表这棵树数据的哈希值。提供了很好地防篡改性。

![image](https://tva1.sinaimg.cn/large/007F3CC8ly1h9cz9p38duj30oj0fmgpd.jpg)

下面这棵就是以太坊中使用最广泛的默克尔前缀数了。

以太坊的默克尔前缀树是在默克尔树和前缀树的基础上又做了优化，衍生出了扩展节点、分支节点和叶子节点。以使用更少的空间、更快速的查询到vaule值。

- 扩展节点：它是一个k-v结构，这里的value是其他节点的hash值，通过hash可以快速连接到其他节点。
- 分支节点：分支节点是16长度数组，故该节点有效减少了层高和存储空间。
- 叶子节点：也就是我们树结构的叶子节点，存储了真实的数据。

![image](https://tva4.sinaimg.cn/large/007F3CC8ly1h9czb3sxyuj30q80f8jvv.jpg)

## 区块结构

了解完默克尔前缀树后，来看一下以太坊中最重要的三棵树。

首先是状态树、也称为全球状态树。从右往左看，这棵树主要存储来外部账户和合约账户。外部账户也就是用户账户、由密钥控制。合约账户由智能合约的代码控制。

外部账户包含交易次数和账户余额，合约账户除了包含交易次数和账户余额、还包含合约代码的哈希值和合约代码用到的存储树。


![image](https://tva3.sinaimg.cn/large/007F3CC8ly1h9czclhioaj30r20dldjn.jpg)

第二棵重要的树是交易树，它是在每个区块中单独维护、由打包区块的矿工打包后永远不再修改。

交易树也是一棵默克尔前缀树，它包含了当前区块中中打包的交易、叶子节点记录了每笔交易的信息。包括当前交易的双方地址、交易的gas费用、转账费用等。

> https://foresightnews.pro/article/detail/14814

![image](https://tvax3.sinaimg.cn/large/007F3CC8ly1h9czcwh9q5j30mb0ecmzw.jpg)

![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1h9czdhb483j30hd0d142u.jpg)


![image](https://tvax1.sinaimg.cn/large/007F3CC8ly1h9czdvllo8j30os08mdhm.jpg)

第三棵是交易收据树，记录了每笔交易发生的详细信息。

![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1h9czfesodtj30r20drgq3.jpg)

![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1h9czeuj5khj30k20k0qdd.jpg)


## 案例

在使用中，我们一般使用 `geth` 和以太坊服务端做交互。

这里出几个题，可以自我检验一下自己有没有掌握。答案可以来公号 **JavaPub** 获取。

1. 如何监控新合约？

2. 如何监控合约产生新交易？（如何做到实时监控）

3. 查询指定区块时，某外部用户余额？

4. 如何监控产生了erc20合约



## 最后

推荐一套北大肖臻老师的课程，这套课程也被当做国内最好的入门课程。`https://www.bilibili.com/video/BV1Vt411X7JF`

## 参考

1. 以太坊黄皮书：https://ethereum.github.io/yellowpaper/paper.pdf

2. 以太坊节点安装：https://ethereum.org/zh/developers/docs/nodes-and-clients/

3. web3js命令交互：https://learnblockchain.cn/docs/web3js-0.2x/web3.eth.html

4. chainID: https://learnblockchain.cn/books/geth/part1/config.html

5. 关键词：https://ethereum.org/zh/glossary/#contract-account

6. web3js：https://web3.tryblockchain.org/Web3.js-api-refrence.html

7. MPT：https://learnblockchain.cn/books/geth/part3/mpt.html

8. https://www.npmjs.com/package/@ethereumjs/tx

9. 部署新合约： https://blog.csdn.net/ffzhihua/article/details/81502844

10. 共识：https://www.8btc.com/books/834/ethereum-book/_book/第十五章.html





















