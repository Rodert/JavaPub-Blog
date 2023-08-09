elk环境搭建

elk搭建
## 前言
> 环境都是在 `Linux` 环境下搭建

[toc]

> 值得一提的是，除了非必要情况，都是用 elasticsearch 用户操作

## 安装 Java 环境
> `elasticsearch` 自带 `JDK` 环境，下面是为可视化工具准备

下载解压 JDK 
配置环境变量 `vim /etc/profile` ，配置内容如下

```
export JAVA_HOME=/usr/java/jdk8 #根据自己安装目录进行修改
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export JRE_HOME=$JAVA_HOME/jre
```

运行生效
> source /etc/profile 

> java -vsersion

## 安装 elasticsearch
### 创建用户组
> elasticsearch 不允许使用 root 用户启动

新建一个 `elasticsearch` 目录用于安装 elasticsearch
> mkdir elasticsearch

- 创建ES用户和组

1. groupadd elasticsearch
2. useradd elasticsearch -g elasticsearch
3. chown -R elasticsearch:elasticsearch elasticsearch/


### 下载安装
- 官网下载地址：

> https://www.elastic.co/cn/downloads/past-releases#

> wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.7.0-linux-x86_64.tar.gz

确实太慢了，我的服务器每秒几KB

- 华为镜像下载：快

> wget https://mirrors.huaweicloud.com/elasticsearch/7.7.0/elasticsearch-7.7.0-linux-x86_64.tar.gz

- 解压

> tar -zxvf elasticsearch-7.7.0-linux-x86_64.tar.gz



### 修改配置文件 elasticsearch.yml

这是 `elasticsearch` 核心文件 (为了方便查看，我把注释都删除了)

> network.publish_host 地址要保证你在测试的位置可以访问到

```yml
cluster.name: myes
node.master: true
node.name: node-1
network.host: 0.0.0.0
network.publish_host: 39.96.53.204
http.port: 9200
transport.tcp.port: 9300
http.cors.enabled: true
http.cors.allow-origin: "*"
discovery.seed_hosts: ["39.96.53.204"]
cluster.initial_master_nodes: ["node-1"]
# 认证，后边会讲
#xpack.security.enabled: true
#xpack.security.transport.ssl.enabled: true
#xpack.security.transport.ssl.verification_mode: certificate
#xpack.security.transport.ssl.keystore.path: elastic-certificates.p12
#xpack.security.transport.ssl.truststore.path: elastic-certificates.p12
```

说明：
`xpack` 是关于安全认证的配置；


**启动试试**

> ./bin/elasticsearch

使用 elasticsearch 用户启动， `su elasticsearch`

错误一:

此时会提示 `vm.max_map_count [65530] is too low`  这个值设置的太小，需要修改 `vm.max_map_count` 这个变量的值，切换到 root 用户修改配置 `sysctl.conf`  增加配置值： `vm.max_map_count=655360`  执行命令 `sysctl -p`   这样就可以了，然后切到 elasticsearch 用户，重新启动 ES 服务 就可以了。

错误二: 

代表进程不够用了

解决方案： 切到 root 用户：进入到 security 目录下的 `limits.conf` ；执行命令 `vim /etc/security/limits.conf` 在文件的末尾添加下面的参数值：

```
* soft nofile 65536
* hard nofile 131072
* soft nproc 2048
* hard nproc 4096
```

前面的*符号必须带上，然后重新启动服务器即可。执行完成后可以使用命令  `ulimit -n` 查看进程数。(不重启也可以2020 0721 1616)

再启动一次 -->

现在可以看看 elasticsearch 版本信息，[http://106.12.31.72:9200/](http://106.12.31.72:9200/) 如下：

```bash
[elasticsearch@slave2 ~]$ curl http://106.12.31.72:9200
{
  "name" : "node-1",
  "cluster_name" : "myes",
  "cluster_uuid" : "Uetwg8j3SfKh_Fz3gJjhwA",
  "version" : {
    "number" : "7.7.0",
    "build_flavor" : "default",
    "build_type" : "tar",
    "build_hash" : "81a1e9eda8e6183f5237786246f6dced26a10eaf",
    "build_date" : "2020-05-12T02:01:37.602180Z",
    "build_snapshot" : false,
    "lucene_version" : "8.5.1",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

### 安装分词器 ik

如果你不想解决冲突，那就下载和 elasticsearch 对应版本的插件，这里是 elasticsearch7.7.0 。

1. 下载插件

> wget https://github.com/medcl/elasticsearch-analysis-ik/releases/tag/v7.7.0/elasticsearch-analysis-ik-7.7.0.zip

下载失败!!!建议下载到本地，再上传到服务器



2. 准备 ik 目录

elasticsearch-7.7.0/plugins/ && mkdir ik
在 `es-home/plugins` 目录下新建 `ik` 目录

> mkdir ik

3. 解压到 ik分词器到 `ik` 目录

如果对 `unzip` 命令不熟悉，查阅一下，将解压后文件移动到 `ik` 目录

4. 重启 elasticsearch

> ./bin/elasticsearch

这时候从启动日志应该能看到 `ik` 模块已加入

成功了！！
> curl http://106.12.31.72:9200/_cat/plugins


### 安装分词器 pinyin

> https://github.com/medcl/elasticsearch-analysis-pinyin/releases

安装流程和 ik 分词器类似，自行安装，目录名字起 `pinyin` 就可以

### 同义词

> https://github.com/ginobefun/elasticsearch-dynamic-synonym/releases

## 安装登陆认证 xpack **这个步骤待确认**2020 0721 1746


> 为了安全


> bin/elasticsearch-certutil ca

> bin/elasticsearch-certutil cert --ca elastic-stack-ca.p12

有一些提示输入密码的操作等，这里都默认 Enter ，空着不填了

将生成后的 `.p12` 移动到 config 目录下

## 安装 cerebro（可以跳过）

> 一个可视化界面，和 `elasticsearch-head` 作用一样，直接使用 `Kibana` 也可以，毕竟是 ELK



## 安装 Kibana

> 配置太低不行的，跑起来一堆报错，怎么也得 4G 内存吧

可以直接从官网下载：[https://www.elastic.co](https://www.elastic.co)，较慢。

- 下载

国内镜像

> wget https://mirrors.huaweicloud.com/kibana/7.7.0/kibana-7.7.0-linux-x86_64.tar.gz

- 解压

> tar -zxvf 

- 修改配置

修改 `kibana.yml` 配置文件

`vim kibana.yml` 编辑配置文件，在最后面加上如下配置就行：

> server.port: 5601
> server.host: "0.0.0.0"
> elasticsearch.url: ["http://ip:9200"]

//这里ip:port要和es配置文件中填写的一致

> kibana.index: ".kibana"

启动完毕，可以浏览器输入url:服务器外网 `ip:5601` 查看是否成功启动；

启动服务: cd 命令进入 bin 目录，执行 `sh kibana &` 命令 后台启动kibana



## 安装 logstash

- 下载安装

> wget https://mirrors.huaweicloud.com/logstash/7.7.0/logstash-7.7.0.tar.gz


> cd logstash-7.7.0/bin/进入bin目录

新建文件 `vim logstash1.conf` ，写入内容(监听tomcat的日志)：

```
input {
    file {
        path => "tomcat应用目录/logs/*.log"  //此处代表监控的日志文件

        start_position => beginning
    }
}

filter {
 

}

output {

    elasticsearch {

    hosts => "ip:9200"

    }

}
```

 

启动logstash：sh logstash -f logstash1.conf