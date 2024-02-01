一个群友给我发消息，该学的都学了，怎么就找不到心意的工作，太难了。

很多在近期找过工作的同学一定都知道了，背诵八股文已经不是找工作的绝对王牌。企业最终要的是可以创造价值，或者首先需要干活的人，所以实战很重要。今天这篇文章就是给大家分享一下如何在我们实战生产中使用 redis。

> 如何不了解 redis 的同学，可以先学习之前的 redis 入门教程。[reids 从黑铁到王者](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUzNDUyOTY0Nw==&action=getalbum&album_id=1389304118178840577#wechat_redirect)


...

**⚠️注意：命令不区分大小写，而 key 是区分大小写的。**

`String`

String 作为最基本的类型，就是普通的 get、set，做简单的 key - value 存储

应用场景：

    - 比如在商品编号的生成、订单编号的生成（当然现在很少用到了，毕竟现在这种编号已经不足以承载当今的电商服务）

    [商品编号生成](https://www.silince.cn/assets/imgs/image-20210110222207888.png)

    - 是否喜欢的文章

    [文章点赞打赏截图]()






