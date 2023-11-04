服务器自建VPN【x-ui篇】

## 功能介绍
x-ui 是支持多协议多用户的 xray 面板。搭建简单，使用方便。

系统状态监控
支持多用户多协议，网页可视化操作
支持的协议：vmess、vless、trojan、shadowsocks、dokodemo-door、socks、http
支持配置更多传输配置
流量统计，限制流量，限制到期时间
可自定义 xray 配置模板
支持 https 访问面板（自备域名 + ssl 证书）
支持一键SSL证书申请且自动续签
更多高级配置项，详见面板

## 前期准备
首先你需要这些：

没有被墙的具有公网的VPS一台（NAT也可以但需要设置端口映射）
可以SSH或VNC连接上你的VPS
可以使用的VPS的系统有：

Debian 8+ （对于低配置机器推荐）
Ubuntu 16+
RedHat （新手不推荐）
CentOS 7+（寿命即将结束不推荐）
其他
为了使用你的VPN，你还需要客户端，下面是一些常用的客户端：

**Windows电脑**
[Clash for Windows](https://glados.rocks/tools/Clash.for.Windows.Setup.exe)

V2rayN for Windows

netch

**MacOS电脑**
[ClashX](https://glados.rocks/tools/ClashX.dmg)

**安卓手机**
[Clash for Android(系统要求: Android 7.0+)](https://glados.rocks/tools/cfa-2.5.9-premium-universal-release.apk)


**苹果手机或iPad**
Stash
Choc
Shadowrocket
QuantumultX
Surge
Loon

**Linux**
[Clash](https://glados.rocks/tools/clash-linux.zip)

安装
脚本安装【推荐】
首先确保你的VPS安装了 curl ：

```bash
# 对于Debian和Ubuntu
apt update && apt upgrade && apt install curl -y
# 对于CentOS
yum update && yum upgrade && yum install curl -y
```

随后使用一键脚本进行安装：

```bash
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)
```

安装过程需要设置用户名、密码、端口。记住这三样即可。

之后用浏览器打开http://你的公网ip:你设置的端口

再输入你的用户名和密码即可。

## docker安装

对于无法使用脚本的，可以采用docker，但笔者建议最好使用脚本进行安装。

1. 安装docker

```bash
curl -fsSL https://get.docker.com | sh
```

2. 安装x-ui

```bash
mkdir x-ui && cd x-ui
docker run -itd --network=host \
-v $PWD/db/:/etc/x-ui/ \
-v $PWD/cert/:/root/cert/ \
--name x-ui --restart=unless-stopped \
techfever/x-ui:edge
```

3. 使用

之后用浏览器打开http://你的公网ip:54321

再输入你的用户名和密码即可。

## 开启防火墙

如果遇到面板打不开的情况
对于debian和ubuntu，可以安装ufw来管理防火墙:

```bash
apt install ufw
ufw allow ssh
ufw allow 54321 # 换成你的面板端口
ufw enable
```

如果还是不行，就 reboot 重启一下机器。

而CentOS和RedHat可以用firewall-cmd来管理防火墙。

对安全没那么重视的可以直接关闭防火墙：

```bash
iptables -F
```

## 面板使用

为了安全，最好不要使用默认端口号54321和默认用户名admin密码admin。最好在面板设置里修改：

之后在入站列表中添加v2ray：

记得在防火墙中开启相应的端口

## 节点使用

点击节点前的操作，选择二维码：

许多手机客户端比如shadowsocket和quantumultX都支持扫描二维码添加节点。

对于clash这种不支持的，或者想要整套配置文件的，可以选择 复制 ，然后在我站的节点订阅网站进行订阅转换。

之后将订阅链接导入相应的客户端即可。

## 开启bbr

系统支持：CentOS 6+，Debian 8+，Ubuntu 16+
虚拟技术：OpenVZ 以外的，比如 KVM、Xen、VMware
内存要求：≥128M
如果是脚本安装x-ui
可以直接使用命令 x-ui 在菜单中选择开启bbr（也就是15），再回车，即可。


```bash
x-ui 面板管理脚本
1. 退出脚本
————————————————
1. 安装 x-ui
2. 更新 x-ui
3. 卸载 x-ui
————————————————
4. 重置用户名密码
5. 重置面板设置
6. 设置面板端口
7. 查看当前面板设置
————————————————
8. 启动 x-ui
9. 停止 x-ui
10. 重启 x-ui
11. 查看 x-ui 状态
12. 查看 x-ui 日志
————————————————
13. 设置 x-ui 开机自启
14. 取消 x-ui 开机自启
————————————————
15. 一键安装 bbr (最新内核)
16. 一键申请SSL证书(acme申请)

面板状态: 已运行
是否开机自启: 是
xray 状态: 运行

请输入选择 [0-16]:15

---------- System Information ----------
OS      :
Arch    :
Kernel  :
----------------------------------------
Automatically enable TCP BBR script

URL: https://teddysun.com/489.html
----------------------------------------

Press any key to start...or Press Ctrl+C to cancel
（此时按任意键即可开启bbr，按Ctrl+C取消）
```

如果是docker安装x-ui
另外使用开启bbr的脚本，使用root用户登录，运行以下命令：


```bash
wget --no-check-certificate -O /opt/bbr.sh https://github.com/teddysun/across/raw/master/bbr.sh
chmod 755 /opt/bbr.sh
/opt/bbr.sh
```

安装完成后，脚本会提示需要重启 VPS，输入 y 并回车后重启。
重启完成后，进入 VPS，验证一下是否成功安装最新内核并开启 TCP BBR

检查bbr
输入命令：

```bash
lsmod | grep bbr
```

返回值有 tcp_bbr 模块即说明 bbr 已启动。比如：


```bash
tcp_bbr                20480  3
```

并不是所有的 VPS 都会有此返回值，若没有也属正常。

或者：

```bash
sysctl net.ipv4.tcp_congestion_control
```

返回一般为

```bash
net.ipv4.tcp_congestion_control = bbr
```

如果你使用的是 Google Cloud Platform （GCP）更换内核，有时会遇到重启后，整个磁盘变为只读的情况。只需执行以下命令即可恢复：

```bash
mount -o remount rw /
```



