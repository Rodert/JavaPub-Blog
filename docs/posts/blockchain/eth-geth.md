
# 


## 安装geth

```bash
brew tap ethereum/ethereum

brew install ethereum
```

---

```bash
连接，（非必需操作）
geth attach http://192.168.1.10:8545
```


**查询所有账号**

```
geth account list
```

创建一个账号

```bash
geth account new //创建账号，会提示输入密码
geth account new --password /path/to/passwdfile 使用文件中的密码创建账号
geth account import <keyfile> 通过导入私钥的方式创建账户
geth account import --password <passwordfile> <keyfile>
```

更改账号密码

```bash
geth account update 32a6d3706ac2f88c86058cf204f325fe0660038d
```


解锁账号

```bash
geth --unlock "ced414f0f0c61894e597e0969a7d89944b805a15, 1" //解锁账号，可以是地址，也可以是下标
```



