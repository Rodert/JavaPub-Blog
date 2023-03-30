
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

#### account方式

查询所有账号

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

创建账号后，反解出私钥

```go
package main

import (
	"encoding/hex"
	"fmt"
	"github.com/ethereum/go-ethereum/accounts/keystore"
	"github.com/ethereum/go-ethereum/crypto"
	"io/ioutil"
	"log"
)

func main() {
	privKey, address, err := KeystoreToPrivateKey("UTC--2017-11-21T05-46-23.555205600Z--6e60f5243e1a3f0be3f407b5afe9e5395ee82aa2", "123456789")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("privKey:%s\naddress:%s\n", privKey, address)
}

func KeystoreToPrivateKey(privateKeyFile, password string) (string, string, error) {
	keyjson, err := ioutil.ReadFile(privateKeyFile)
	if err != nil {
		fmt.Println("read keyjson file failed：", err)
	}
	unlockedKey, err := keystore.DecryptKey(keyjson, password)
	if err != nil {

		return "", "", err

	}
	privKey := hex.EncodeToString(unlockedKey.PrivateKey.D.Bytes())
	addr := crypto.PubkeyToAddress(unlockedKey.PrivateKey.PublicKey)
	return privKey, addr.String(), nil
}
```

#### personal方式


```
> personal.newAccount("passphrase")
```


该帐户以加密格式保存。您必须记住这个密码以将来解锁您的帐户。