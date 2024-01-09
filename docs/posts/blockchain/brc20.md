一条 brc20 交易，以 brc20 tick=free 为例。


curl --user username --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getrawtransaction", "params": ["331d02db3d6ee0cffae9052be5799bd7754c6ebb2020e422058b73334c59bf85", true]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/


结果：
```json
{
    "result":{
        "txid":"331d02db3d6ee0cffae9052be5799bd7754c6ebb2020e422058b73334c59bf85",
        "hash":"e9358939c236bce1bfc63168611b128a00eacc891ee991faca8ab3be7e100fe9",
        "version":2,
        "size":359,
        "vsize":184,
        "weight":734,
        "locktime":0,
        "vin":[
            {
                "txid":"0d8b9d4b054f61bef5a466f50fc34ecfb3684763587ce5d1baa6741d9a5400c4",
                "vout":0,
                "scriptSig":{
                    "asm":"",
                    "hex":""
                },
                "txinwitness":[
                    "5d88c3c66893b950a42d3672f3009a9f15e674f248a1d1c435609440b91e426598d9505752c560b24ba6261f1b3c7e997941006c9ead7b0378ca7c92c6551941",
                    "20117f692257b2331233b5705ce9c682be8719ff1b2b64cbca290bd6faeb54423eac061b237bd58701750063036f7264010118746578742f706c61696e3b636861727365743d7574662d3800357b2270223a226272632d3230222c226f70223a226d696e74222c227469636b223a2266726565222c22616d74223a2231303030227d68",
                    "c0117f692257b2331233b5705ce9c682be8719ff1b2b64cbca290bd6faeb54423e"
                ],
                "sequence":4294967293
            }
        ],
        "vout":[
            {
                "value":0.00000546,
                "n":0,
                "scriptPubKey":{
                    "asm":"1 8873ed390476c5c7b6c825bae7eca675a46bc200cc7a82354b0debec19f83abc",
                    "hex":"51208873ed390476c5c7b6c825bae7eca675a46bc200cc7a82354b0debec19f83abc",
                    "address":"bc1p3pe76wgywmzu0dkgykaw0m9xwkjxhssqe3agyd2tph47cx0c827qd4yq9x",
                    "type":"witness_v1_taproot"
                }
            },
            {
                "value":0.00002094,
                "n":1,
                "scriptPubKey":{
                    "asm":"0 ea410b1701aeaa64dbf721cd55fce1231f2144a3",
                    "hex":"0014ea410b1701aeaa64dbf721cd55fce1231f2144a3",
                    "address":"bc1qafqsk9cp464xfklhy8x4tl8pyv0jz39rhhh0s7",
                    "type":"witness_v0_keyhash"
                }
            }
        ],
        "hex":"02000000000101c400549a1d74a6bad1e57c58634768b3cf4ec30ff566a4f5be614f054b9d8b0d0000000000fdffffff0222020000000000002251208873ed390476c5c7b6c825bae7eca675a46bc200cc7a82354b0debec19f83abc2e08000000000000160014ea410b1701aeaa64dbf721cd55fce1231f2144a303405d88c3c66893b950a42d3672f3009a9f15e674f248a1d1c435609440b91e426598d9505752c560b24ba6261f1b3c7e997941006c9ead7b0378ca7c92c65519418320117f692257b2331233b5705ce9c682be8719ff1b2b64cbca290bd6faeb54423eac061b237bd58701750063036f7264010118746578742f706c61696e3b636861727365743d7574662d3800357b2270223a226272632d3230222c226f70223a226d696e74222c227469636b223a2266726565222c22616d74223a2231303030227d6821c0117f692257b2331233b5705ce9c682be8719ff1b2b64cbca290bd6faeb54423e00000000",
        "blockhash":"00000000000000000002ae96d21326ce744fc70e3bc60cbb4502064b33dfce2f",
        "confirmations":36700,
        "time":1682913868,
        "blocktime":1682913868
    },
    "error":null,
    "id":"curltest"
}
```


基于隔离见证（Segregated Witness，简称 SegWit）字段解析 BRC20 结构。




包含 3 个见证部分，















官方：https://www.blockchain.com/explorer/transactions/btc/331d02db3d6ee0cffae9052be5799bd7754c6ebb2020e422058b73334c59bf85





参考：
https://bitcoin.stackexchange.com/questions/118988/how-to-differentiate-between-btc-transactions-and-brc20-transactions-on-a-blockc

https://bitcoin.stackexchange.com/questions/107872/what-are-the-scriptpubkey-scriptsig-redeem-script-and-witness-for-the-various



