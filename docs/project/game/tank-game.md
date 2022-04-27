---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: Java实现一个坦克大战的小游戏【附源码】
# 设置作者
author: Wang Shiyu
# 设置写作时间
date: 2022-04-23
# 一个页面可以有多个分类
category:
  - 小游戏
# 一个页面可以有多个标签
tag:
  - 小游戏
# 此页面会出现在首页的文章板块中
star: true
---

坦克大战

<!-- more -->

Java实现一个坦克大战的小游戏【附源码】


我的网站已经上线了 <http://javapub.net.cn/>

`文末源码`
`文末源码`
`文末源码`


> 点赞再看，养成习惯

适合人群：初级学习者和爱好者，下面有展示图。计算机毕业设计

@[toc]

# 1 前言
🚀获取源码，文末公众号回复【坦克】，即可。
⭐欢迎点赞留言

# 2 正文

> **公众号：JavaPub**

## 2.1 展示预览

13MB GIF可以欣赏：
[https://img-blog.csdnimg.cn/img_convert/4721f22d97731adcdbc8baff4b520176.gif](https://img-blog.csdnimg.cn/img_convert/4721f22d97731adcdbc8baff4b520176.gif)

<img src="https://tva1.sinaimg.cn/large/007F3CC8ly1h0ooqf5p6mg31ex0pfhdt.gif" alt="动画" width="1833" data-width="1833" data-height="915">

---
![在这里插入图片描述](https://img-blog.csdnimg.cn/47a36e9eac60439abcc4df494d81a5a5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmF2YVB1Yi1yb2RlcnQ=,size_18,color_FFFFFF,t_70,g_se,x_16)


## 2.2 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/7919d29179214d89841bd642a5a9c511.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmF2YVB1Yi1yb2RlcnQ=,size_20,color_FFFFFF,t_70,g_se,x_16)


## 2.2 主要代码展示

```bash

var Bullet = function(context,owner,type,dir){
	this.ctx = context;
	this.x = 0;
	this.y = 0;
	this.owner = owner; //子弹的所属者
	this.type = type;//1、玩家  2、敌方
	this.dir = dir;
	this.speed = 3;
	this.size = 6;
	this.hit = false;
	this.isDestroyed = false;
	
	this.draw = function(){
		this.ctx.drawImage(RESOURCE_IMAGE,POS["bullet"][0]+this.dir*this.size,POS["bullet"][1],this.size,this.size,this.x,this.y,this.size,this.size);
		this.move();
	};
	
	this.move = function(){
		if(this.dir == UP){
			this.y -= this.speed;
		}else if(this.dir == DOWN){
			this.y += this.speed;
		}else if(this.dir == RIGHT){
			this.x += this.speed;
		}else if(this.dir == LEFT){
			this.x -= this.speed;
		}
		
		this.isHit();
	};
	
	/**
	 * 碰撞检测
	 */
	this.isHit = function(){
		if(this.isDestroyed){
			return;
		}
		//临界检测
		if(this.x < map.offsetX){
			this.x = map.offsetX;
			this.hit = true;
		}else if(this.x > map.offsetX + map.mapWidth - this.size){
			this.x = map.offsetX + map.mapWidth - this.size;
			this.hit = true;
		}
		if(this.y < map.offsetY){
			this.y = map.offsetY;
			this.hit = true;
		}else if(this.y > map.offsetY + map.mapHeight - this.size){
			this.y = map.offsetY + map.mapHeight - this.size;
			this.hit = true;
		}
		//子弹是否碰撞了其他子弹
		if(!this.hit){
			if(bulletArray != null && bulletArray.length > 0){
				for(var i=0;i<bulletArray.length;i++){
					if(bulletArray[i] != this && this.owner.isAI != bulletArray[i].owner.isAI && bulletArray[i].hit == false && CheckIntersect(bulletArray[i],this,0)){
						this.hit = true;
						bulletArray[i].hit = true;
						break;
					}
				}
			}
		}
		
		if(!this.hit){
			//地图检测
			if(bulletMapCollision(this,map)){
				this.hit = true;
			}
			//是否击中坦克
			if(this.type == BULLET_TYPE_PLAYER){
				if(enemyArray != null || enemyArray.length > 0){
					for(var i=0;i<enemyArray.length;i++){
						var enemyObj = enemyArray[i];
						if(!enemyObj.isDestroyed && CheckIntersect(this,enemyObj,0)){
							CheckIntersect(this,enemyObj,0);
							if(enemyObj.lives > 1){
								enemyObj.lives --;
							}else{
								enemyObj.distroy();
							}
							this.hit = true;
							break;
						}
					}
				}
			}else if(this.type == BULLET_TYPE_ENEMY){
				if(player1.lives > 0 && CheckIntersect(this,player1,0)){
					if(!player1.isProtected && !player1.isDestroyed){
						player1.distroy();
					}
					this.hit = true;
				}else if(player2.lives > 0 && CheckIntersect(this,player2,0)){
					if(!player2.isProtected && !player2.isDestroyed){
						player2.distroy();
					}
					this.hit = true;
				}
			}
		}
		
		
		if(this.hit){
			this.distroy();
		}
	};
	
	/**
	 * 销毁
	 */
	this.distroy = function(){
		this.isDestroyed = true;
		crackArray.push(new CrackAnimation(CRACK_TYPE_BULLET,this.ctx,this));
		if(!this.owner.isAI){
			BULLET_DESTROY_AUDIO.play();
		}
	};
	
	
};

```

---

## 2.3 按钮操作

```bash

var CrackAnimation = function(type,context,crackObj){
	this.times = 0;
	this.ctx = context;
	this.frame = 0;
	this.x = 0;
	this.y = 0;
	this.posName = "";
	this.size = 0;
	this.isOver = false;
	this.tempDir = 1;
	this.owner = crackObj;
	
	if(type == CRACK_TYPE_TANK){
		this.posName = "tankBomb";
		this.size = 66;
		this.frame = 4;
	}else{
		this.posName = "bulletBomb";
		this.size = 32;
		this.frame = 3;
	}
	this.x = crackObj.x + (parseInt(crackObj.size - this.size)/2);
	this.y = crackObj.y + (parseInt(crackObj.size - this.size)/2);
	
	this.draw = function(){
		var gaptime = 3;
		var temp = parseInt(this.times/gaptime);
		this.ctx.drawImage(RESOURCE_IMAGE,POS[this.posName][0]+temp*this.size,POS[this.posName][1],this.size,this.size,this.x,this.y,this.size,this.size);
		this.times += this.tempDir;
		if(this.times > this.frame * gaptime - parseInt(gaptime/2)){
			this.tempDir = -1;
		}
		if(this.times <= 0){
			this.isOver = true;
		}
	};
};
```

## 源码下载


获取源码，公众号回复【坦克】，即可。更多最新Java面试题加群、见群公告。~

不会还有人没 **点赞 + 关注 + 收藏** 吧!

![39ea922780a49225b7e99adeb19a9b8e](https://tvax2.sinaimg.cn/large/007F3CC8ly1h1f3larkikj30qe0cxtrl.jpg)

# 系列推荐：

[Java 实现 捕鱼达人 小游戏【附源码】](https://javapub.blog.csdn.net/article/details/123834030)

[Java 实现 贪吃蛇 小游戏【附源码】](https://javapub.blog.csdn.net/article/details/123833575)

[Java 实现 1024 小游戏【附源码】](https://javapub.blog.csdn.net/article/details/123832950)

[Java实现一个坦克大战的小游戏【附源码】](https://javapub.blog.csdn.net/article/details/123779963)

[Java实现一个打飞机的小游戏【附源码】](https://javapub.blog.csdn.net/article/details/123699508)

[Java 实现 植物大战僵尸 小游戏【附源码】](https://blog.csdn.net/qq_40374604/article/details/124238828)



## [查看更多博主首页更多实战项目 >>>](https://blog.csdn.net/qq_40374604/category_11788364.html)


**项目源码获取方法**

点赞本文，然后私信我，我免费分享给你哈~

![image](https://tva4.sinaimg.cn/large/007F3CC8ly1h1f3gd3qcmj30dw0dbq36.jpg)

公众号二维码

![](/accounts/wechat.jpg)

个人微信

![](/accounts/QRcode.jpg)

