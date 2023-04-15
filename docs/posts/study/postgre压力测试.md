
# postgre压力测试

[toc]

## 基于SysBench

### 介绍

SysBench 是一个开源的跨平台系统性能基准测试工具,可以这样安装和使用:

SysBench 支持 CPU、内存、磁盘 IO、网络 IO 等系统测试,以及 MySQL、PostgreSQL 等数据库测试。


### 安装

可以从 GitHub 下载 SysBench 源码并编译安装:

```bash
git clone https://github.com/akopytov/sysbench.git
cd sysbench
./autogen.sh
./configure
make 
sudo make install
```

**遇到异常，看下文，我记录了详细解决步骤**

到这里没有提示错误信息，就可以成功了。

### 成功

#### 先测试一下安装效果，例如,测试 CPU:

```bash
sysbench cpu  --cpu-max-prime=20000  run
```

测试结果：

```bash
[root@localhost sysbench-1.0.20]# sysbench cpu  --cpu-max-prime=20000  run
sysbench 1.0.20 (using bundled LuaJIT 2.1.0-beta2)

Running the test with following options:
Number of threads: 1
Initializing random number generator from current time


Prime numbers limit: 20000

Initializing worker threads...

Threads started!

CPU speed:
    events per second:  2131.51

General statistics:
    total time:                          10.0003s
    total number of events:              21317

Latency (ms):
         min:                                    0.46
         avg:                                    0.47
         max:                                    0.95
         95th percentile:                        0.48
         sum:                                 9996.03

Threads fairness:
    events (avg/stddev):           21317.0000/0.00
    execution time (avg/stddev):   9.9960/0.00
```

解读：

```bash
sysbench 1.0.20 (使用内置 LuaJIT 2.1.0-beta2) 

sysbench 1.0.20 (using bundled LuaJIT 2.1.0-beta2)

运行测试选项:          

Running the test with following options:  

线程数:1                

Number of threads: 1  

从当前时间初始化随机数生成器     

Initializing random number generator from current time


素数限制:20000        

Prime numbers limit: 20000  

正在初始化工作线程...           

Initializing worker threads...  

线程启动!             

Threads started!  

CPU 速度:                  CPU speed:
     每秒事件数:2131.51          
events per second:  2131.51  

常规统计:              General statistics: 
    总时间:10.0003秒           total time:                          10.0003s
     总事件数:21317                total number of events:              21317

延迟(毫秒):             Latency (ms):
         最小值:0.46                 min:                                    0.46
         平均值:0.47                  avg:                                    0.47
         最大值:0.95                 max:                                    0.95
       95百分点:0.48                   95th percentile:                        0.48
         总和:9996.03                 sum:                                 9996.03

线程公平性:           Threads fairness:
     事件(平均值/标准偏差):21317.0000/0.00  
     events (avg/stddev):           21317.0000/0.00  
执行时间(平均值/标准偏差):9.9960/0.00
   execution time (avg/stddev):   9.9960/0.00
```


##### 测试 PostgreSQL:

```bash 
sysbench oltp_read_write  --postgresql-host=localhost --postgresql-port=5432 --postgresql-user=bench  --oltp-table-size=10000 --threads=32 --time=60 run
```



#### 异常记录

**异常1:**

我在安装sysbench时，遇到了如下错误 `ERROR: cannot find MySQL libraries. If you want to compile with MySQL support,       please install the package containing MySQL client libraries and headers.  On Debian-based systems the package name is libmysqlclient-dev.On RedHat-based systems, it is mysql-devel.       If you have those libraries installed in non-standard locations,       you must either specify file locations explicitly using       --with-mysql-includes and --with-mysql-libs options, or make sure path to       mysql_config is listed in your PATH environment variable. If you want to       disable MySQL support, use --without-mysql option`

这个错误表示在编译 SysBench 时无法找到 MySQL 开发库,所以无法支持 MySQL 基准测试。
要解决这个错误,我们有两种方法:

1. 安装 MySQL 开发库
在 Debian/Ubuntu 系统上,执行:

```bash 
sudo apt install libmysqlclient-dev
```

在 RedHat/CentOS 系统上,执行:

```bash
sudo yum install mysql-devel
```

这会安装 MySQL 客户端库和头文件,然后重新编译 SysBench:

```bash
./configure 
make
sudo make install
```

现在 SysBench 应该可以支持 MySQL 基准测试了。


这会安装 sysbench 命令以及一些测试脚本。
也可以使用包管理工具进行安装,如:

```bash
sudo apt install sysbench     # Ubuntu
sudo yum install sysbench    # CentOS
```




