<!--
 * @Author: JavaPub
 * @Date: 2024-03-05 21:12:48
 * @LastEditors: your name
 * @LastEditTime: 2024-03-05 21:46:21
 * @Description: Here is the JavaPub code base. Search JavaPub on the whole web.
 * @FilePath: \JavaPub-Blog\docs\posts\java\SpringBoot中实现订单30分钟自动取消的策略.md

 今天BOSS约了个面试，HR直接发我一道面试题 

 SpringBoot中实现订单30分钟自动取消的策略
-->



## 前言

在电商、外卖、预约服务等场景中，订单超时自动取消是一个常见的业务需求。这一功能不仅提高了系统的自动化程度，还为用户提供了更好的体验。需求如下：

```bash
TODO

    如果用户在生成订单后一定时间未支付，则系统自动取消订单。
```

接下来就用 SpringBoot 实现订单超时未支付自动取消的几种方案，并提供相应的代码示例。


![](https://files.mdnice.com/pic/450d8a04-4d5f-451f-8d42-c6ea287177fa.jpg)

## 技术选型

基于产品需求，我们首先会思考可行性的解决方案。

1. **Spring Task**： Spring Boot内置了任务调度功能，可以很方便地实现定时任务。我们可以利用 `@Scheduled` 注解来定义一个定时任务，定期检查订单状态并执行相应的取消操作。

2. **异步处理**：对于订单超时这种非即时性的操作，我们可以使用异步处理来提高系统的响应速度。Spring Boot 支持多种异步处理方式，如使用 `@Async` 注解、配置线程池等。


### 方案一：使用定时任务



#### 实现步骤

1. **定义订单实体**：在数据库中，我们需要一个订单表来存储订单信息，包括订单状态、创建时间等。


```java
@Entity
public class Order {
    @Id
    private Long id;
    private String userId;
    private OrderStatus status; // 订单状态
    private Date createTime; // 订单创建时间
    // 其他字段和getter、setter方法
}
```

2. **创建定时任务**：使用Spring Task创建一个定时任务，定期检查订单状态。


```java
@Component
public class OrderTimeoutTask {

    @Autowired
    private OrderService orderService;

    @Scheduled(fixedRate = 5000) // 每5秒执行一次
    public void checkOrderTimeout() {
        List<Order> timeoutOrders = orderService.findTimeoutOrders();
        timeoutOrders.forEach(order -> orderService.cancelOrder(order.getId()));
    }
}
```

3. **实现订单服务**：在订单服务中，我们实现查找超时订单和取消订单的逻辑。


```java
@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> findTimeoutOrders() {
        // 根据业务规则查找超时订单，例如：当前时间减去订单创建时间大于超时阈值
        return orderRepository.findByStatusAndCreateTimeBefore(OrderStatus.PENDING_PAYMENT, new Date(System.currentTimeMillis() - TIMEOUT_THRESHOLD));
    }

    public void cancelOrder(Long orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order != null && order.getStatus().equals(OrderStatus.PENDING_PAYMENT)) {
            order.setStatus(OrderStatus.CANCELED);
            orderRepository.save(order);
        }
    }
}
```



**四、注意事项**

1. **定时任务的频率**：定时任务的频率应根据业务需求和系统性能进行权衡。如果频率过高，可能会增加系统负担；如果频率过低，可能导致订单超时后不能及时取消。

2. **异常处理**：在定时任务或异步处理中，应做好异常处理，避免因为某个订单取消失败而影响其他订单的处理。

3. **数据库事务**：在更新订单状态时，应注意数据库事务的处理，确保数据的一致性。


通过以上步骤，我们可以在 Spring Boot 中实现订单超时自动取消的策略。在实际应用中，还需要根据具体业务需求进行调整和优化。

