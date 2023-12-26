【IDEA教程】IDEA 如何清除缓存？

大家好，我是 JavaPub。

最近遇到群里小伙伴遇到一个**很大**的难题，相信这个问题很多人在初入行时都遇到过。

事情是这样，一个小伙伴刚入职一家公司，公司给了他一个任务，虽然很简单，但是对于初入行的这位同学来说已经焦头烂额了。今天终于写完了，但是发现自己写的类找不到了，如下图类似：

![img](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/614795987926131.jpg)

`UserDao` 明明就在，但是 IDEA 怎么都看不见。

![image-20231226220036410](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/image-20231226220036410.png)


### 原因

其实，这个问题很简单，就是 IDEA 没有识别到这个类。

IDEA 为你在此 IDE 版本中使用过的所有项目缓存了大量文件，因此系统缓存可能会过载。有时，缓存将不再需要，例如，如果您处理频繁的短期项目。

当您使缓存无效时，IDEA 会删除在当前版本的 IDE 中运行的所有项目的缓存文件。下次打开这些项目时，将重新创建这些文件。


在继续之前请注意以下事项：


- 在您重新启动 IDEA 之前，不会删除缓存。

- 在不使缓存失效的情况下打开和关闭项目不会导致删除任何缓存文件。

- 使缓存失效时不会删除本地历史记录，除非您在“使缓存失效”对话框中明确启用此选项。但是，请注意，本地历史记录的默认保留期为 5 个工作日。

![image-20231226220320675](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/image-20231226220320675.png)

### 解决

那如何解决呢？很简单，只需一步

打开 `File` -> `Invalidate Caches / Restart`


![image-20231226215916264](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/image-20231226215916264.png)


是不是很简单，快告诉你好兄弟，让他少掉一根头发。



