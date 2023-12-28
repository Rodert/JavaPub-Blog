演示环境是在 `Mac Pro M1 pro` 演示

> 注意⚠️：M1 测试需要支持 M1 的镜像，如不清楚可使用教程这个版本。

安装 elasticsearch 

```bash
docker pull elasticsearch:7.16.2

docker run -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" --name elasticsearch docker.elastic.co/elasticsearch/elasticsearch:7.16.2

docker run \
      --name elasticsearch \
      --net elastic \
      -p 9200:9200 \
      -e discovery.type=single-node \
      -e ES_JAVA_OPTS="-Xms1g -Xmx1g"\
      -e xpack.security.enabled=false \
      -it \
      e082d8ac7e5e
```

安装 Logstash 容器：
```bash

docker run -d -p 9600:9600 --name logstash docker.elastic.co/logstash/logstash:7.16.2
```
















# 参考


分批同步大型数据集可以通过调整 Logstash 的配置来实现。这里提供一个基于 Logstash 的 JDBC 输入插件的示例，展示如何配置 Logstash 来分批同步数据。

### 使用 `jdbc_paging_enabled` 和 `jdbc_page_size` 参数

```conf
input {
  jdbc {
    jdbc_driver_library => "path_to_your_postgresql_jdbc_driver"
    jdbc_driver_class => "org.postgresql.Driver"
    jdbc_connection_string => "jdbc:postgresql://your_postgresql_host:your_postgresql_port/your_database"
    jdbc_user => "your_username"
    jdbc_password => "your_password"
    jdbc_paging_enabled => true
    jdbc_page_size => 10000  # 设置每个批次的行数
    statement => "SELECT * FROM your_table WHERE id > :sql_last_value ORDER BY id"
    use_column_value => true
    tracking_column => "id"  # 替换成适合你表的唯一标识列
  }
}

output {
  elasticsearch {
    hosts => ["your_elasticsearch_host:your_elasticsearch_port"]
    index => "your_index_name"
    user => "elasticuser"
    password => "elasticpassword"
    document_id => "%{id}" # 替换为你的唯一标识字段
  }
}
```

#### 配置说明：

- `jdbc_paging_enabled`：启用分页查询。
- `jdbc_page_size`：每个批次返回的行数。
- `statement`：查询语句，根据唯一标识列来分批查询。`id > :sql_last_value` 表示每次获取大于上次同步的最新 ID 的数据。
- `use_column_value` 和 `tracking_column`：使用唯一标识列来跟踪同步位置，确保在重新启动 Logstash 后能够从上次中断的位置继续同步。

这样配置后，Logstash 将按照设定的 `jdbc_page_size` 逐批次地获取数据，并将其传输到 Elasticsearch 中。

请确保配置中的参数适合你的环境和数据表结构，并根据需要调整 `jdbc_page_size` 以及跟踪同步位置的唯一标识列。测试配置并监控同步过程，以确保数据能够按照预期分批同步到 Elasticsearch。