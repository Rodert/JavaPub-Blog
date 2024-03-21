---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: 一行代码“黑”掉任意网站
# 设置作者
author: Wang Shiyu
# 设置写作时间
date: 2023-03-16
# 一个页面可以有多个分类
category:
  - 前端
# 一个页面可以有多个标签
tag:
  - 前端
  - js
# 此页面会出现在首页的文章板块中
star: true
---

一行代码“黑”掉任意网站

<!-- more -->



[toc]

> 只需一行代码，轻轻一点就可以把任意网站变成暗黑模式。

![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1hc1e6zlq61j30ms0entbl.jpg)

首先我们先做一个实验，在任意网站中，打开浏览器开发者工具(F12)，在 `C1onsole` 控制台输入如下代码并回车：

```js
document.documentElement.style.filter='invert(85%) hue-rotate(180deg)'
```

![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1hc1e92p2icj30yk0i7tf7.jpg)


神奇的事情发生了，当前打开的网站变成了暗黑模式。

**原理解释*

1. document.documentElement 获取文档对象的根元素，即<html>元素
2. 给html元素的.style样式添加filter滤镜样式为invert(85%) hue-rotate(180deg)
3. invert() 反转图像。
4. hue-rotate()色相旋转。

更多滤镜知识：filter (opens new window)。<https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter>

为了更方便实用，达到轻轻一点就可以对网页施加魔法🎉，

我们对代码做了一点点🤏🏻改动。（修正了滤镜对图片等元素的影响）

```js
javascript: (function () {  const docStyle = document.documentElement.style;  if (!window.modeIndex) {    window.modeIndex = 0;  }  const styleList = [    '',    'invert(85%) hue-rotate(180deg)',   'invert(100%) hue-rotate(180deg)',  ];  modeIndex = modeIndex >= styleList.length - 1 ? 0 : modeIndex + 1;  docStyle.filter = styleList[modeIndex];  document.body.querySelectorAll('img, picture, video').forEach(el => el.style.filter = modeIndex ? 'invert(1) hue-rotate(180deg)' : '');})();

```

然后打开浏览器书签管理器，添加新书签，在网址栏粘贴这段代码并保存：

![image](https://tvax3.sinaimg.cn/large/007F3CC8ly1hc1ebenyttj30e507nwey.jpg)

以后在任意网站，只需要轻轻一点 `切换模式` 书签就可以让它变成85%的暗黑，再点一次就是100%的暗黑，再点一次变回正常模式。

![image](https://tvax1.sinaimg.cn/large/007F3CC8ly1hc1ebuogc9j30ms0entbl.jpg)



如果有什么疑惑联系讨论


