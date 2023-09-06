我们在开发环境构建的镜像在生产环境大多不可用，我们在开发中一般使用 Windows 或者 MAC 系统，部署多半是 linux 环境。那么这篇文章能帮到你。



## 首先

首先你需要有一个 Dockerfile 文件。

举例：这里以一个 python 项目举例

```bash
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "bin/run.py" ]

```


![在这里插入图片描述](https://img-blog.csdnimg.cn/2aaeeb99b14f456c8799058523701502.png)

## 构建环境


前置环境设置，创建了一个 mybuilder 环境，

```bash
docker buildx create --name mybuilder --bootstrap --use
```


查看支持的环境

```bash
docker buildx ls
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/6c4b79fc347f41d89ad9ce3661190a8a.png)



上传镜像的你的 repo，这里举例上传到 阿里云的 repo：


编译打包上传

```bash
docker buildx build --platform linux/amd64 --tag registry.cn-beijing.aliyuncs.com/xxx/xxx:heloworldjavapub --push  .  
```

## 进阶

以上是一个简单的案例，接下来适合高阶玩家

Buildx是对 Docker 工具的一个很好的补充。我认为它是“完整的 BuildKit”。出于我们的目的，它可以指定同时构建多个平台并将它们全部打包为多平台标签。它甚至会将它们推送到您的注册表，所有这些都只需一个命令。

我们首先需要设置 buildx。

```
% docker buildx create
whimsical_sanderson
```

我们现在可以为我们的应用程序构建多平台映像。

```
% docker buildx build --pull -t aspnetapp -f Dockerfile.alpine-non-root --platform linux/arm64,linux/arm,linux/amd64 .
```

在这里，我们正在构建三种架构。在某些环境中，您还可以仅指定体系结构作为简写，避免重复“linux”。

使用该命令，您将看到以下警告。

```
WARNING: No output specified with docker-container driver. Build result will only remain in the build cache. To push result image into registry use --push or to load image into docker use --load
```

如果要将映像推送到注册表，则需要添加参数并为参数使用完全指定的注册表名称。或者，您可以使用将图像导出到 Docker 缓存。然而，仅当一次针对一种架构时才有效。--push-t--load--load

让我们尝试一下（使用我的注册表；您需要切换到您自己的注册表）。--push

```
% docker buildx build --pull --push -t dotnetnonroot.azurecr.io/aspnetapp -f Dockerfile.alpine-non-root --platform linux/arm64,linux/arm,linux/amd64 .
```

该命令将 3 个图像和 1 个标签推送到注册表。

我现在可以尝试在我的 Apple 笔记本电脑上提取图像。它在我的 Raspberry Pi 上也能发挥同样的作用。

```
% docker run --rm -d -p 8080:8080 dotnetnonroot.azurecr.io/aspnetapp
08968dcce418db4d6f746bfa3a5f2afdcf66570bc8a726c4f5a4859e8666e354
% curl http://localhost:8080/Environment
{"runtimeVersion":".NET 8.0.0-preview.2.23128.3","osVersion":"Linux 5.15.49-linuxkit #1 SMP PREEMPT Tue Sep 13 07:51:32 UTC 2022","osArchitecture":"Arm64","user":"app","processorCount":4,"totalAvailableMemoryBytes":4124512256,"memoryLimit":0,"memoryUsage":29548544}%
% docker exec 08968dcce418db4d6f746bfa3a5f2afdcf66570bc8a726c4f5a4859e8666e354 uname -a
Linux 5d4a712c32b9 5.15.49-linuxkit #1 SMP PREEMPT Tue Sep 13 07:51:32 UTC 2022 aarch64 Linux
% docker kill 08968dcce418db4d6f746bfa3a5f2afdcf66570bc8a726c4f5a4859e8666e354
```

我现在将在 x64 机器上尝试相同的图像。

```
$ docker run --rm -d -p 8080:8080 dotnetnonroot.azurecr.io/aspnetapp
6dac425acc325da1c085608d503d6c884610cfa5b2a7dd93575f20355daec1a2
$ curl http://localhost:8080/Environment
{"runtimeVersion":".NET 8.0.0-preview.2.23128.3","osVersion":"Linux 4.4.180+ #42962 SMP Tue Sep 20 22:35:50 CST 2022","osArchitecture":"X64","user":"app","processorCount":8,"totalAvailableMemoryBytes":8096030720,"memoryLimit":9223372036854771712,"memoryUsage":94019584}
$ docker exec 6dac425acc325da1c085608d503d6c884610cfa5b2a7dd93575f20355daec1a2 uname -a
Linux 6dac425acc32 4.4.180+ #42962 SMP Tue Sep 20 22:35:50 CST 2022 x86_64 Linux
$ docker kill 6dac425acc325da1c085608d503d6c884610cfa5b2a7dd93575f20355daec1a2
```

结果看起来不错，过程也很简单。

