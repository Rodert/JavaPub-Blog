<!--
 * @Author: JavaPub
 * @Date: 2023-11-17 21:41:47
 * @LastEditors: your name
 * @LastEditTime: 2023-11-17 22:53:28
 * @Description: Here is the JavaPub code base. Search JavaPub on the whole web.
 * @FilePath: \JavaPub-Blog\docs\posts\java\Java Random 为什么是为随机数，一分钟了解.md
-->
你一定听说过这样一个词，伪随机数，你有没有这样的疑惑，为什么不用真随机，要用的个假的？

先说一个结论：

Java Random英/ˈrændəm/ 随机数生成不安全，如果同时泄漏第一个和第二个随机数，那么后面的随机数序列可以被破解。

Java Random类 使用 线性同余生成器算法（Linear Congruential Generator）来生成伪随机数。所谓伪随机数是指，如果我们使用相同的种子（seed）来生成随机数序列，那么得到的结果将是一样的。


```java
    Random random = new Random();
    int i = random.nextInt(10);
    System.out.println(i);
```


## 例如



```java
    Random random = new Random(0);
    int cnt = 10;
    for (int i = 0; i < cnt; i++) {
        System.out.println(random.nextLong());
    }
```

这意味着，当我们设置种子为 0 时，每次运行代码得到的随机数序列将是相同的。无论是在任何时间，还是在任何设备上，以下代码生成的随机数始终保持一致。这也意味着一旦黑客获得了你的种子“seed”，他们可以预测出你所生成的所有随机数。

要想生成不同的随机数序列，我们需要使用不同的种子。

...

庆幸的事，Java Random 并没有使用 0 作为缺省值，而是使用了更为复杂的方式，使用动态随机值作为默认种子。

那初始化种子如何生成呢？

```java
private static final AtomicLong seedUniquifier = new AtomicLong(8682522807148012L);
private static long seedUniquifier() {
    // L'Ecuyer, "Tables of Linear Congruential Generators of
    // Different Sizes and Good Lattice Structure", 1999
    for (;;) {
        long current = seedUniquifier.get();
        long next = current * 181783497276652981L;
        if (seedUniquifier.compareAndSet(current, next))
            return next;
    }
}
```

这段代码使用AtomicLong 计算种子，很明显是为了保证多线程场景下创建多个Random对象时，产生不同的种子值。在seedUniquifier方法中，使用了AtomicLong.compareAndSet方法来保证每次执行该方法时生成不同的初始种子值。通过这种方法，我们可以确保在多线程应用中，当出现种子冲突时，我们可以通过CAS操作（Compare and Swap）进行重试，以确保每个线程创建的Random对象的初始种子值是不同的。

在代码中，通过将不同的初始种子值与当前系统时间的纳秒进行异或运算，可以保证每次Random执行都会得到不同的种子。

到这里大家对 Java Random 一定有所了解了吧。在强安全性场景下一定要重视起来。

