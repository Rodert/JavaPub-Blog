<!--
 * @Author: JavaPub
 * @Date: 2024-01-09 21:24:27
 * @LastEditors: your name
 * @LastEditTime: 2024-01-09 22:30:52
 * @Description: Here is the JavaPub code base. Search JavaPub on the whole web.
 * @FilePath: \JavaPub-Blog\docs\posts\java\如何消除ifelse使用策略模式.md
-->
我在工作一年时怎么都看不懂的编程写法。今天手把手教给你





作为一名程序员，你一定遇到或亲自写过这样的代码。有人将它形象的形容为shi山，或者被戏称为“面向保就业编程”。

![image-20240109224714584](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/image-20240109224714584.png)

以下面这个代码为例，其中的问题也显而易见，当越来越多的条件判断时，代码会变得非常臃肿，难以维护。

```java
    String mediaType = "blogger";
    if ("lxf".equals(mediaType)) {
        System.out.println("廖雪峰");
     } else if ("JavaPub".equals(mediaType)) {
        System.out.println("知名博主");
    } else if ("msb".equals(mediaType)) {
        System.out.println("马士兵");
    }
    ...
```

![image-20240109224734174](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/image-20240109224734174.png)

## 解决

怎么办呢？

首先想到的一定是使用三目运算符，但是问题也显而易见，不能处理过多的情况。

```java
    int price = condition?80:100;
```

还有什么办法呢，枚举定义、合并查询条件、java8 新特性 Optional 等等，但是这些方法都治标不治本。当判断多了起来，还是会变得臃肿。


### 策略模式

接下来就讲一下今天的推荐方案，策略模式。

> 你一定不要排斥这种设计模式，简单来看其实很简单。

策略模式是一种行为设计模式，它允许你定义一系列算法，并将每种算法分别放入独立的类中，以使算法的对象能够相互替换。这句话可能有点绕，我们来看一个具体的例子。

首先，我们把每个条件逻辑代码块，抽象成一个公共的接口，可以得到以下代码：

```java
    // 获取博主信息接口
    public interface IMediaService {
        void showMedia();
    }
```

我们根据每个逻辑条件，定义相对应的策略实现类，可得以下代码：

```java
    // LXF策略实现类
    public class LXFMediaServiceImpl implements IMediaService {
        @Override
        public void showMedia() {
            System.out.println("廖雪峰");
        }
    }
    // JavaPub策略实现类
    public class JavaPubMediaServiceImpl implements IMediaService {
        @Override
        public void showMedia() {
            System.out.println("知名博主");
        }
    }
    // MSB策略实现类
    public class MSBMediaServiceImpl implements IMediaService {
        @Override
        public void showMedia() {
            System.out.println("马士兵");
        }
    }
```

接下来，我们再定义策略工厂类，用来管理这些博主信息实现策略类，如下：

```java
    // 博主信息服务工产类
    public class MediaServicesFactory {

        private static final Map<String, IMediaService> map = new HashMap<>();
        static {
            map.put("lxf", new LXFMediaServiceImpl());
            map.put("JavaPub", new JavaPubMediaServiceImpl());
            map.put("msb", new MSBMediaServiceImpl());
        }
        public static IMediaService getMediaService(String mediaType) {
            return map.get(mediaType);
        }
    }
```

使用了策略+工厂模式之后，代码变得简洁多了，如下：

```java
    public class Test {
        public static void main(String[] args) {
            String mediaType = "JavaPub";
            IMediaService mediaService = MediaServicesFactory.getMediaService(mediaType);
            mediaService.showMedia();
        }
    }
```

看到这里，是不是很简单。

这样的好处也显而易见，就是可以灵活的切换不同的博主信息，比如：

- 我想看JavaPub的信息，只需要将mediaType设置为JavaPub即可。
- 我想看马士兵的信息，只需要将mediaType设置为msb即可。

