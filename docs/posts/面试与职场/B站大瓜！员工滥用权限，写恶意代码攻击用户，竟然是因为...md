<!--

 * @Author: JavaPub
 * @Date: 2025-01-20 16:51:01
 * @LastEditors: your name
 * @LastEditTime: 2025-01-20 17:05:24
 * @Description: Here is the JavaPub code base. Search JavaPub on the whole web.
 * @FilePath: /JavaPub-Blog/docs/posts/面试与职场/B站大瓜！员工滥用权限，写恶意代码攻击用户，竟然是因为...md
-->


## B站大瓜！员工滥用权限，写恶意代码攻击用户，竟然是因为...

B站最近瓜不少！

又是操作直播间抽奖概率，最近又爆自家员工滥用权限，在用户使用网页端时，使特定用户弹出“您的账号已被封禁”。

![image-图片来源网络](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201705124.png)


事实上这是一个定向攻击，当这些用户点击视频时，页面会突然跳转到一个空白页面，并弹出“您的账号已被封禁”的提示。

![图片来源网络](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201708473.png)

尽管账号并未真正被封禁，但这种操作对企业来说也非常危险，他现在屏蔽的是某个用户，也可以导致全站用户都打不开。

**它是怎么做到的？**

这个B站开发，加载恶意代码用于封禁与他对喷的网友的具体操作方式是通过在用户的账号中添加违规代码和脚本，导致用户在正常访问B站时弹出账号被封禁的提示。就是下面这个脚本

![图片来源网络](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201713447.jpeg)

说实话，这个操作虽然难度不大，但是在这么大的系统中内切这样一个脚本，没想过后果吗？

![img](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201718905.png)



#### 后续处理

事件曝光后，B站的反应速度值得肯定。他们在第一时间排查并确认了问题，并迅速采取措施移除了恶意代码。同时，B站对涉事员工倪袁成进行了严肃处理——直接开除，并将其行为通报给监管机构。此外，倪袁成的主管也因管理不力而受到处罚。

B 站还建议用户清除浏览器缓存和 Cookies，以确保不再受到恶意代码的影响。


#### 瓜因

抱着吃瓜心态，看看是怎么个事儿

事情的起因似乎只是网络上的一场口角。B 站员工倪袁成，负责网页端 DanmakuX 弹幕引擎的开发和优化，本应专注于提升用户体验，却因与网友在站内发生争执，心生怨恨。他利用职务之便，在B站网页端加载恶意代码，定向攻击两位用户——黄金鼠塔和罗德兰屑罗素。

![img](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201733228.png)



![007WrvCAly1hxm1wn6z4aj30z00h4mzu](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201739575.jpg)

![007WrvCAly1hxm1wpnu93j30z00o1wgi](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201739169.jpg)

![007WrvCAly1hxm1woy7s7j30z00q6acu](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201739757.jpg)

这位员工的权利看来不小。

![007WrvCAly1hxm1woq92cj30z00j9ta8](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201739703.jpg)

![007WrvCAly1hxm1woj9rfj30z00h4ab6](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201739699.jpg)

B站的工资不低呢。

![007WrvCAly1hxm1wocu5lj30z00h4gnf](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201739993.jpg)

![007WrvCAly1hxm1wnnar7j30z00h4abr](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201739500.jpg)

个人信息能随便拿到，还出来恐吓。

![007WrvCAly1hxm1wnf8lyj30z00h4gnj](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201739815.jpg)

#### 最后结果


![img](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201733658.jpg)


![img](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202501201733967.jpg)


网络不是法外之地，这位员工更是得不偿失，丢失一份不错的工作。


