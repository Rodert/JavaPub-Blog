`阅读大约3分钟`

再由一年就是2021年春节了，大家有没有为新的一年立一个 flag ，flag 这东西，实现是一方面，最重要的是一定要立。回首，我们也可以看看我们的立 flag 过程。


[toc]

## 前言

枚举类在 java 中使用频率极高，这个 equal 还是 == 问题需要注意。这写个问题就我们一年重视的，所谓基础不牢，地动山摇。



## 问题

我知道Java枚举会被编译成一个包含私有构造参数和一堆静态方法的类，当去比较两个枚举的时候，总是使用equals()方法，例如：

```java
public useEnums(SomeEnum a)
{
    if(a.equals(SomeEnum.SOME_ENUM_VALUE))
    {
        ...
    }
    ...
}
```


除此之外，我也可以使用 == 替代equals() 方法

```java
public useEnums2(SomeEnum a)
{
    if(a == SomeEnum.SOME_ENUM_VALUE)
    {
        ...
    }
    ...
}
```

## 答案
二者皆对，如果你看过枚举的源码，你会发现在源码中，equals也仅仅非常简单的 == 。 我使用 == ，因为无论如何，这个左值是可以为 null的

 java.lang.Enum 中Equals 代码：
 
```java
public final boolean equals(Object other) {
    return this==other;
}
```

## 详细探讨

### equals和==区别

#### ==

- 基本数据类型，也就是原始数据类型，比如：byte,short,char,int,long,float,double,boolean。他们之间的比较，应用双等号（==）,比较的是他们的值。

- 引用数据类型，当他们用（==）进行比较的时候，比较的是他们在内存中的存放地址（确切的说，是堆内存地址）。除非是同一个new出来的对象，他们的比较后的结果为true，否则比较后结果为false。因为每new一次，都会重新开辟堆内存空间。

#### equals

JAVA当中所有的类都是继承于Object这个超类的，在Object类中定义了一个equals的方法，equals的源码是这样写的：

```java
public boolean equals(Object obj) {
    //this - s1
    //obj - s2
    return (this == obj);
}
```

可以看到，这个方法的初始默认行为是比较对象的内存地址值，一般来说，意义不大。所以，在一些类库当中这个方法被重写了，如String、Integer、Date。在这些类当中equals有其自身的实现（一般都是用来比较对象的成员变量值是否相同），而不再是比较类在堆内存中的存放地址了。

所以说，对于复合数据类型之间进行equals比较，在没有覆写equals方法的情况下，他们之间的比较还是内存中的存放位置的地址值，跟双等号（==）的结果相同；如果被复写，按照复写的要求来。

总结：

- == 的作用：
 
基本类型：比较的就是值是否相同

引用类型：比较的就是地址值是否相同

- equals 的作用:

引用类型：默认情况下，比较的是地址值。

注：不过，我们可以根据情况自己重写该方法。一般重写都是自动生成，比较对象的成员变量值是否相同


### 能在枚举中使用 == 进行判断？

答案是肯定的，因为枚举有着严格的实例化控制，所以你可以用 == 去做比较符，这个用法，在官方文档中也有明确的说明。

> JLS 8.9 Enums 一个枚举类型除了定义的那些枚举常量外没有其他实例了。 试图明确地说明一种枚举类型是会导致编译期异常。在枚举中final clone方法确保枚举常量从不会被克隆，而且序列化机制会确保从不会因为反序列化而创造复制的实例。枚举类型的反射实例化也是被禁止的。总之，以上内容确保了除了定义的枚举常量之外，没有枚举类型实例。

因为每个枚举常量只有一个实例，所以如果在比较两个参考值，至少有一个涉及到枚举常量时，允许使用“==”代替equals()。（equals()方法在枚举类中是一个final方法，在参数和返回结果时，很少调用父类的equals()方法，因此是一种恒等的比较。）

### 什么时候 == 和 equals 不一样？
As a reminder, it needs to be said that generally, == is NOT a viable alternative to equals. When it is, however (such as with enum), there are two important differences to consider: 通常来说 == 不是一个 equals的一个备选方案，无论如何有2个重要的不同处需要考虑：

**== 不会抛出 NullPointerException**

```java
enum Color { BLACK, WHITE };

Color nothing = null;
if (nothing == Color.BLACK);      // runs fine
if (nothing.equals(Color.BLACK)); // throws NullPointerException
```

**== 在编译期检测类型兼容性**

```java
enum Color { BLACK, WHITE };
enum Chiral { LEFT, RIGHT };

if (Color.BLACK.equals(Chiral.LEFT)); // compiles fine
if (Color.BLACK == Chiral.LEFT);      // DOESN'T COMPILE!!! Incompatible types!
```

### 什么时候使用 == ？

Bloch specifically mentions that immutable classes that have proper control over their instances can guarantee to their clients that == is usable. enum is specifically mentioned to exemplify. 具体来说，那些提供恰当实例控制的不可变类能够保证 == 是可用的，枚举刚好符合这个条件。

考虑静态工厂方法代替构造器 它使得不可变的类可以确保不会存在两个相等的实例，即当且仅当a==b的时候才有a.equals(b)为true。如果类保证了这一点，它的客户端可以使用“==”操作符来代替equals（Object）方法，这样可以提升性能。枚举类型保证了这一点


参考：http://stackoverflow.com/questions/1750435/comparing-java-enum-members-or-equals


![pub哥的知识清单](https://img-blog.csdnimg.cn/20210111202525394.png)



我是pub哥，下期见