---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: Java实现贪吃蛇小游戏【附源码】
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

Java实现贪吃蛇小游戏【附源码】

<!-- more -->

Java实现贪吃蛇小游戏【附源码】



`文末源码`

适合人群：Java 学习者和爱好者，下面有展示图。

@[toc]

# 1 前言

🚀获取源码，文末公众号回复【贪吃蛇】，即可。
⭐欢迎点赞留言

# 2 正文

> **公众号：JavaPub**

## 2.1 展示

0.5MB GIF可以欣赏：https://tva1.sinaimg.cn/large/007F3CC8ly1h0r3m3o16qg31190osan3.gif

![动画](https://img-blog.csdnimg.cn/img_convert/ed1ba4b943aa142a53b79b42a91d4941.gif)

 <img src="https://tva1.sinaimg.cn/large/007F3CC8ly1h0r3m3o16qg31190osan3.gif" border="0" />

---

![在这里插入图片描述](https://img-blog.csdnimg.cn/e773db2b26194a67a478d44e7d7142ba.png)




## 2.2 项目结构

![在这里插入图片描述](https://img-blog.csdnimg.cn/18238cd8bcb5473aa3584769513a1dc2.png)


## 2.2 主要代码

```java
package com.dq.ui;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Point;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.LinkedList;
import java.util.Random;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.Timer;

import com.dq.utils.PlayMusicUtil;
import com.dq.utils.PropertiesUtils;

/**
 * @author dq
 *
 */
public class SnakeFrame extends JFrame{

	private static final long serialVersionUID = 8866826595307493727L;
	
	private static final int WIDTH = 800; // 
	private static final int HEIGHT = 600; 
	private static final int CELL = 20; 
	
	private JLabel snakeHeader;  
	private JLabel fruit;  
	
	private Random random = new Random();  
	
	private int dir = 1; 
	
	private LinkedList<JLabel> bodies = new LinkedList<JLabel>();
	
	private String[] fruits = {"pineapple.png","apple.png","cherry.png","grape.png","orange.png","peach.png","strawberry.png","tomato.png"};
	
	private String[] snakeBody = {"green.png","red.png","yellow.png","purple.png"};
	
	private JLabel highestLabel; 
	private JLabel currentLabel; 
	private int highestScore; 
	private int currentScore;
	private PropertiesUtils prop = PropertiesUtils.getInstance();
	
	private Timer timer;  
	private boolean status = true;
	
	
	public SnakeFrame(){
		
		ImageIcon icon = new ImageIcon("./src/com/dq/images/snake.jpg");
		this.setIconImage(icon.getImage());
		this.setTitle("贪吃蛇   DQ制作");
		this.setSize(WIDTH+4, HEIGHT+34);
		this.setLocationRelativeTo(null);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setResizable(false);
		this.setLayout(null);

		SnakePanel snakePanel = new SnakePanel();
		snakePanel.setBounds(0, 0, WIDTH, HEIGHT);
		this.add(snakePanel);
		

		this.addKeyListener(new KeyAdapter() {
			
			@Override
			public void keyPressed(KeyEvent e) {
	
				int keyCode = e.getKeyCode();
				
	
				switch (keyCode) {
					case KeyEvent.VK_LEFT: 
						if(dir != SnakeDirection.RIGHT){ 
							dir = SnakeDirection.LEFT;
							setBackgrounImage(snakeHeader, "header_l.png");
						}
						break;
					case KeyEvent.VK_RIGHT: 
						if(dir != SnakeDirection.LEFT){ 
							dir = SnakeDirection.RIGHT;
							setBackgrounImage(snakeHeader, "header_r.png");
						}
						break;
					case KeyEvent.VK_UP: 
						if(dir != SnakeDirection.BOTTOM){
							dir = SnakeDirection.TOP;
							setBackgrounImage(snakeHeader, "header_t.png");
						}
						break;
					case KeyEvent.VK_DOWN: 
						if(dir != SnakeDirection.TOP){
							dir = SnakeDirection.BOTTOM;
							setBackgrounImage(snakeHeader, "header_b.png");
						}
						break;
					case KeyEvent.VK_SPACE: 
//						if(status){ 
//							status = !status;
//						}else{
//							status = !status;
//							timer.notify();
//						}
						
				}
				
			}
		});
		
		this.setVisible(true);
		

		PlayMusicUtil.playBGM();
		
		new Timer(98000, new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				
				PlayMusicUtil.playBGM();
			}
		}).start();
		
		
	}
	
	private void setBackgrounImage(JLabel label,String fileName){
		
		ImageIcon icon = new ImageIcon("./src/com/dq/images/"+fileName);
		icon.setImage( icon.getImage().
				getScaledInstance(label.getWidth(),label.getHeight(),Image.SCALE_DEFAULT));
		label.setIcon(icon);
	}
	
	class SnakePanel extends JPanel{
		
		private static final long serialVersionUID = 1L;

		public SnakePanel(){
			init();
		}

		private void init() {
			
			this.setSize(SnakeFrame.WIDTH, SnakeFrame.HEIGHT);
			this.setLayout(null);
			
			highestLabel = new JLabel();
			highestScore = Integer.parseInt(prop.getProperty("highest"));
			highestLabel.setText("历史最高分"+highestScore);
			highestLabel.setBounds(20, 20, 300, 30);
			this.add(highestLabel);
			
			currentLabel = new JLabel("当前得分"+currentScore);
			currentLabel.setBounds(20, 60, 300, 30);
			this.add(currentLabel);
			
			createHeader();
			
			new Thread(new Runnable() {
				
				@Override
				public void run() {
					createFruit();
				}
			}).start();
			
			
			timer = new Timer(250, new ActionListener() {
				
				@Override
				public void actionPerformed(ActionEvent e) {
					Point oldPoint = snakeHeader.getLocation();
					Point newPoint = null;
					
					switch (dir) {
						case SnakeDirection.RIGHT: //鍚戝彸
							newPoint = new Point(oldPoint.x+CELL, oldPoint.y);
							break;
						case SnakeDirection.LEFT: //鍚戝乏
							newPoint = new Point(oldPoint.x-CELL, oldPoint.y);
							break;
						case SnakeDirection.BOTTOM: //鍚戜笅
							newPoint = new Point(oldPoint.x, oldPoint.y+CELL);
							break;
						case SnakeDirection.TOP: //鍚戜笂
							newPoint = new Point(oldPoint.x, oldPoint.y-CELL);
							break;
					}
					
					snakeHeader.setLocation(newPoint);
					isHeatWall();
					
					if(snakeHeader.getLocation().equals( fruit.getLocation())){
						eatBean();
					}
					
					move(oldPoint);
				}

			

				
			});
			timer.start();
			
			
		}
		
		private void move(Point oldPoint) {
			
			Point p = new Point();
			for(int i=1;i<bodies.size();i++){
				p = bodies.get(i).getLocation();
				bodies.get(i).setLocation(oldPoint);
				oldPoint = p;
			}
			
		}
		

		private void eatBean() {
			
			int index = random.nextInt( snakeBody.length);
			setBackgrounImage(fruit, snakeBody[index]);
			bodies.add(fruit);
			new Thread(new Runnable() {
				
				@Override
				public void run() {
					PlayMusicUtil.playEatBean();
				}
			}).start();
			
			currentScore++;
			currentLabel.setText("褰撳墠寰楀垎锛�"+currentScore);		
			
//			new Thread( new Runnable() {
//				
//				@Override
//				public void run() {
//					
//					createFruit();
//				}
//			}).start();
			new Thread( ()->{createFruit();}).start(); 
			
		}
		
		private void isHeatWall() {
			
			int x = snakeHeader.getLocation().x;
			int y = snakeHeader.getLocation().y;
			
			if(x <0 || x >780 || y<0 || y>580){
				
				new Thread( new Runnable() {
					
					@Override
					public void run() {
						PlayMusicUtil.stopBGM();
						PlayMusicUtil.playGameOver();
					}
				}).start();
				
				int op = -1;
				if(currentScore > highestScore){
					op = JOptionPane.showConfirmDialog(null, "鍝﹁眮锛佺牬绾綍浜嗗摝锛佸啀鏉ヤ竴鎶婏紵");
					prop.setProperty("highest", currentScore+"");
					try {
						FileWriter writer = new FileWriter(new File("./src/score.properties"));
						prop.store(writer, null);
					} catch (IOException e) {
						e.printStackTrace();
					}
				}else{
					op = JOptionPane.showConfirmDialog(null, "你死了");
				}
				
				//鍒ゆ柇鏄惁鍐嶆潵涓�鎶�
				if(op == 0){
					
					reStart();
				}else{
					
					System.exit(0);
				
				}
			}
		}

		private void createFruit() {
			
			fruit = new JLabel();
			fruit.setSize(CELL, CELL);
			
			int index = random.nextInt( fruits.length);
			setBackgrounImage(fruit, fruits[index]);
			
			Point p = randomPoint(SnakeFrame.WIDTH/CELL, SnakeFrame.HEIGHT/CELL);
			System.out.println("x:"+p.x+" y:"+p.y);
			fruit.setLocation(p);
			
			this.add(fruit);
			this.repaint();
		}

		private void createHeader() {
			
			snakeHeader = new JLabel();
			snakeHeader.setSize(CELL, CELL);
//			snakeHeader.setOpaque(false);
			
			setBackgrounImage(snakeHeader, "header_r.png");
			
			Point p = randomPoint((SnakeFrame.WIDTH/CELL)/2, (SnakeFrame.HEIGHT/CELL)/2);
			p.x = p.x+10*CELL;
			p.y = p.y+10*CELL;
			snakeHeader.setLocation(p);
			
			
			bodies.add(snakeHeader);
			
			this.add(snakeHeader);
		}
		
		
		
		private Point randomPoint(int xScale,int yScale){
			
			Point point = new Point();
			int x = random.nextInt(xScale)*CELL;
			int y = random.nextInt(yScale)*CELL;
			
			
			
			point.setLocation(x, y);
			return point;
		}
		
	
		@Override
		protected void paintComponent(Graphics g) {
			super.paintComponent(g);
			
			ImageIcon icon = new ImageIcon("./src/com/dq/images/bg.png");
			g.drawImage(icon.getImage(), 0, 0, SnakeFrame.WIDTH, SnakeFrame.HEIGHT, null);
			
			g.setColor(Color.RED);
			
			for(int i=1;i<HEIGHT/CELL;i++){
				g.drawLine(0, i*CELL, 800, i*CELL);
			}
			
			for(int i=1;i<WIDTH/CELL; i++){
				g.drawLine(i*CELL, 0, i*CELL, 600);
			}
			
		}
		
		public void reStart() {
			
			if(currentScore > highestScore){
				highestScore = currentScore;
				highestLabel.setText("最高分"+highestScore);
			}
			currentScore = 0;
			currentLabel.setText("当前得分"+currentScore);
			dir = 1;
			this.remove(fruit);
			for(JLabel body : bodies){
				this.remove(body);
			}
			
			bodies.clear();
			
			createHeader();
			createFruit();
			
			PlayMusicUtil.playBGM();
			
			super.repaint();
			
			
		}
	}
}

```

## 2.4 按钮相关类

```java
package com.dq.ui;

/**
 * 存储蛇运动方向的接口
 * @author dq
 *
 */
public interface SnakeDirection {
	
	int LEFT = -1;
	
	int RIGHT = 1;
	
	int BOTTOM = -2;
	
	int TOP = 2;
	
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


获取源码，公众号回复【贪吃蛇】，见公 ~

不会还有人没 **点赞 + 关注 + 收藏** 吧!


![在这里插入图片描述](https://img-blog.csdnimg.cn/908a3e84d93a4367b88b923e90b65cd1.png)



---



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

