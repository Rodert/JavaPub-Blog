---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: Java实现捕鱼达人小游戏【附源码】
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

植物大战僵

<!-- more -->

Java 实现 捕鱼达人 小游戏【附源码】


`文末源码`

# Java 实现 捕鱼达人 小游戏【附源码】

`文末源码`

适合人群：Java 学习者和爱好者，下面有展示图。

@[toc]

# 1 前言
🚀获取源码，文末公众号回复【捕鱼达人】，即可。
⭐欢迎点赞留言

# 2 正文
> **公众号：JavaPub**

## 2.1 展示

3MB GIF可以欣赏：https://tva2.sinaimg.cn/large/007F3CC8ly1h0r46sr2twg31190pmqv7.gif

![https://tva2.sinaimg.cn/large/007F3CC8ly1h0r46sr2twg31190pmqv7.gif](https://img-blog.csdnimg.cn/img_convert/2cbc34b95cac01974f372827447fb564.gif)

 <img src="https://tva2.sinaimg.cn/large/007F3CC8ly1h0r46sr2twg31190pmqv7.gif" border="0" />

---

![在这里插入图片描述](https://img-blog.csdnimg.cn/a5d7bc2250f14a7fae12f17b59b7f52a.png)




## 2.2 项目结构

![在这里插入图片描述](https://img-blog.csdnimg.cn/d3c53eb25e7c43e5b1b955b07d0130c3.png)



## 2.2 主要代码


```java
package org.gpf.fishlord;

import java.io.IOException;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

/**
 * 游戏窗体
 * @author 
 * @date -4-12 下午7:39:19
 */
public class FishlordFrame extends JFrame {

	public static final int WIDTH = 800;
	public static final int HEIGHT = 480;
	
	private Pool pool;
	
	/**
	 * 构造器中初始化界面
	 */
	public FishlordFrame() {
		
		this.setTitle("捕鱼达人");
		this.setSize(WIDTH, HEIGHT);
		this.setLocationRelativeTo(null); // 设置窗口居中，必须放在setSize之后
		this.setResizable(false);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		try {
			pool = new Pool();
			this.getContentPane().add(pool);
			this.setVisible(true);
			pool.action();
		} catch (IOException e) {
			JOptionPane.showMessageDialog(this, "加载资源失败！","应用程序错误",JOptionPane.ERROR_MESSAGE);
			e.printStackTrace();
		} catch (Exception e) {
			JOptionPane.showMessageDialog(this, "初始化游戏失败！","应用程序错误",JOptionPane.ERROR_MESSAGE);
			e.printStackTrace();
		}
		
	}
	
}


```

## 2.4 按钮相关类

```java
package org.gpf.fishlord;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;

import javax.imageio.ImageIO;

class Fish implements Runnable {
	
	private static final int BASE_STEP = 5;				// x和y坐标的步进值的参考标准
	int speedOfFish = 20;								// 控制鱼的速度
	
	int x, y, index, width, height, xStep,yStep;

	BufferedImage fishImage;                          	// 当前鱼的背景图
	BufferedImage[] fishImages = new BufferedImage[10];	// 一条鱼的所有帧的图片
	Random r;											// 产生随机数

	/**
	 * 在构造器中初始化鱼的属性
	 * @param fishname
	 * @throws IOException
	 */
	public Fish(String fishName) throws IOException {
		// 加载鱼的图片
		BufferedImage tempFishImage;
		String resourceName;
		for (int i = 0; i < 10; i++) {
			if (i!=9) {
				resourceName = "/images/" + fishName + "_0" + (i+1) + ".png";
			}else {
				resourceName = "/images/" + fishName + "_" + (i+1) + ".png";
			}
			tempFishImage = ImageIO.read(getClass().getResourceAsStream(resourceName));
			fishImages[i] = tempFishImage;
		}
		fishImage = fishImages[index];
		
		width = fishImage.getWidth();   					// 根据背景图片的宽高设置鱼所占矩形区域的大小
		height = fishImage.getHeight();
		
		goInPool();
	}

	/**
	 * 维持鱼的游动---x和y坐标的变化
	 */
	public void run() {
		while (true) {
			try {
				Thread.sleep(speedOfFish); // 如果不休眠，鱼的速度过快，基本感觉不到鱼的存在。视觉暂留：1/24~1/7秒之间
				index++;
				fishImage = fishImages[index % fishImages.length]; // 轮流切换帧，生成动画
				x = x - xStep;
				int temp = r.nextInt(10) + 1;
				yStep = r.nextBoolean()?temp:-temp;
//				y = y + yStep;
				
				// 判断鱼是否到了边界，因为鱼是从右面进入的，因此只需要判断3个方向
				if (x <= 0 || y <= 0 || y >= 480){
					goInPool();
				}
				
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 *  判断鱼是否在网内
	 */
	public boolean fishInNet(int netX, int netY) {
		int dx = netX - x;
		int dy = netY - y;
		return dx >= 0 && dx <= width && dy >= 0 && dy <= height;
	}

	/**
	 * 鱼从屏幕上游出或者被网罩住的时候消失，再从屏幕的右侧游动到屏幕中,实际上还是那几条鱼
	 */
	void goInPool() {
		r = new Random();
		x = FishlordFrame.WIDTH - 10;						// 鱼从右侧游动到屏幕左侧
		y = r.nextInt(FishlordFrame.HEIGHT - 20 - height);	// 鱼的初始y的坐标是根据窗体的高度随机指定的
		xStep = r.nextInt(BASE_STEP) + 1;					// 鱼游动的速度是随机的                        
	}
}
```

## 2.5 启动类

```java
package com.dq.ui;

public class StartGame {
	
	public static void main(String[] args) {
		
		new SnakeFrame();
	}
}
```

获取源码，公众号回复【捕鱼达人】，见公 ~

不会还有人没 **点赞 + 关注 + 收藏** 吧!

![在这里插入图片描述](https://img-blog.csdnimg.cn/78880aa79d5d41e1b07d652857a93541.png)


# 系列推荐：

[Java 实现 捕鱼达人 小游戏【附源码】](https://javapub.net.cn/)

[Java 实现 贪吃蛇 小游戏【附源码】](https://javapub.net.cn/)

[Java 实现 1024 小游戏【附源码】](https://javapub.net.cn/)

[Java实现一个坦克大战的小游戏【附源码】](/project/game)

[Java实现一个打飞机的小游戏【附源码】](/project/game)

[Java 实现 植物大战僵尸 小游戏【附源码】](/project/game)


## [查看更多博主首页更多实战项目 >>>](https://blog.csdn.net/qq_40374604/category_11708266.html)

公众号二维码

![](/accounts/wechat.jpg)

个人微信

![](/accounts/QRcode.jpg)

