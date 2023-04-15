`阅读大约10分钟，实用性非常高，建议收藏`

PC阅读移步文末

![jdk8](https://img-blog.csdnimg.cn/20210312115307568.png)

# 前言

Java 8 已经公布有一段时间了，种种迹象表明 Java 8 是一个有重大改变的发行版。在 Java Code Geeks 上已经有很多介绍 Java 8 新特性的文章，例如 `Playing with Java 8 – Lambdas and Concurrency`、`Java 8 Date Time API Tutorial `:` LocalDateTime`和`Abstract Class Versus Interface in the JDK 8 Era`。本文还参考了一些其他资料，例如：`15 Must Read Java 8 Tutorials` 和 `The Dark Side of Java 8`。本文综合了上述资料，整理成一份关于 Java 8 新特性的参考教材，希望你有所收获。

毫无疑问，Java 8 是 Java 自 Java 5（发布于2004年）之后的最重要的版本。这个版本包含语言、编译器、库、工具和 JVM 等方面的十多个新特性。在本文中我们将学习这些新特性，并用实际的例子说明在什么场景下适合使用。

[toc]

# 介绍

Java 8 已经发布很久了，很多报道表明 Java 8 是一次重大的版本升级，虽然我们的 JDK 环境也升级到1.8，但是在日常的开发过程中，使用最多的编程风格还是停留在 JDK1.7。本篇将用通俗易懂的大白话讲解，并附上代码



### 1.Lambda 表达式：Lambda 允许把函数作为一个方法的参数(函数作为参数传递到方法中)

Lambda 表达式，也称为闭包，是 Java 8 中最大和最令人期待的语言改变。它允许我们将函数当成参数传递给某个方法，或者把代码本身当作数据处理，函数式开发者非常熟悉这些概念。

很多JVM平台上的语言(Groovy、Scala等)从诞生之日就支持 Lambda 表达式，但是 Java 开发者没有选择，只能使用匿名内部类代替Lambda表达式。

```java
//匿名内部类方式排序 
List<String> names = Arrays.asList( "a", "b", "d" ); 
 
Collections.sort(names, new Comparator<String>() { 
    @Override 
    public int compare(String s1, String s2) { 
        return s1.compareTo(s2); 
    } 
}); 
```

Lambda 的设计可谓耗费了很多时间和很大的社区力量，最终找到一种折中的实现方案，可以实现简洁而紧凑的语言结构。

Lambda 表达式的语法格式：

```
(parameters) -> expression 
或 
(parameters) ->{ statements; }
```

Lambda 编程风格，可以总结为四类：

- 可选类型声明：不需要声明参数类型，编译器可以统一识别参数值
- 可选的参数圆括号：一个参数无需定义圆括号，但多个参数需要定义圆括号
- 可选的大括号：如果主体包含了一个语句，就不需要使用大括号
- 可选的返回关键字：如果主体只有一个表达式返回值则编译器会自动返回值，大括号需要指定明表达式返回了一个数值

#### 1.1.可选类型声明

在使用过程中，我们可以不用显示声明参数类型，编译器可以统一识别参数类型，例如：

> Collections.sort(names, (s1, s2) -> s1.compareTo(s2)); 

上面代码中的参数s1、s2的类型是由编译器推理得出的，你也可以显式指定该参数的类型，例如：

> Collections.sort(names, (String s1, String s2) -> s1.compareTo(s2)); 

运行之后，两者结果一致!

#### 1.2.可选的参数圆括号

当方法那只有一个参数时，无需定义圆括号，例如：

> Arrays.asList( "a", "b", "d" ).forEach( e -> System.out.println( e ) ); 

但多个参数时，需要定义圆括号，例如：

> Arrays.asList( "a", "b", "d" ).sort( ( e1, e2 ) -> e1.compareTo( e2 ) );

#### 1.3.可选的大括号

当主体只包含了一行时，无需使用大括号，例如：

> Arrays.asList( "a", "b", "c" ).forEach( e -> System.out.println( e ) ); 

当主体包含多行时，需要使用大括号，例如:

```java
rrays.asList( "a", "b", "c" ).forEach( e -> { 
    System.out.println( e ); 
    System.out.println( e ); 
} ); 
```

#### 1.4.可选的返回关键字

如果表达式中的语句块只有一行，则可以不用使用return语句，返回值的类型也由编译器推理得出，例如：


> Arrays.asList( "a", "b", "d" ).sort( ( e1, e2 ) -> e1.compareTo( e2 ) ); 

如果语句块有多行，可以在大括号中指明表达式返回值，例如：

```java
Arrays.asList( "a", "b", "d" ).sort( ( e1, e2 ) -> { 
    int result = e1.compareTo( e2 ); 
    return result; 
} ); 
```

---

#### 1.5.变量作用域

还有一点需要了解的是，Lambda 表达式可以引用类成员和局部变量，但是会将这些变量隐式得转换成final，例如：

```java
String separator = ","; 
Arrays.asList( "a", "b", "c" ).forEach( 
    ( String e ) -> System.out.print( e + separator ) 
	); 
```
和
```java
final String separator = ","; 
Arrays.asList( "a", "b", "c" ).forEach( 
    ( String e ) -> System.out.print( e + separator ) ); 
```
两者等价!

同时，Lambda 表达式的局部变量可以不用声明为final，但是必须不可被后面的代码修改(即隐性的具有 final 的语义)，例如：

同时，Lambda 表达式的局部变量可以不用声明为final，但是必须不可被后面的代码修改(即隐性的具有 final 的语义)，例如：

```java
int num = 1; 
Arrays.asList(1,2,3,4).forEach(e -> System.out.println(num + e)); 
num =2; 
//报错信息：Local variable num defined in an enclosing scope must be final or effectively final 
```

在 Lambda 表达式当中不允许声明一个与局部变量同名的参数或者局部变量，例如：

```java
int num = 1; 
Arrays.asList(1,2,3,4).forEach(num -> System.out.println(num)); 
//报错信息：Variable 'num' is already defined in the scope 
```


### 2.函数式接口：指的是一个有且仅有一个抽象方法，但是可以有多个非抽象方法的接口，这样的接口可以隐式转换为 Lambda 表达式

Lambda 的设计者们为了让现有的功能与 Lambda 表达式良好兼容，考虑了很多方法，于是产生了函数接口这个概念。

函数接口指的是一个有且仅有一个抽象方法，但是可以有多个非抽象方法的接口，这样的接口可以隐式转换为 Lambda 表达式。

但是在实践中，函数式接口非常脆弱，只要某个开发者在该接口中添加一个函数，则该接口就不再是函数式接口进而导致编译失败。为了克服这种代码层面的脆弱性，并显式说明某个接口是函数式接口，Java 8 提供了一个特殊的注解@FunctionalInterface，举个简单的函数式接口的定义：

```java
@FunctionalInterface 
public interface GreetingService { 
 
    void sayMessage(String message); 
} 
```

Java7 只能通过匿名内部类进行编程，例如：

```java
GreetingService greetService = message -> System.out.println("Hello " + message); 
greetService.sayMessage("world"); 
```

目前 Java 库中的所有相关接口都已经带有这个注解了，实践上java.lang.Runnable和java.util.concurrent.Callable是函数式接口的最佳例子!


### 3.方法引用：方法引用提供了非常有用的语法，可以直接引用已有Java类或对象(实例)的方法或构造器。与lambda联合使用，方法引用可以使语言的构造更紧凑简洁，减少冗余代码

方法引用使用一对冒号::，通过方法的名字来指向一个方法。

方法引用可以使语言的构造更紧凑简洁，减少冗余代码。

下面，我们在Car类中定义了 4 个方法作为例子来区分 Java 中 4 种不同方法的引用。

```java
public class Car { 
 
    //Supplier是jdk1.8的接口，这里和lamda一起使用了 
    public static Car create(final Supplier<Car> supplier) { 
        return supplier.get(); 
    } 
 
    public static void collide(final Car car) { 
        System.out.println("Collided " + car.toString()); 
    } 
 
    public void follow(final Car another) { 
        System.out.println("Following the " + another.toString()); 
    } 
 
    public void repair() { 
        System.out.println("Repaired " + this.toString()); 
    } 
} 
```

#### 3.1.构造器引用

它的语法是Class::new，或者更一般的 Class< T >::new，实例如下：

```java
final Car car = Car.create( Car::new ); 
final List< Car > cars = Arrays.asList( car ); 
```


#### 3.2.静态方法引用

它的语法是Class::static_method，实例如下：

```java
cars.forEach( Car::collide ); 
```



#### 3.3.类的成员方法引用

它的语法是Class::method，实例如下：

```java
cars.forEach( Car::repair ); 
```


#### 3.4.实例对象的成员方法的引用

它的语法是instance::method，实例如下:

```java
final Car police = Car.create( Car::new ); 
cars.forEach( police::follow ); 
```

注意：这个方法接受一个Car类型的参数!

运行上述例子，可以在控制台看到如下输出：

```java
Collided com.example.jdk8.methodrefer.Car@15aeb7ab 
Repaired com.example.jdk8.methodrefer.Car@15aeb7ab 
Following the com.example.jdk8.methodrefer.Car@15aeb7ab
```

### 4.默认方法：默认方法就是一个在接口里面有了一个实现的方法

Java 8 使用两个新概念扩展了接口的含义：默认方法和静态方法。

默认方法使得开发者可以在不破坏二进制兼容性的前提下，往现存接口中添加新的方法，即不强制那些实现了该接口的类也同时实现这个新加的方法。

为什么要有这个特性?首先，之前的接口是个双刃剑，好处是面向抽象而不是面向具体编程，缺陷是，当需要修改接口时候，需要修改全部实现该接口的类，目前的 java 8 之前的集合框架没有 foreach 方法，通常能想到的解决办法是在JDK里给相关的接口添加新的方法及实现。然而，对于已经发布的版本，是没法在给接口添加新方法的同时不影响已有的实现。所以引进的默认方法。他们的目的是为了解决接口的修改与现有的实现不兼容的问题。

默认方法、静态方法语法格式如下：

```java
public interface Vehicle { 
 
 //默认方法 
   default void print(){ 
      System.out.println("我是一辆车!"); 
   } 
    // 静态方法 
   static void blowHorn(){ 
      System.out.println("按喇叭!!!"); 
   } 
} 
```

我们可以通过以下代码来了解关于默认方法的使用，实例如下：

```java
public class Tester { 
   public static void main(String args[]){ 
      Vehicle vehicle = new Car(); 
      vehicle.print(); 
   } 
} 
  
interface Vehicle { 
   default void print(){ 
      System.out.println("我是一辆车!"); 
   } 
     
   static void blowHorn(){ 
      System.out.println("按喇叭!!!"); 
   } 
} 
  
interface FourWheeler { 
   default void print(){ 
      System.out.println("我是一辆四轮车!"); 
   } 
} 
  
class Car implements Vehicle, FourWheeler { 
   public void print(){ 
      Vehicle.super.print(); 
      FourWheeler.super.print(); 
      Vehicle.blowHorn(); 
      System.out.println("我是一辆汽车!"); 
   } 
} 
```

执行以上脚本，输出结果为：

```
我是一辆车!

我是一辆四轮车!

按喇叭!!!

我是一辆汽车!
```


### 5.Stream API：新添加的Stream API(java.util.stream) 把真正的函数式编程风格引入到Java中。

Java 8 API添加了一个新的java.util.stream工具包，被称为流 Stream，可以让你以一种声明的方式处理数据，这是目前为止最大的一次对 Java 库的完善。

Stream 使用一种类似用 SQL 语句从数据库查询数据的直观方式来提供一种对 Java 集合运算和表达的高阶抽象。

Stream API 可以极大提高 Java 程序员的生产力，让程序员写出高效率、干净、简洁的代码。

这种风格将要处理的元素集合看作一种流， 流在管道中传输， 并且可以在管道的节点上进行处理， 比如筛选， 排序，聚合等。

元素流在管道中经过中间操作(intermediate operation)的处理，最后由最终操作(terminal operation)得到前面处理的结果。

```
+--------------------+       +------+   +------+   +---+   +-------+ 
| stream of elements +-----> |filter+-> |sorted+-> |map+-> |collect| 
+--------------------+       +------+   +------+   +---+   +-------+ 
```

以上的流程转换为 Java 代码，实例如下：

```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5); 
// 获取集合中大于2、并且经过排序、平方去重的有序集合 
List<Integer> squaresList = numbers 
        .stream() 
        .filter(x -> x > 2) 
        .sorted((x,y) -> x.compareTo(y)) 
        .map( i -> i*i).distinct().collect(Collectors.toList()); 
```


在 Java 8 中，集合接口有两个方法来生成流：

- stream()：为集合创建串行流

- parallelStream()：为集合创建并行流


当然，流的来源可以是集合，数组，I/O channel， 产生器 generator 等！

#### 5.1.filter

filter方法用于通过设置的条件过滤出元素。以下代码片段使用filter方法过滤出空字符串。

```java
List<String> strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl"); 
List<String> filtered = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.toList());
```

#### 5.2.limit

limit方法用于获取指定数量的流。以下代码片段使用limit方法打印出 10 条数据：

```java
Random random = new Random(); 
random.ints().limit(10).forEach(System.out::println); 
```



#### 5.3.sorted

sorted方法用于对流进行排序。以下代码片段使用sorted方法对集合中的数字进行排序：

```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5); 
numbers.stream().sorted().forEach(System.out::println); 
```



#### 5.4.map

map方法用于映射每个元素到对应的结果，以下代码片段使用map输出了元素对应的平方数：

```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5); 
// 获取对应的平方数 
List<Integer> squaresList = numbers.stream().map( i -> i*i).distinct().collect(Collectors.toList());
```

#### 5.5.forEach

forEach方法用于迭代流中的每个数据。以下代码片段使用forEach输出集合中的数字：

```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5); 
numbers.stream().forEach(System.out::println); 
```

#### 5.6.Collectors

Collectors类实现了很多归约操作，例如将流转换成集合和聚合元素。Collectors可用于返回列表或字符串：

```java
List<String>strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl"); 
List<String> filtered = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.toList()); 
 
System.out.println("筛选列表: " + filtered); 
String mergedString = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.joining(", ")); 
System.out.println("合并字符串: " + mergedString); 
```



#### 5.7.统计

些产生统计结果的收集器也非常有用。它们主要用于int、double、long等基本类型上，它们可以用来产生类似如下的统计结果：

```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5); 
  
IntSummaryStatistics stats = numbers.stream().mapToInt((x) -> x).summaryStatistics(); 
  
System.out.println("列表中最大的数 : " + stats.getMax()); 
System.out.println("列表中最小的数 : " + stats.getMin()); 
System.out.println("所有数之和 : " + stats.getSum()); 
System.out.println("平均数 : " + stats.getAverage()); 
```

#### 5.8.并行(parallel)程序

parallelStream是流并行处理程序的代替方法。以下实例我们使用 parallelStream来输出空字符串的数量：

```java
List<String> strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl"); 
// 获取空字符串的数量 
long count = strings.parallelStream().filter(string -> string.isEmpty()).count(); 
```

更多实例，参考这里官方 API 文档！

### 6.Optional 类：Optional 类已经成为 Java 8 类库的一部分，用来解决空指针异常。

Java应用中最常见的bug就是空值异常。在 Java 8 之前，Google Guava 引入了 Optionals 类来解决 NullPointerException，从而避免源码被各种 null 检查污染，以便开发者写出更加整洁的代码。Java 8 也将 Optional 加入了官方库。

Optional 提供了一些有用的方法来避免显式的 null 检查，我们可以通过以下实例来更好的了解 Optional 类的使用!

```java
public class OptionalTester { 
 
    public static void main(String[] args) { 
        OptionalTester tester = new OptionalTester(); 
        Integer value1 = null; 
        Integer value2 = new Integer(10); 
 
        // Optional.ofNullable - 允许传递为 null 参数 
        Optional<Integer> a = Optional.ofNullable(value1); 
 
        // Optional.of - 如果传递的参数是 null，抛出异常 NullPointerException 
        Optional<Integer> b = Optional.of(value2); 
        System.out.println(tester.sum(a,b)); 
    } 
 
    public Integer sum(Optional<Integer> a, Optional<Integer> b){ 
 
        // Optional.isPresent - 判断值是否存在 
 
        System.out.println("第一个参数值存在: " + a.isPresent()); 
        System.out.println("第二个参数值存在: " + b.isPresent()); 
 
        // Optional.orElse - 如果值存在，返回它，否则返回默认值 
        Integer value1 = a.orElse(new Integer(0)); 
 
        //Optional.get - 获取值，值需要存在 
        Integer value2 = b.get(); 
        return value1 + value2; 
    } 
}
```

如果想要了解更多用法，参考这篇文章：Optional 官方 API

### 7.Date Time API：加强对日期与时间的处理。

Java 8引入了新的 Date-Time API(JSR 310) 来改进时间、日期的处理!

在旧版的 Java 中，日期时间 API 存在诸多问题，例如：

- 非线程安全：java.util.Date 是非线程安全的，所有的日期类都是可变的，这是Java日期类最大的问题之一。
- 设计很差：Java的日期/时间类的定义并不一致，在java.util和java.sql的包中都有日期类，此外用于格式化和解析的类被定义在java.text包中。java.util.Date同时包含日期和时间，而java.sql.Date仅包含日期，将其纳入java.sql包并不合理。另外这两个类都有相同的名字，这本身就是一个非常糟糕的设计。
- 时区处理麻烦：日期类并不提供国际化，没有时区支持，因此 Java 引入了java.util.Calendar和java.util.TimeZone类，但他们同样存在上述所有的问题。

因为上面这些原因，诞生了第三方库Joda-Time，可以替代 Java 的时间管理 API 。

Java 8 中新的时间和日期管理 API 深受 Joda-Time 影响，并吸收了很多 Joda-Time 的精华，新的 java.time 包包含了所有关于日期、时间、时区、Instant(跟日期类似但是精确到纳秒)、duration(持续时间)和时钟操作的类。

新设计的 API 认真考虑了这些类的不变性，如果某个实例需要修改，则返回一个新的对象。

接下来看看 java.time 包中的关键类和各自的使用例子。

#### 7.1.Clock类

Clock类使用时区来返回当前的纳秒时间和日期。Clock可以替代System.currentTimeMillis()和TimeZone.getDefault()，实例如下：

```java
final Clock clock = Clock.systemUTC(); 
System.out.println( clock.instant() ); 
System.out.println( clock.millis() ); 
```

输出结果是:

```
2021-02-24T12:24:54.678Z 
1614169494678 
```


#### 7.2.LocalDate、LocalTime 和 LocalDateTime类

LocalDate、LocalTime 和 LocalDateTime 类，都是用于处理日期时间的 API，在处理日期时间时可以不用强制性指定时区。

##### 7.2.1.LocalDate

LocalDate 仅仅包含ISO-8601日历系统中的日期部分，实例如下：

```java
//获取当前日期 
final LocalDate date = LocalDate.now(); 
//获取指定时钟的日期 
final LocalDate dateFromClock = LocalDate.now( clock ); 
 
System.out.println( date ); 
System.out.println( dateFromClock ); 
```

输出结果：

```
2021-02-24 
2021-02-24 
```

##### 7.2.2.LocalTime

LocalTime 仅仅包含该日历系统中的时间部分，实例如下：

```java
//获取当前时间 
final LocalTime time = LocalTime.now(); 
//获取指定时钟的时间 
final LocalTime timeFromClock = LocalTime.now( clock ); 
 
System.out.println( time ); 
System.out.println( timeFromClock ); 
```

输出结果：

```
20:36:16.315 
20:36:16.315 
```

##### 7.2.3.LocalDateTime

LocalDateTime 类包含了 LocalDate 和 LocalTime 的信息，但是不包含 ISO-8601 日历系统中的时区信息，实例如下：

```java
//获取当前日期时间 
final LocalDateTime datetime = LocalDateTime.now(); 
//获取指定时钟的日期时间 
final LocalDateTime datetimeFromClock = LocalDateTime.now( clock ); 
 
System.out.println( datetime ); 
System.out.println( datetimeFromClock ); 
```

输出结果：
```
2021-02-24T20:38:13.633 
2021-02-24T20:38:13.633 
```


#### 7.3.ZonedDateTime类

如果你需要特定时区的信息，则可以使用 ZoneDateTime，它保存有 ISO-8601 日期系统的日期和时间，而且有时区信息，实例如下：


```
// 获取当前时间日期 
final ZonedDateTime zonedDatetime = ZonedDateTime.now(); 
//获取指定时钟的日期时间 
final ZonedDateTime zonedDatetimeFromClock = ZonedDateTime.now( clock ); 
//获取纽约时区的当前时间日期 
final ZonedDateTime zonedDatetimeFromZone = ZonedDateTime.now( ZoneId.of("America/New_York") ); 
 
System.out.println( zonedDatetime ); 
System.out.println( zonedDatetimeFromClock ); 
System.out.println( zonedDatetimeFromZone ); 
```

输出结果：

```
2021-02-24T20:42:27.238+08:00[Asia/Shanghai] 
2021-02-24T12:42:27.238Z 
2021-02-24T07:42:27.241-05:00[America/New_York] 
```

#### 7.4.Duration类

Duration类，它持有的时间精确到秒和纳秒。利用它我们可以很容易得计算两个日期之间的不同，实例如下：


```java
final LocalDateTime from = LocalDateTime.of( 2020, Month.APRIL, 16, 0, 0, 0 ); 
final LocalDateTime to = LocalDateTime.of( 2021, Month.APRIL, 16, 23, 59, 59 ); 
//获取时间差 
final Duration duration = Duration.between( from, to ); 
System.out.println( "Duration in days: " + duration.toDays() ); 
System.out.println( "Duration in hours: " + duration.toHours() ); 
```

输出结果：

```
Duration in days: 365 
Duration in hours: 8783 
```


#### 8.Base64

在 Java 7中，我们经常需要使用第三方库就可以进行 Base64 编码。

在 Java 8中，Base64 编码已经成为 Java 类库的标准，实例如下：

```java
public class Tester { 
    public static void main(String[] args) { 
        final String text = "Base64 finally in Java 8!"; 
        final String encoded = Base64.getEncoder().encodeToString( text.getBytes( StandardCharsets.UTF_8 ) ); 
        System.out.println( encoded ); 
        final String decoded = new String(Base64.getDecoder().decode( encoded ), StandardCharsets.UTF_8 ); 
        System.out.println( decoded ); 
    } 
} 
```

输出结果：

```
QmFzZTY0IGZpbmFsbHkgaW4gSmF2YSA4IQ== 
Base64 finally in Java 8! 
```

新的 Base64API 也支持 URL 和 MINE 的编码解码，详情可以查看具体类方法。



### 8.Nashorn, JavaScript 引擎：Java 8提供了一个新的Nashorn javascript引擎，它允许我们在JVM上运行特定的javascript应用

从 JDK 1.8 开始，Nashorn 取代 Rhino(JDK 1.6, JDK1.7) 成为 Java 的嵌入式 JavaScript 引擎。它使用基于 JSR 292 的新语言特性，将 JavaScript 编译成 Java 字节码。

与先前的 Rhino 实现相比，这带来了 2 到 10 倍的性能提升，实例如下：

```java
public class JavaScriptTester { 
 
    public static void main(String[] args) { 
        ScriptEngineManager scriptEngineManager = new ScriptEngineManager(); 
        ScriptEngine nashorn = scriptEngineManager.getEngineByName("nashorn"); 
 
        String name = "Hello World"; 
        try { 
            nashorn.eval("print('" + name + "')"); 
        }catch(ScriptException e){ 
            System.out.println("执行脚本错误: "+ e.getMessage()); 
        } 
    } 
} 
```

输出结果：

```
Hello World
```

在实际的开发中，使用的比较少！



JavaPub参考巨人：https://developer.51cto.com/art/202103/647804.htm



**推荐文章**

今年不论对于国家还是我们个人都是决胜之年，特此安排 2021 JavaPub版 面试题及题解详细参考(全网搜：JavaPub版)，包括：

> 基础，JVM，容器，多线程，反射，异常，网络，对象拷贝，JavaWeb，设计模式，Spring-Spring MVC，Spring Boot / Spring Cloud，Mybatis / Hibernate，Kafka，RocketMQ，Zookeeper，MySQL，Redis，Elasticsearch，Lucene。订阅不迷路，2021奥利给。


PC阅读移步：https://javapub.blog.csdn.net/article/details/114692419