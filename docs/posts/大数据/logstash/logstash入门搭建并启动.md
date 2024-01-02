

logstash

### 搭建&启动

官网下载安装

```
./logstash -f /Users/x/logstash.conf
```

![image-20231228145602760](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202312281456212.png)

### 配置

logstash.conf

```
input {
  # 设置输入源，比如文件路径或者其他来源
  file {
	# 文件可以使用正则匹配 *
    path => ["/Users/shiyuwang/home/data/elk/logstashws/nginxlog3.log", "/Users/shiyuwang/home/data/elk/logstashws/nginxlog4.log"]
    # sincedb_path => "/path/sincedb_path" # 输入文件夹
	start_position => "beginning" # 缺省值也是 beginning，从开头读取
    sincedb_path => "/dev/null"
  }
}

filter {

	json {
		source => "message"
	}

	# grok {
	# 	match => {
	# 		#"message" => "%{QUOTEDSTRING:json_string}"
	# 		"timestamp" => "%{TIMESTAMP_ISO8601:timestamp}"
	# 		"remote_addr" => "%{IP:remote_addr}"
	# 		"user_agent" => "%{DATA:user_agent}"
	# 	}
	# }

	json {
		source => "request_body"
	}

	# if ["request_body"] {
	# 	json {
	# 		source => "request_body"
	# 	}

	# 	# gsub {
	# 	# 	field => "request_body"
	# 	# 	pattern => "\\\""
	# 	# 	replacement => "\""
	# 	# }

	# 	mutate {
	# 		gsub => ["request_body", "\\\"", "\""]
	# 	}
		
	# 	json {
	# 		source => "request_body"
	# 	}

	# 	if ["properties"] {
	# 		json {
	# 			source => "properties"
	# 		}
	# 	}
	# }

	# grok {
	# 	match => {
	# 		"time" => "%{NUMBER:time}"
	# 		"type" => "%{WORD:type}"
	# 		"project" => "%{WORD:project}"
	# 	}
	# }



	#rename {
	#	field => ["request_body", "time"]
	#	destination => "time"
	#}
	#rename {
	#	field => ["request_body", "type"]
	#	destination => "type"
	#}


	# mutate {
	# 	add_field => {
	# 		"request_time" => "%{request_body}[time]"
	# 	}
	# }
	# mutate {
	# 	add_field => {
	# 		"request_type" => {"%{request_body}" => "%{type}"}
	# 	}
	# }



	#mutate {
	#	gsub => [
	#		"json_string", "\", ""
	#	]
	#}

	#mutate {
	#	convert => {
	#		"json_string" => "string"
	#	}
	#}

	#json {
		#source => "json_string"
		#source => "json_string"
	#}

	#"path", "host", 
	mutate {
		remove_field => ["request_body", "message"]
	}
}

output {
  elasticsearch {
		hosts => ["localhost:19200"]
		index => "logstash-%{+YYYY.MM.dd}"
	} 
}

```

### 查询ES

![image-20231228145806649](https://javapub-common-oss.oss-cn-beijing.aliyuncs.com/javapub/202312281458214.png)

### 测试数据

```
{ "timestamp": "1703487485.708", "remote_addr": "118.140.206.1", "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", "request_body": "{\"time\":1703487484943,\"type\":\"track\",\"project\":\"xxx-pc\",\"properties\":{\"path\":\"/pro/projectOrTokenDetail\",\"uid\":\"0\",\"category\":\"default\",\"device_id\":\"f81d26f8401d49cc25e758031677c0be\",\"page_name\":\"default\",\"platform\":\"web\",\"browser\":\"Chrome\",\"url\":\"http://localhost:3001/xxx/pro/projectOrTokenDetail?chain=1&address=0xdac17f958d2ee523a2206206994597c13d831ec7\"}}" }
{ "timestamp": "1703487485.708", "remote_addr": "118.140.206.1", "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", "request_body": "{\"time\":1703487484943,\"type\":\"track\",\"project\":\"xxx-pc\",\"properties\":{\"path\":\"/pro/projectOrTokenDetail\",\"uid\":\"0\",\"category\":\"default\",\"device_id\":\"f81d26f8401d49cc25e758031677c0be\",\"page_name\":\"default\",\"platform\":\"web\",\"browser\":\"Chrome\",\"url\":\"http://localhost:3001/xxx/pro/projectOrTokenDetail?chain=1&address=0xdac17f958d2ee523a2206206994597c13d831ec7\"}}" }
```



