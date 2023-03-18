---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: 搭建自己的图库
# 设置作者
author: Wang Shiyu
# 设置写作时间
date: 2023-03-18
# 一个页面可以有多个分类
category:
  - 图床
# 一个页面可以有多个标签
tag:
  - 图床
  - github
# 此页面会出现在首页的文章板块中
star: true
---

搭建自己的图床

<!-- more -->

微博图床被废了，自己动手丰衣足食。

[toc]

## 前言

对于想我一样的 MarkDown 博主来说，经常会遇到的一个问题，那就是图片处理，本地图片怎么放到网上被大家访问？这是就用到了图床工具，将图床方到一个第三方互联网网站上，然后用外链访问。

尝试过阿里云、腾讯云、七牛云这些厂商得一些免费域名或者存储额度都有时效性，不利于很好管理。

后面有用了微博图床，就俩个字：免费且好用。在谷歌插件商店直接下载使用，操作流程就是我们上传的图片被传到了微博的个人图片库，并且给我们一个可以外网访问的地址。

![img](https://ghproxy.com/https://raw.githubusercontent.com/Rodert/javapub_oss/main/ikon/19605bd5-6a09-44dd-a55e-2fc86677e66a.png?raw=true)

要注意，登录微博后才可以使用。

![img](https://ghproxy.com/https://raw.githubusercontent.com/Rodert/javapub_oss/main/ikon/dee88ffa-c317-4886-bd45-f716337054a9.png?raw=true)

但是免费的才是最贵的。现在人家加了防盗链，熬夜画的图都变成了 403。白嫖真相了

![img](https://ghproxy.com/https://raw.githubusercontent.com/Rodert/javapub_oss/main/ikon/769c7e2a-37e9-45c4-8c03-e15e0117d6eb.png?raw=true)

当然，允许白嫖的不知它一家。像国外的 Imgur，是专业作图床的，并且免费提供使用，缺点是文件管理不是很方便，而且中国大陆无法查看Imgur上的图片。

最后转来转去，还是选择了最大的技术社区 GitHub。

GitHub 上也可以托管图片，图床管理软件例如 PicGo 和 picx，都可以实现快速 GitHub 托管，但是缺点是用户要把 GitHub Access Token 交给这些管理软件，有安全隐患。如果不介意的话，可以在官网直接下载使用，操作非常简单。

<https://github.com/Molunerfinn/PicGo/releases>

本片文章中的图片就是托管在 GitHub 的。

GitHub 上托管的地址打开后都是 `` 前缀的。


```
https://raw.githubusercontent.com/Rodert/javapub_oss/main/other/20230318103551.jpg
```

但是经过实际测试，`raw.githubusercontent.com` 这个域名似乎是被国内墙了，中国大陆无法查看。有人说用免费 CDN jsDelivr 可以绕开墙，URL 只需更改成以下的样子：


```
https://cdn.jsdelivr.net/gh/Rodert/javapub_oss@main/other/20230318103551.jpg
```

但经过实际测试，jsDelivr 也是被墙了，中国大陆无法查看。

最后，我自己琢磨和试了半天，发现下面的链接因为用的是 GitHub 的域名，所以不会被墙可以在中国大陆查看，而且也可以正常嵌入到网页中使用。不仅可以成功作用于图片，也可以作用于短视频。

```
https://github.com/Rodert/javapub_oss/blob/main/other/20230318103551.jpg?raw=true
```

但上面的做法也不是没有缺点。缺点是速度相对较慢，而且似乎在微信 APP 内会屏蔽这样的图片链接，所以只能在浏览器上查看。

总体来说，目前并没有一个完美的且性价比高的图床服务。

现在用 GitHub 的域名来做图片链接会直接转到 `raw.githubusercontent.com` 继而被国内墙。简书上给出了一些替代方案，其中包括使用 `GitHub Proxy`。

<https://ghproxy.com/>

```
https://ghproxy.com/https://raw.githubusercontent.com/Rodert/javapub_oss/main/other/20230318103551.jpg?raw=true
```

