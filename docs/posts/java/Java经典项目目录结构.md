- Java经典项目目录结构

- 面试官：请你设计一套Java项目目录结构

- 面试官：眉毛胡子一把抓，这就是你设计的项目结构

---

大家好，我是 JavaPub。

很多刚工作的同学进入公司，拿到前辈们写的 **高级代码** ，眼前一亮 希望可以从里边得到成长。今天和大家聊一聊 Java 项目目录结构。

因为一些原因，我们在学校里学到的知识会滞后一些。但是好在万变不离其宗。接下来这个项目结构可以覆盖绝大多数项目工程。



---

我们这里以即将发布的 **《用户中心》** 为例。

### 目录结构

#### 1. 项目目录结构

![image-20240102221105603](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/image-20240102221105603.png)



看到这个代码结构一定不要抵触，按照功能划分来理解其实很简单。

首先：

- `annotation` 是注解类目录，像全局权限处理等。
- `constant` 全局静态数据处理，比如状态枚举。
- `controller` 接口层，这个大家一定都懂。
- `filter` 顾名思义，拦截器、过滤器。
- `handler` 处理器，比如这里的文件是全局异常统一处理。
- `model` 模型层，基于对象编程，每个结构体都是一个对象，比如用户。
- `*Application.java`  启动入口文件。
- `resources` 静态文件，比如我们的配置文件和 HTML。



以上几个就是比较重要的目录文件。







源码可点击 `阅读原文` 获取