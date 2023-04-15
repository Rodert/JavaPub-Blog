java多线程

![多线程参考目录](https://img-blog.csdnimg.cn/20201230213829927.png)

[toc]
# 前言

> rodert有话说，不论在生产或是面试中，多线程都是我们必经之路，好的多线程代码可以使系统资源利用率最大化，这篇我们一起学习多线程。多线程本来就是一个知识点多、且难度较大的点，本文致力于写一些最实用的点，以简单易理解的方式，从0到1学习多线程。

# 1.进程与线程基本概念
## 1.1.什么是进程
## 1.2.Java JUC简介

在 Java 5.0 提供了 java.util.concurrent （简称JUC ）包，在此包中增加了在并发编程中很常用的实用工具类，用于定义类似于线程的自定义子系统，包括线程池、异步 IO 和轻量级任务框架。提供可调的、灵活的线程池。还提供了设计用于多线程上下文中的 Collection 实现等。

# 2.Java多线程基础类和接口
## 2.0.前言

实现多线程的几种基础方式

## 2.1.继承Thread类

MyThread.java

```java
package threadDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/2 10:21
 * @description
 */
public class MyThread extends Thread {

    @Override
    public void run() {
        super.run();
        System.out.println("MyThread");
    }

}
class Run {
    public static void main(String[] args) {
        MyThread myThread = new MyThread();
        myThread.start();
        System.out.println("结束");
    }
}
```

运行结果：

```java
结束
MyThread
```

运行结果说明，在使用多线程技术时，代码的运行结果与代码执行顺序或调用顺序是无关的。

线程是一个子任务，CPU以不确定的方式，或者说是以随机的时间来调用线程中的run方法。


## 2.2.实现Runnable接口
### 2.2.0.前言

推荐使用实现Runnable接口方式开发多线程，Java是单继承，可以实现多个接口。

### 2.2.1.代码实现

MyRunnable.java

```java
package threadDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/2 10:38
 * @description
 */
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("MyRunnable");
    }
}

class Run2 {
    public static void main(String[] args) {
        MyRunnable myRunnable = new MyRunnable();
        Thread thread = new Thread(myRunnable);
        thread.start();
        System.out.println("运行结束");
    }
}
```

运行结果：

```bash
运行结束
MyRunnable
```

## 2.3.实现Callable接口
### 2.3.0.前言

除了上面提到的继承Thread类和实现Runnable接口，还有java并发编程包下提供的Callable，Callable和Runnable非常类似，Callable经常和java线程池一起使用。



- Callable和Runnable几点不同：
1. Callable规定的方法是call(),而Runnable规定的方法是run()；
2. Callable的任务执行后可返回值，而Runnable的任务是不能返回值的；
3. call()方法可抛出异常，而run()方法是不能抛出异常；
4. 运行Callable任务可拿到一个Future对象,获取线程的执行结果；

### 2.3.1.代码

```java
package threadDemo;

import java.util.concurrent.*;

/**
 * @author wangshiyu rodert
 * @date 2020/6/2 11:08
 * @description
 */
public class MyCallable implements Callable<String> {

    @Override
    public String call() throws Exception {
        System.out.println("进入call");
        return "result future";
    }
}
class Run3{
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        Future<String> submit = executorService.submit(new MyCallable());

        System.out.println(submit.get());

        executorService.shutdown();
    }
}
```

返回结果：

```bash
进入call
result future
```

### 2.3.2.java.util.concurrent.Future

Executors 执行 Callable 时会返回一个 Future 对象。使用 Future 我们可以得知 Callable 的运行状态，以及获取 Callable 执行完后的返回值。 

Future 的方法介绍： 


- get() ：**阻塞式**，用于获取 Callable/Runnable 执行完后的返回值。 
          带时间参数的get()重载方法用于最多等待的时间后，如仍未返回则线程将继续执行。 

- cancel() ：撤销正在执行 Callable 的 Task。 

- isDone()：是否执行完毕。 

- isCancelled()：任务是否已经被取消。

# 3.线程组和线程优先级
## 3.0.前言

- 本节是一个知识普及，也可跳过阅读

- 实际编码注意事项：
**不要假定高优先级的线程一定先于低优先级的线程执行，不要有逻辑依赖于线程优先级，否则可能产生意外结果。**

## 3.1.介绍



**线程组：**

- 当我们创建了许多的线程时，我们可以通过将线程进行分组管理。然后我们只需对线程组进行控制，便可以控制该组内的线程。当然线程组提供的方法比较少，有以下方法：

   ThreadGroup.setDaemon(boolean)； 设置线程组是否为后台线程组

   ThreadGroup.setMaxPriority(int)； 设置线程组最高优先级

   ThreadGroup.interrip();              中断此线程组中的所有线程

- 创建线程组使用的时ThreadGroup类，有以下的构造方法：

   ThreadGroup(String name);  创建一个空线程名称为name的线程组

   ThreadGroup(ThreadGroup parent;String name)  创建指定父线程组且名称为name的线程组

- 线程添加到线程组的方式是通过线程创建时，传入线程组对象到线程的构造方法中。

   Thread(ThreadGroup threadGroup,Runnable target)

   Thread(ThreadGroup threadGroup,Runnable target,String name)

   Thread(ThreadGroup threadGroup,String name)

## 3.2.代码



## 3.3.扩展阅读

> 参考：`https://www.javamex.com/tutorials/threads/priority.shtml`

```
对于线程优先级，我们需要注意：

* Thread.setPriority()可能根本不做任何事情，这跟你的操作系统和虚拟机版本有关
* 线程优先级对于不同的线程调度器可能有不同的含义，可能并不是你直观的推测。特别地，优先级并不一定是指CPU的分享。在UNIX系统，优先级或多或少可以认为是CPU的分配，但Windows不是这样
* 线程的优先级通常是全局的和局部的优先级设定的组合。Java的setPriority()方法只应用于局部的优先级。换句话说，你不能在整个可能的范围 内设定优先级。（这通常是一种保护的方式，你大概不希望鼠标指针的线程或者处理音频数据的线程被其它随机的用户线程所抢占）
* 不同的系统有不同的线程优先级的取值范围，但是Java定义了10个级别（1-10）。这样就有可能出现几个线程在一个操作系统里有不同的优先级，在另外一个操作系统里却有相同的优先级（并因此可能有意想不到的行为）
* 操作系统可能（并通常这么做）根据线程的优先级给线程添加一些专有的行为（例如”only give a quantum boost if the priority is below X“）。这里再重复一次，优先级的定义有部分在不同系统间有差别。
* 大多数操作系统的线程调度器实际上执行的是在战略的角度上对线程的优先级做临时操作（例如当一个线程接收到它所等待的一个事件或者I/O），通常操作系统知道最多，试图手工控制优先级可能只会干扰这个系统。
* 你的应用程序通常不知道有哪些其它进程运行的线程，所以对于整个系统来说，变更一个线程的优先级所带来的影响是难于预测的。例如你可能发现，你有一个预期 为偶尔在后台运行的低优先级的线程几乎没有运行，原因是一个病毒监控程序在一个稍微高一点的优先级（但仍然低于普通的优先级）上运行，并且无法预计你程序 的性能，它会根据你的客户使用的防病毒程序不同而不同。
```

## 3.*.考点

1. 记住当线程的优先级没有指定时，所有线程都携带普通优先级。
2. 优先级可以用从1到10的范围指定。10表示最高优先级，1表示最低优先级，5是普通优先级。
3. 记住优先级最高的线程在执行时被给予优先。但是不能保证线程在启动时就进入运行状态。
4. 与在线程池中等待运行机会的线程相比，当前正在运行的线程可能总是拥有更高的优先级。
5. 由调度程序决定哪一个线程被执行。
6. t.setPriority()用来设定线程的优先级。
7. 记住在线程开始方法被调用之前，线程的优先级应该被设定。
8. 你可以使用常量，如MIN_PRIORITY,MAX_PRIORITY，NORM_PRIORITY来设定优先级。

9. 对线程组设置了优先级别，时候为后台线程组，只是关于该线程组的，不能代表线程组内的线程。真正设置线程是否为后台的还是需要调用Thread.setDaemon方法
10. 后台线程并不是等到前台线程执行完后才执行，而是跟前台线程一起执行。当前台线程执行完后，JVM通知后台死亡，哪怕后台还没有运行完，后台线程也死亡。

# 4.Java线程的状态及主要转换方式

# 5.Java线程间的通信

# 6.Java内存模型基础知识(JMM)
## 6.1.基本概念
### 6.1.1.可见性

可见性：

　　可见性是一种复杂的属性，因为可见性中的错误总是会违背我们的直觉。通常，我们无法确保执行读操作的线程能适时地看到其他线程写入的值，有时甚至是根本不可能的事情。为了确保多个线程之间对内存写入操作的可见性，必须使用同步机制。

　　可见性，是指线程之间的可见性，一个线程修改的状态对另一个线程是可见的。也就是一个线程修改的结果。另一个线程马上就能看到。比如：用volatile修饰的变量，就会具有可见性。volatile修饰的变量不允许线程内部缓存和重排序，即直接修改内存。所以对其他线程是可见的。但是这里需要注意一个问题，volatile只能让被他修饰内容具有可见性，但不能保证它具有原子性。比如 volatile int a = 0；之后有一个操作 a++；这个变量a具有可见性，但是a++ 依然是一个非原子操作，也就是这个操作同样存在线程安全问题。

　　在 Java 中 volatile、synchronized 和 final 实现可见性。

### 6.1.2.原子性

原子性：

　　原子是世界上的最小单位，具有不可分割性。比如 a=0；（a非long和double类型） 这个操作是不可分割的，那么我们说这个操作时原子操作。再比如：a++； 这个操作实际是a = a + 1；是可分割的，所以他不是一个原子操作。非原子操作都会存在线程安全问题，需要我们使用同步技术（sychronized）来让它变成一个原子操作。一个操作是原子操作，那么我们称它具有原子性。java的concurrent包下提供了一些原子类，我们可以通过阅读API来了解这些原子类的用法。比如：AtomicInteger、AtomicLong、AtomicReference等。

　　在 Java 中 synchronized 和在 lock、unlock 中操作保证原子性。

### 6.1.3.有序性

有序性：

　　Java 语言提供了 volatile 和 synchronized 两个关键字来保证线程之间操作的有序性，volatile 是因为其本身包含“禁止指令重排序”的语义，synchronized 是由“一个变量在同一个时刻只允许一条线程对其进行 lock 操作”这条规则获得的，此规则决定了持有同一个对象锁的两个同步块只能串行执行。


# 7.重排序与happens-before
## 7.0.前言

**重点**：在我们多线程编程时，程序的执行顺序不一定按我们的编写顺序执行，因为在执行的过程中，发生了重排序。它可能是即时编译器的重排序，可能是处理器的乱序执行，或者是内存系统的重排序。

# 8.volatile
## 8.1.Volatile原理

　　Java语言提供了一种稍弱的同步机制，即volatile变量，用来确保将变量的更新操作通知到其他线程。当把变量声明为volatile类型后，编译器与运行时都会注意到这个变量是共享的，**因此不会将该变量上的操作与其他内存操作一起重排序**。volatile变量不会被缓存在寄存器或者对其他处理器不可见的地方，因此在读取volatile类型的变量时总会返回最新写入的值。

　　**在访问volatile变量时不会执行加锁操作，因此也就不会使执行线程阻塞，因此volatile变量是一种比sychronized关键字更轻量级的同步机制。**

![volatile.png](https://img-blog.csdnimg.cn/20201230213106548.png)

当对非 volatile 变量进行读写的时候，每个线程先从内存拷贝变量到CPU缓存中。如果计算机有多个CPU，每个线程可能在不同的CPU上被处理，这意味着每个线程可以拷贝到不同的 CPU cache 中。

　　**而声明变量是 volatile 的，JVM 保证了每次读变量都从内存中读，跳过 CPU cache 这一步**。

- 当一个变量定义为 volatile 之后，将具备两种特性：
　　1.保证此变量对所有的线程的可见性，这里的“可见性”，如本文开头所述，当一个线程修改了这个变量的值，volatile 保证了新值能立即同步到主内存，以及每次使用前立即从主内存刷新。但普通变量做不到这点，普通变量的值在线程间传递均需要通过主内存（详见：Java内存模型）来完成。

　　2.禁止指令重排序优化。有volatile修饰的变量，赋值后多执行了一个“load addl $0x0, (%esp)”操作，这个操作相当于一个**内存屏障**（指令重排序时不能把后面的指令重排序到内存屏障之前的位置），只有一个CPU访问内存时，并不需要内存屏障；（什么是指令重排序：是指CPU采用了允许将多条指令不按程序规定的顺序分开发送给各相应电路单元处理）。

volatile 性能：
　　volatile 的读性能消耗与普通变量几乎相同，但是写操作稍慢，因为它需要在本地代码中插入许多内存屏障指令来保证处理器不发生乱序执行。
　　

# 9.synchronize锁
## 9.0.前言

多线程中最重要的就是防止发生线程安全问题，最近经典的售票场景，要保证不能一票多卖，这就是锁的重要性，而且不能有票卖不出去(发生死锁)。

- `synchronized关键字，我们一般称之为”同步锁“，用它来修饰需要同步的方法和需要同步代码块，默认是当前对象作为锁的对象。它可以修饰以下几种对象：`

1. 代码块：被修饰的代码块称为同步语句块，其作用的范围是大括号{ }里的代码，作用的对象是调用这个代码块的对象；

2. 方法：被修饰的方法称为同步方法，其作用的范围是整个方法，作用的对象是调用这个方法的对象

3. 静态方法：作用的范围是整个静态方法，作用的对象是这个类的所有对象

4. 类：作用的范围是synchronize后面括号里的部分，作用的对象是这个类的所有对象


## 9.1.Synchronized对象锁(方法锁)
### 9.1.1.代码

> 直接上代码更直观

Task.java

```java
package synchronizedDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/3 17:42
 * @description
 */

/**
 * 可以从synchronized加锁位置区分对象锁和类锁：
 * 1、对象锁
 *
 * 普通同步方法，锁是当前实例对象。比如：
 *
 * public synchronized void doLongTimeTaskC() {}
 *
 * 2、类锁
 *
 * 静态同步方法，锁是当前类的Class对象。比如：
 *
 * public synchronized static void doLongTimeTaskA() {}
 *
 * 3、同步代码块
 *
 * 加在同步代码块上，锁是Synchonized括号里配置的对象，可以是实例对象，也可以是Class对象；
 *
 * public void doLongTimeTaskD() {
 *     synchronized (this) {
 *     }
 * }
 *
 * 或
 *
 * public static void doLongTimeTaskE() {
 *     synchronized (Task.class) {
 *     }
 * }
 */
public class Task {

    /**
     * 对象锁：普通同步方法，锁为当前实例对象。
     */
    public synchronized void doLongTimeTaskA() {
        System.out.println("name = " + Thread.currentThread().getName() + ", begain");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("name = " + Thread.currentThread().getName() + ", end");

    }

    /**
     * 对象锁：同步代码块，锁为代码块里面的实例对象。
     */
    public void doLongTimeTaskB() {
        synchronized (this) {
            System.out.println("name = " + Thread.currentThread().getName() + ", begain");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("name = " + Thread.currentThread().getName() + ", end");
        }
    }
}
```

ThreadA.java

```java
package synchronizedDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/3 17:44
 * @description
 */
public class ThreadA extends Thread{
    private Task mTask;

    public ThreadA(Task tk){
        mTask = tk;
    }

    @Override
    public void run() {
        mTask.doLongTimeTaskA();
    }
}
```

ThreadB.java

```java
package synchronizedDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/3 17:45
 * @description
 */
public class ThreadB extends Thread{
    private Task mTask;

    public ThreadB(Task tk){
        mTask = tk;
    }

    @Override
    public void run() {
        mTask.doLongTimeTaskB();
    }
}
```

RunTest.java

```java
package synchronizedDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/3 17:45
 * @description
 */

/**
 * 对象锁测试
 */
public class RunTest {
    public static void main(String[] args) {
        Task mTaskA = new Task();
        Task mTaskB = new Task();

        ThreadA ta1 = new ThreadA(mTaskA);
        ThreadA ta2 = new ThreadA(mTaskB);

        ThreadB tb1 = new ThreadB(mTaskA);
        ThreadB tb2 = new ThreadB(mTaskB);

        ta1.setName("A1");
        ta2.setName("A2");

        tb1.setName("B1");
        tb2.setName("B2");

        ta1.start();
        ta2.start();
        tb1.start();
        tb2.start();
    }
}
```

运行结果：

```bash
name = A1, begain
name = A2, begain
name = A2, end
name = A1, end
name = B2, begain
name = B1, begain
name = B2, end
name = B1, end
```

> - 从运行结果可以看出来，A1,begin后没有打印A1,end，而是打印了A2，begin，说明俩个线程用的不是同一个锁，如果用的是同一把锁，A1,begin输出，必然需要等A1,end结束释放锁后，A2获取锁才会接着输出A2,begin。

> - 所以A1，A2分别用的是自己持有对象的锁，线程自己管自己的锁，互不影响，线程异步执行，而不是排队等待执行。

对于B1和B2也是同理。

### 9.1.2.结论

**总结：**

多线程分别持有多个对象，每个线程异步执行对象的同步方法，因为JVM为每个对象创建了锁。

如果想让线程排队执行，让多个线程持有同一个对象，线程就会排队执行。

> **对象锁是用于对象实例方法，或者一个对象实例上的**

## 9.2.Synchronized类锁
### 9.2.1.代码

> 直接上代码更直观

Task.java

```java
package synchronizedDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/3 17:42
 * @description
 */
/**
 * 可以从synchronized加锁位置区分对象锁和类锁：
 * 1、对象锁
 *
 * 普通同步方法，锁是当前实例对象。比如：
 *
 * public synchronized void doLongTimeTaskC() {}
 *
 * 2、类锁
 *
 * 静态同步方法，锁是当前类的Class对象。比如：
 *
 * public synchronized static void doLongTimeTaskA() {}
 *
 * 3、同步代码块
 *
 * 加在同步代码块上，锁是Synchonized括号里配置的对象，可以是实例对象，也可以是Class对象；
 *
 * public void doLongTimeTaskD() {
 *     synchronized (this) {
 *     }
 * }
 *
 * 或
 *
 * public static void doLongTimeTaskE() {
 *     synchronized (Task.class) {
 *     }
 * }
 */
public class Task {

//    // 静态对象
//    private static Object object = new Object();

    /**
     * 对象锁：普通同步方法，锁为当前实例对象。
     */
    public synchronized void doLongTimeTaskA() {
        System.out.println("name = " + Thread.currentThread().getName() + ", begin");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("name = " + Thread.currentThread().getName() + ", end");

    }

    /**
     * 对象锁：同步代码块，锁为代码块里面的实例对象。
     */
    public void doLongTimeTaskB() {
        synchronized (this) {
            System.out.println("name = " + Thread.currentThread().getName() + ", begin");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("name = " + Thread.currentThread().getName() + ", end");
        }
    }

    /**
     * 类锁：静态同步方法，锁为当前Class对象。
     */
    public synchronized static void doLongTimeTaskC() {
        System.out.println("name = " + Thread.currentThread().getName() + ", begin");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("name = " + Thread.currentThread().getName() + ", end");
    }

    /**
     * 类锁：静态同步方法，锁为当前Class对象。
     */
    public synchronized static void doLongTimeTaskD() {
        System.out.println("name = " + Thread.currentThread().getName() + ", begin");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("name = " + Thread.currentThread().getName() + ", end");
    }

    /**
     * 同步代码块：里面的对象可以是Class对象，也可以是实例对象。
     */
    public static void doLongTimeTaskE() {
        synchronized (Task.class) {// Class对象
            //synchronized (object) {// 实例对象
            System.out.println("name = " + Thread.currentThread().getName() + ", begin");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("name = " + Thread.currentThread().getName() + ", end");
        }
    }
}
```

ThreadC.java

```java
package synchronizedDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/3 18:12
 * @description
 */
public class ThreadC extends Thread{
    private Task mTask;

    public ThreadC(Task tk){
        mTask = tk;
    }

    @Override
    public void run() {
        mTask.doLongTimeTaskC();
    }
}
```

ThreadD.java

```java
package synchronizedDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/3 18:13
 * @description
 */
public class ThreadD extends Thread{
    private Task mTask;

    public ThreadD(Task tk){
        mTask = tk;
    }

    @Override
    public void run() {
        mTask.doLongTimeTaskD();
    }
}
```

ThreadE.java

```java
package synchronizedDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/3 18:13
 * @description
 */
public class ThreadE extends Thread{
    private Task mTask;

    public ThreadE(Task tk){
        mTask = tk;
    }

    @Override
    public void run() {
        mTask.doLongTimeTaskE();
    }
}
```

RunClassTest.java

```java
package synchronizedDemo;

/**
 * @author wangshiyu rodert
 * @date 2020/6/3 18:14
 * @description
 */
/**
 * 类锁测试
 */
public class RunClassTest {
    public static void main(String[] args) {
        Task mTask = new Task();
        ThreadC tc = new ThreadC(mTask);
        ThreadD td = new ThreadD(mTask);
        ThreadE te = new ThreadE(mTask);

        tc.setName("C");// 静态同步方法
        td.setName("D");// 静态同步方法
        te.setName("E");// 静态方法同步代码块

        tc.start();
        td.start();
        te.start();
    }
}
```

运行结果：

```bash
name = C, begin
name = C, end
name = E, begin
name = E, end
name = D, begin
name = D, end
```

### 9.2.2.结论

**结论：**

> 从程序运行结果可以看到，结果按照某个线程begin，然后接着输出end，说明线程按顺序执行同步方法。
> 因为，三个线程持有的是Task的Class类锁，是同一个锁，所以线程需要排队等待执行，直到获取锁才能执行，
> 这就是结果按顺序输出的原因，这也是类锁的特性，多个线程持有一个类锁，排队执行，持有就是王者，
> 否则就排队等待。

**类锁是用于类的静态方法或者一个类的class对象上的**

## 9.3.考点-重点



总结起来很简单：

- 一个锁的是类对象，一个锁的是实例对象。
- 若类对象被lock，则类对象的所有同步方法全被lock；
- 若实例对象被lock，则该实例对象的所有同步方法全被lock

# 10.CAS与原子操作
## 10.1.什么是原子操作

> 首先我们先搞明白什么是原子操作。

`“原子操作(atomic operation)是不需要synchronized”，这是多线程编程的老生常谈了。所谓原子操作是指不会被线程调度机制打断的操作；这种操作一旦开始，就一直运行到结束，中间不会有任何 context switch （切换到另一个线程）。`

如果这个操作所处的层(layer)的更高层不能发现其内部实现与结构，那么这个操作是一个原子(atomic)操作。
原子操作可以是一个步骤，也可以是多个操作步骤，但是其顺序不可以被打乱，也不可以被切割而只执行其中的一部分。
将整个操作视作一个整体是原子性的核心特征。

> 原子不一定只是一个步骤。

## 10.2.如何实现原子操作？
### 10.2.1.锁机制实现原子操作及其问题

实现原子操作，我们第一想到的一定是使用锁(如果不了解锁，前面内容有介绍)，但是它也有一些弊端。

实现原子操作可以使用锁。锁机制满足基本的需求是没有问题的，但是有的时候我们的需求并非这么简单，我们需要更有效，更加灵活的机制。synchronized关键字是基于阻塞的锁机制，也就是说当一个线程拥有锁的时候，访问同一资源的其它线程需要等待，直到该线程释放锁。使用synchronized关键字存在这样的问题：

（1）如果被阻塞的线程优先级很高很重要怎么办？

（2）如果获得锁的线程一直不释放锁怎么办？

（3）如果有大量的线程来竞争资源，那CPU将会花费大量的时间和资源来处理这些竞争，同时，还有可能出现一些例如死锁之类的情况。

使用锁机制是一种比较粗糙、粒度比较大的机制，我们可以想象多个线程操作同一个计数器的业务场景，使用锁机制的话显得太过笨重。

> 带着这几个问题，我们继续看下边。

### 10.2.2.CAS机制

    实现原子操作还可以使用当前的处理器基本都支持CAS(Compare And Swap)的指令，CPU指令集上提供了CAS操作相关指令，实现原子操作可以使用这些指令。每一个CAS操作过程都包含3个运算参数：一个内存地址V，一个期望的值A和一个新值B，操作的时候如果这个地址上存放的值等于这个期望的值A，则将地址上的值赋为新值B，否则不做任何操作。

### 10.2.3.CAS使用

先来模拟一个多个线程操作同一个计数器的场景，JDK中提供了boolean、int和long基本类型对应的原子包装类AtomicBoolean、AtomicInteger和AtomicLong。我们用AtomicInteger演示，通过CountDownLatch进行并发模拟，如果对CountDownLatch用法不了解，欢迎查看上一篇文章，有通俗易懂的例子。先对AtomicInteger的主要API做一个介绍：

（1）int addAndGet（int delta）：以原子方式将输入的数值与实例中的值（AtomicInteger里的value）相加，并返回结果。

（2）boolean compareAndSet（int expect，int update）：如果当前数值等于expect，则以原子方式将当前值设置为update。

（3）int getAndIncrement()：以原子方式将当前值加1，注意，这里返回的是自增前的值。

（4）int getAndSet（int newValue）：以原子方式设置为newValue的值，并返回旧值。

### 10.2.4.CAS原理

    CAS的基本思路就是，如果内存地址V上的值和期望的值A相等，则给其赋予新值B，否则不做任何事儿。CAS就是在一个循环里不断的做CAS操作，直到成功为止。CAS是怎么实现线程的安全呢？语言层面不做处理，JDK 调用这些指令来完成CAS操作，本质上就是将其交给CPU和内存，利用CPU的多处理能力，实现硬件层面的阻塞，再加上volatile变量的特性即可实现基于原子操作的线程安全。用一张图来说明。

![CAS操作流程图.png](https://img-blog.csdnimg.cn/20201230213042802.png)

## 10.3.CAS实现原子操作的三大问题
### 10.3.0.前言

> 这是比较重要的，也是老生常谈的问题

### 10.3.1.ABA问题

> 多线程面试经常会提到的问题。

 　因为CAS需要在操作值的时候，检查值有没有发生变化，如果没有发生变化则更新，但是如果一个值原来是A，变成了B，又变成了A，那么使用CAS进行检查时会发现它的值没有发生变化，但是实际上却变化了。举个通俗易懂的例子，我的同事老王今年35岁了，还没有女朋友，我问他有什么要求，给他介绍一个女朋友。老王就说了，只要是没有结婚、35岁以下的女的就行。于是我就给他介绍了一个28岁，刚刚离婚不久的女同志，他还感谢了我好久，可能是他现在都还不知道他这个女朋友离过婚。这就是典型的ABA问题，只关心当前状态，而不管中间经历了什么。ABA问题的解决思路就是使用版本号。给变量追加一个版本号，每次变量更新的时候把版本号加1，那么A→B→A就会变成1A→2B→3A。就好比老王的要求改成：35岁以下，没有结婚并且离婚次数为0的女性，就不会发生刚刚的事情了。

### 10.3.2.循环时间长开销大。

 　CAS自旋如果长时间不成功，会给CPU带来非常大的执行开销。

### 10.3.3.只能保证一个共享变量的原子操作

　　当对一个共享变量执行操作时，我们可以使用循环CAS的方式来保证原子操作，但是对多个共享变量操作时，循环CAS就无法保证操作的原子性，这个时候就可以用锁。怎么解决这个问题呢？从Java 1.5开始，JDK提供了AtomicReference类来保证引用对象之间的原子性，就可以把多个变量放在一个对象里来进行CAS操作。

## 10.4.Java代码-JDK中相关原子操作类
### 10.4.1.AtomicReference

AtomicReference，可以原子更新的对象引用。AtomicReference有一个compareAndSet()方法，它可以将已持有引用与预期引用进行比较，如果它们相等，则在AtomicReference对象内设置一个新的引用。看一段代码：

```java
import java.util.concurrent.atomic.AtomicReference;

public class AtomicReferenceDemo {
    static AtomicReference<UserInfo> atomicReference;

    public static void main(String[] args) {
        //原引用
        UserInfo oldUser = new UserInfo("老王", 35);
        atomicReference = new AtomicReference<>(oldUser);

        //新引用
        UserInfo updateUser = new UserInfo("小宋", 21);
        atomicReference.compareAndSet(oldUser, updateUser);

        System.out.println("使用compareAndSet()替换原有引用后的结果：" + atomicReference.get());
        System.out.println("原引用：" + oldUser);
    }

    static class UserInfo {
        private String name;
        private int age;

        public UserInfo(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public String getName() {
            return name;
        }

        public int getAge() {
            return age;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setAge(int age) {
            this.age = age;
        }

        @Override
        public String toString() {
            return "UserInfo{" +
                    "name='" + name + '\'' +
                    ", age=" + age +
                    '}';
        }
    }
}
```



**运行结果**：

从程序输出可以看到，atomicReference的持有的引用被修改了，但是原引用对象并没有发生改变。

```bash
使用compareAndSet()替换原有引用后的结果：UserInfo{name='小宋', age=21}
原引用：UserInfo{name='老王', age=35}
```
### 10.4.2.AtomicStampedReference

10.4.2-10.4.4这几个方法参考：
https://www.cnblogs.com/hongshaodian/p/12452110.html

### 10.4.3.AtomicMarkableReference
### 10.4.4.AtomicIntegerArray




## 10.5.考点
### 10.5.0.乐观锁与悲观锁

> 插一篇介绍

- 乐观锁和悲观锁

Synchronized属于悲观锁，悲观地认为程序中的并发情况严重，所以严防死守。CAS属于乐观锁，乐观地认为程序中的并发情况不那么严重，所以让线程不断去尝试更新。

性能对比：
Synchronized关键字会让没有得到锁资源的线程进入blocked状态，而后在争夺到锁资源后恢复为runnable状态，这个过程中涉及到操作系统用户模式和内核模式的转换，代价比较高。

尽管Java1.6为Synchronized做了优化，增加了从偏向锁到轻量级锁再到重量级锁的过度，但是在最终转变为重量级锁之后，性能仍然较低。


### 10.5.1.CAS的ABA问题解决
#### 10.5.1.1.核心概念
> 这个问题是个很经典的问题，提问频率很高

核心概念：**CAS有3个操作数，内存值V，旧的预期值A，要修改的新值B。当且仅当预期值A和内存值V相同时，将内存值V修改为B，否则什么都不做。**

#### 10.5.1.2.场景

- 场景

因为CAS需要在操作值的时候检查下值有没有发生变化，如果没有发生变化则更新，但是如果一个值原来是A，变成了B，又变成了A，那么使用CAS进行检查时会发现它的值没有发生变化，但是实际上却变化了。ABA问题的解决思路就是使用版本号。在变量前面追加上版本号，每次变量更新的时候把版本号加一，那么A－B－A 就会变成1A-2B－3A。

#### 10.5.1.3.解决

从Java1.5开始JDK的atomic包里提供了一个类AtomicStampedReference来解决ABA问题。这个类的compareAndSet方法作用是首先检查当前引用是否等于预期引用，并且当前标志是否等于预期标志，如果全部相等，则以原子方式将该引用和该标志的值设置为给定的更新值。

##### 10.5.1.4.代码

```java
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicStampedReference;
public class ABA {
        private static AtomicInteger atomicInt = new AtomicInteger(100);
        private static AtomicStampedReference atomicStampedRef = new AtomicStampedReference(100, 0);
        public static void main(String[] args) throws InterruptedException {
                Thread intT1 = new Thread(new Runnable() {
                        @Override
                        public void run() {
                                atomicInt.compareAndSet(100, 101);
                                atomicInt.compareAndSet(101, 100);
                        }
                });
                Thread intT2 = new Thread(new Runnable() {
                        @Override
                        public void run() {
                                try {
                                        TimeUnit.SECONDS.sleep(1);
                                } catch (InterruptedException e) {
                                }
                                boolean c3 = atomicInt.compareAndSet(100, 101);
                                System.out.println(c3); // true
                        }
                });
                intT1.start();
                intT2.start();
                intT1.join();
                intT2.join();
                Thread refT1 = new Thread(new Runnable() {
                        @Override
                        public void run() {
                                try {
                                        TimeUnit.SECONDS.sleep(1);
                                } catch (InterruptedException e) {
                                }
                                atomicStampedRef.compareAndSet(100, 101, atomicStampedRef.getStamp(), atomicStampedRef.getStamp() + 1);
                                atomicStampedRef.compareAndSet(101, 100, atomicStampedRef.getStamp(), atomicStampedRef.getStamp() + 1);
                        }
                });
                Thread refT2 = new Thread(new Runnable() {
                        @Override
                        public void run() {
                                int stamp = atomicStampedRef.getStamp();
                                try {
                                        TimeUnit.SECONDS.sleep(2);
                                } catch (InterruptedException e) {
                                }
                                boolean c3 = atomicStampedRef.compareAndSet(100, 101, stamp, stamp + 1);
                                System.out.println(c3); // false
                        }
                });
                refT1.start();
                refT2.start();
        }
}
```


# 11.AQS
## 11.1.介绍

- J.U.C(java.util.concurrent)包中提供的并发方法，都基于同步器，AQS是一个同步器，设计模式是模板模式。

- 核心数据结构：双向链表 + state(锁状态)

- 底层操作：CAS

https://www.jianshu.com/p/7b0e11a1e605
这块较难，稍后看

# 12.线程池
## 12.1.简介

- 引入

```
“
	池化技术大家都屡见不鲜，线程池、数据库连接池、Http连接池等等都是对这个思想的应用。池化技术主要是为了减少每次获取资源的消耗，提高资源的利用率。
```

**<font color=#159957 face="黑体">线程池</font>**提供了一种资源限制和管理手段，当大量异步任务是**<font color=#159957 face="黑体">线程池</font>**能够提供较好的性能。

**<font color=#159957 face="黑体">线程池</font>**的好处，用《Java并发编程的艺术》。

- 降低资源的损耗。重复利用创建好的线程，减少了线程创建和销毁的开销。
- 提高响应速度。当任务来临时，创建好的线程能立马处理新来的任务，不需要等待线程创建完毕再执行。
- 方便线程的管理。线程是稀缺资源，过多的创建线程可能会降低系统的稳定性，线程池能控制线程创建的数量，并对其进行监控、管理、调优，从而提供系统稳定性。

## 12.2.如何使用线程池？

一般通过 `ThreadPoolExecutor` 的构造函数来创建线程池，然后提交任务给线程池就可以了。

`ThreadPoolExecutor` 的构造函数：

```java
    /**
     * Creates a new {@code ThreadPoolExecutor} with the given initial
     * parameters and default thread factory.
     *
     * @param corePoolSize the number of threads to keep in the pool, even
     *        if they are idle, unless {@code allowCoreThreadTimeOut} is set
     * @param maximumPoolSize the maximum number of threads to allow in the
     *        pool
     * @param keepAliveTime when the number of threads is greater than
     *        the core, this is the maximum time that excess idle threads
     *        will wait for new tasks before terminating.
     * @param unit the time unit for the {@code keepAliveTime} argument
     * @param workQueue the queue to use for holding tasks before they are
     *        executed.  This queue will hold only the {@code Runnable}
     *        tasks submitted by the {@code execute} method.
     * @param handler the handler to use when execution is blocked
     *        because the thread bounds and queue capacities are reached
     * @throws IllegalArgumentException if one of the following holds:<br>
     *         {@code corePoolSize < 0}<br>
     *         {@code keepAliveTime < 0}<br>
     *         {@code maximumPoolSize <= 0}<br>
     *         {@code maximumPoolSize < corePoolSize}
     * @throws NullPointerException if {@code workQueue}
     *         or {@code handler} is null
     */
    public ThreadPoolExecutor(int corePoolSize, //核心线程池大小
                              int maximumPoolSize, //最大线程池大小
                              long keepAliveTime, //线程最大空闲时间
                              TimeUnit unit, //	时间单位
                              BlockingQueue<Runnable> workQueue, //线程等待队列
                              ThreadFactory threadFactory,//线程工厂，用来创建线程，一般默认即可
                              RejectedExecutionHandler handler //拒绝策略
                              ) {
        this(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue,
             Executors.defaultThreadFactory(), handler);
    }
```

演示Demo如何使用线程池。

```java
    private static final int CORE_POOL_SIZE = 5;
    private static final int MAX_POOL_SIZE = 10;
    private static final int QUEUE_CAPACITY = 100;
    private static final Long KEEP_ALIVE_TIME = 1L;

    public static void main(String[] args) {

        //使用阿里巴巴推荐的创建线程池的方式
        //通过ThreadPoolExecutor构造函数自定义参数创建
        ThreadPoolExecutor executor = new ThreadPoolExecutor(
                CORE_POOL_SIZE,
                MAX_POOL_SIZE,
                KEEP_ALIVE_TIME,
                TimeUnit.SECONDS,
                new ArrayBlockingQueue<>(QUEUE_CAPACITY),
                new ThreadPoolExecutor.CallerRunsPolicy());

        for (int i = 0; i < 10; i++) {
            executor.execute(() -> {
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("CurrentThread name:" + Thread.currentThread().getName() + "instant date：" + Instant.now());
            });
        }
        //终止线程池
        executor.shutdown();
        try {
            executor.awaitTermination(3, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("end of program");
    }
```

控制台结果：

```bash
CurrentThread name:pool-1-thread-2instant date：2020-06-12T08:24:33.345Z
CurrentThread name:pool-1-thread-4instant date：2020-06-12T08:24:33.345Z
CurrentThread name:pool-1-thread-3instant date：2020-06-12T08:24:33.345Z
CurrentThread name:pool-1-thread-5instant date：2020-06-12T08:24:33.345Z
CurrentThread name:pool-1-thread-1instant date：2020-06-12T08:24:33.355Z
CurrentThread name:pool-1-thread-1instant date：2020-06-12T08:24:35.379Z
CurrentThread name:pool-1-thread-5instant date：2020-06-12T08:24:35.379Z
CurrentThread name:pool-1-thread-3instant date：2020-06-12T08:24:35.380Z
CurrentThread name:pool-1-thread-4instant date：2020-06-12T08:24:35.380Z
CurrentThread name:pool-1-thread-2instant date：2020-06-12T08:24:35.380Z
end of program
```

## 12.3.实践解析

本篇只为记录总结我了解和应该注意的多线程知识，网上这类文章很少。

### 12.3.1.使用ThreadPoolExecutor的构造函数声明线程池

线程池需要手动通过 `ThreadPoolExecutor` 的构造函数来声明，避免使用 `Executors` 去创建，这样可以更明确线程池的运行规则，规避资源耗尽的风险。

```
“
`Executors` 返回的线程池对象的弊端如下：
1. `FixedThreadPool` 和 `SingleThreadPool`:
允许的请求队列长度为 `Integer.MAX_VALUE`，可能会堆积大量的请求，从而导致 OOM。
2. `CachedThreadPool` 和 `ScheduledThreadPool`:
允许的创建线程数量为 `Integer.MAX_VALUE`，可能会创建大量的线程，从而导致 OOM。

Out Of Memory
```

一句话：**<font color=#159957 face="黑体">使用有界队列，控制线程创建数量。</font>**



**还有：**

1. 创建线程或线程池时请指定有意义的线程名称，方便出错时回溯

2. 实际生产中，我们根据自己机器的性能、业务场景手动配置线程池的参数。


### 12.3.2.




