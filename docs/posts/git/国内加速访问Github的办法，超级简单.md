
[toc]

## 前言

GitHub 相信大家都不陌生，开源世界中的绝对王牌，说它是中小型互联网公司的基石也不为过。

但是国内因为某些的原因导致 git 相关操作都很慢，GitHub 在国内访问速度慢的问题原因有很多，但最直接和最主要的原因是 GitHub 的分发加速网络的域名遭到 dns污染。慢当然是每个攻城狮都不能忍受的。

科普一下DNS污染：

`网域服务器缓存污染（DNS cache pollution），又称域名服务器缓存投毒（DNS cache poisoning），是指一些刻意制造或无意中制造出来的域名服务器数据包，把域名指往不正确的IP地址。一般来说，在互联网上都有可信赖的网域服务器，但为减低网络上的流量压力，一般的域名服务器都会把从上游的域名服务器获得的解析记录暂存起来，待下次有其他机器要求解析域名时，可以立即提供服务。一旦有关网域的局域域名服务器的缓存受到污染，就会把网域内的计算机导引往错误的服务器或服务器的网址。`


下面介绍一下修改 Host，相当于绕过国内DNS解析，直接访问 GitHub 的 CDN 节点，从而达到加速目的。

---

## 步骤

#### 第一步

打开 `IPAddress.com` 网站，查询下面 3个网址对应的 IP 地址

```bash
github.com

assets-cdn.github.com

github.global.ssl.fastly.net
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021042616410177.png)



#### 第二步

修改本地电脑系统hosts文件

- windows:
  C:\Windows\System32\drivers\etc
- linux:
  /etc/hosts

直接在最后加入以下代码：

```bash
192.30.253.112 github.com
151.101.184.133 assets-cdn.github.com
151.101.185.194 github.global.ssl.fastly.net
```



#### 第三步

刷新系统dns缓存(Windows)

`Linux跳过该步骤`

用 WIN+R 快捷键打开运行窗口，输入命令：cmd 并回车进入命令行窗口。
接着输入命令：ipconfig /flushdns 回车后执行刷新本地 dns 缓存数据即可。



![在这里插入图片描述](https://img-blog.csdnimg.cn/20210426164517890.png)



到此为止，加速已完成，攻城狮们尽情的 git clone

 

---

## 番外篇

有些极客朋友对目前速度很不满意，请访问 `http://ping.chinaz.com/github.com`，查询最快节点 IP 进行访问。



