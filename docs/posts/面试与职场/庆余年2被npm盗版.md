
> 《庆余年2》遭遇“开源”盗版，npm社区“被迫”暂停服务



这几天《庆余年2》播放的是如火如荼，老婆每天回家第一件事就是追剧、vip 那更是要安排上。腾讯的除了 vip，还搞个 vvip、当然商业变现都能理解。

但是他这么一搞，盗版一定盛行。这不，技术人就用技术的角度解决问题。

[toc]

## 原由

大家能懂点技术的一定都听说过镜像网站这样一个东西。简单来说就是我们国内了人民群众的安全做了一个网络防火墙。

这就会导致我们在访问一些网站时出现速度放缓、甚至不能使用的情况，但是一些勇士为了支持技术的进步，搭建了很多镜像网站，就像镜子一样、它会定时拉取国外目标网站的数据缓存到国内可以访问的服务器上。比如 npm 镜像网站。


npmmirror 镜像站（原 CNPM）核心开发者在社交平台表示，有人利用 npm 包的机制，将刚开播的《庆余年 2》整套高清盗版资源搬运到了 npmmirror。

![图片](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202405211801371.png)

不得不说，高手在民间，把托管开源软件包的镜像站当成了分发视频的 CDN。但是，事件发酵很快，最主要的是流量消耗像在泄洪，很快就被发现了。

![图片](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202405211804220.png)



官方发布了通告，暂停**npmmirror unpkg 的【新增文件】服务**，不再解析新的包版本，但存量的仍会保留，所以不会影响使用者的当前业务。

![图片](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202405211806376.png)


**支持正版，从我做起🇨🇳。**

## 科普

什么是 unpkg ？

```bash
unpkg 是一个快速的、全球性的、免费的公共 npm 包 CDN，它允许你通过 URL 来访问 npm 上的包。它由 Cloudflare 提供支持，可以提供快速的下载速度和缓存服务。

使用 unpkg，你可以很容易地在网页中包含 JavaScript 库、CSS 框架等，而不需要下载它们到你的服务器。

例如，如果你想在你的网页中使用 jQuery，你可以通过 unpkg 提供的链接来引用它：

<script src="https://unpkg.com/jquery@3.5.1/dist/jquery.min.js"></script>
这个链接会指向 jQuery 3.5.1 版本的 CDN 地址，你可以根据需要替换版本号。

unpkg 还支持通过路径来访问包的内容，例如：

<link href="https://unpkg.com/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet">
这个链接会指向 Bootstrap 4.5.0 版本的 CSS 文件。

使用 unpkg 可以极大地简化前端开发中的资源管理，因为它提供了一个简单、快速的方式来引入第三方库。
```


## 具体如何操作

这群灰产党将视频切成诺干戈体积较小的视频文件，并将其上传到 npm（https://www.npmjs.com/package/lyq2/v/1.1.7-1） ，然后用“软件包”的方式引用他们。

![来源oschina](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202405211818967.png)

除了视频文件，这群团伙将 m3u8 文件上传到了 unpkg (https://unpkg.com/lyq2@1.1.7-1/playlist.m3u8) 作为索引。

有了 “视频源文件” 和 “索引” 即可实现在视频网站进行在线播放。

其实他们也不是第一个干这事得人，在 2023 年 12 月  4 日就有人将武林外传的视频上传到 npm。

![来源oschina](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202405211821773.png)

![来源oschina](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202405211822866.png)

![来源oschina](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202405211822542.png)

甚至他们还包含了普通话字幕。

虽然这些视频不会像挖矿程序、垃圾邮件包和依赖性恶意软件那样毒害社区，但这种把开源基础设施当 CDN 的操作无疑是破坏了规则，也违反了供应商的服务条款，各位耗子尾汁。

