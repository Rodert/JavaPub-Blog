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
date: 2023-09-24
## 一个页面可以有多个分类
category:
  - 币
## 一个页面可以有多个标签
tag:
  - blockchain
  - eth
  - solidity
## 此页面会出现在首页的文章板块中
star: true
---

Solidity Keccak256 与 SHA3-256

<!-- more -->

@[toc]

区块链的造富神话大家一定都有所耳闻，今天我们讨论以太坊中一项基础技术，主打一个一学就会。



## 前言

看过以太坊源码或者对区块链有了解的的同学，一定都见过一个哈希算法 `Keccak256` 。 Keccak256 可以称它是以太坊中第一函数。

![https://ghproxy.com/https://raw.githubusercontent.com/Rodert/JavaPub-Interview/main/src/sc/spring/eth-image1.png?raw=true](以太坊和Keccak256图片)

**那 Keccak256 和 SHA3-256 有什么区别呢？ SHA3 又是什么？**

## 什么是 SHA3

SHA3 是一种密码散列函数家族，它基于 SHA-3 安全散列算法。

如果你还没有听说过，那 MD5 你一定有所耳闻吧。其实在之前大家都在使用 MD4 来做哈希计算，但是 MD4 存在安全漏洞，所以大家就改用 MD5 了。

而 SHA1 就是在 MD4 的设计上进行了改进，但是它也存在安全漏洞，所以大家就又改进升级 SHA2、SHA3 了。简单来说， SHA3 是一种更安全的哈希算法。


## Keccak256 和 SHA3-256 有什么区别？

SHA3 由 Keccak 标准化而来，在很多场合下 Keccak 和 SHA3 是同义词，但在2015年8月SHA3最终完成标准化时，NIST(美国国家标准与技术研究院) 调整了填充算法：`SHA3-256(M) = KECCAK [512] (M || 01, 256)` 。所以标准的 NIST-SHA3 就和 Keccak 计算的结果不一样。
如对空字符串进行 Keccak256 和 SHA3-256 结果各不相同：


```sol
//Keccak256()结果：
c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470
//SHA3-256()结果：
a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a
```

以太坊在开发的时候 SHA3 还在标准化中，所以采用了 Keccak，所以 Ethereum 和 Solidity 智能合约代码中的 SHA3 是指 Keccak256 ，而不是标准的 NIST-SHA3，为了避免混淆，直接在合约代码中写成 Keccak256 是最清晰的。

Keccak-256：Keccak-256 是以太坊所采用的哈希函数，生成 256 位的哈希值。它被用于计算以太坊的交易哈希值、智能合约的哈希值和账户地址等。

## 为何推出sha3

既然有了 sha2 ，为何还要推出 sha3 呢？

推出 sha3 不是因为 sha2 出现了漏洞，只是当时学术界对于 sha1 被成功碰撞的担忧，但目前基于 NIST 的建议，sha2 和 sha3 都是属于可以安全商用的哈希算法，sha3 相当于多了一种安全选择，比特币选用的就是 sha2（SHA256）。


### 参考

- https://medium.com/0xcode/hashing-functions-in-solidity-using-keccak256-70779ea55bb0

- https://ethereum.stackexchange.com/questions/48827/does-keccak256-and-sha3-reproduce-the-same-hash

- https://ethereum.stackexchange.com/questions/550/which-cryptographic-hash-function-does-ethereum-use





