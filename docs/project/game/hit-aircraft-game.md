---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: Java实现一个打飞机的小游戏【附源码】
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
  - web前端期末大作业
# 此页面会出现在首页的文章板块中
star: true
---

Java实现一个打飞机的小游戏【附源码】

<!-- more -->

Java实现一个打飞机的小游戏【附源码】

`文末源码`

适合人群：Java初级学习者和爱好者，下面有展示图。

@[toc]

# 1 前言

🚀获取源码，文末公众号回复【飞机】，即可。
⭐欢迎点赞留言

# 2 正文

> **公众号：JavaPub**

## 2.1 展示

64MB GIF可以欣赏：[https://www.z4a.net/images/2022/03/23/ae8bacca260b5e978f1dab8010d9a2a1.gif](https://www.z4a.net/images/2022/03/23/ae8bacca260b5e978f1dab8010d9a2a1.gif)

> <img src="https://www.z4a.net/images/2022/03/23/ae8bacca260b5e978f1dab8010d9a2a1.gif" alt="ae8bacca260b5e978f1dab8010d9a2a1.gif" border="0" />

---

![在这里插入图片描述](https://img-blog.csdnimg.cn/0fc4adf9f4c34961a6c2886249d8f90c.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/1c76b0c4313043ee98e055c6774e2d2f.png)

## 2.2 项目结构


![在这里插入图片描述](https://img-blog.csdnimg.cn/67222af056e144989baba173b33ab2a8.png)

## 2.2 主要代码展示

```java
package main;

import data.Data;
import utils.Load;

import javax.sound.sampled.Clip;
import javax.swing.*;

public class Main {

    public static void main(String[] args) {
        // 创建窗口
        JFrame frame = new JFrame("飞机大战");
        // 添加 JPanel
        Data.canvas = new Canvas(frame);
        frame.setContentPane(Data.canvas);
        // 初始化 Data
        Data.init();
        // 设置图标
        frame.setIconImage(Load.image("ICON.png"));
        // 设置窗口可见
        frame.setVisible(true);
        // 获取标题栏的高度和宽度
        Data.TITLE_BOX_HEIGHT = frame.getInsets().top;
        // 设置大小
        frame.setSize(Data.WIDTH, Data.HEIGHT + Data.TITLE_BOX_HEIGHT);
        // 窗口大小固定
        frame.setResizable(false);
        // 窗口居中显示
        frame.setLocationRelativeTo(frame.getOwner());
        // 窗口关闭时结束程序
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // 播放背景音乐
        Load.sound("background").loop(Clip.LOOP_CONTINUOUSLY);
    }
}

```

## 2.4 按钮相关类

```java
package scenes;

import data.Data;
import scenes.connector.Scenes;
import utils.Load;
import utils.Rect;

import java.awt.*;

public class About implements Scenes {
    // 背景图片
    Image background;
    // 确定按钮
    Image[] buttonOk;
    // 按钮状态
    int buttonOkStruts = 0;

    public About() {
        buttonOk = new Image[3];

        background = Load.image("关于作者-背景.png");
        buttonOk[0] = Load.image("确定.png");
        buttonOk[1] = Load.image("确定-鼠标移上.png");
        buttonOk[2] = Load.image("确定-鼠标按下.png");
    }

    public void onKeyDown(int keyCode) {

    }

    public void onKeyUp(int keyCode) {

    }

    public void onMouse(int x, int y, int struts) {
        buttonOkStruts = 0;

        if(Rect.isInternal(x, y, 188, 600 + Data.TITLE_BOX_HEIGHT, 132, 42)) {
            buttonOkStruts = struts == Scenes.MOUSE_MOVED ? 1 : struts == Scenes.MOUSE_DOWN ? 2 : 0;
            if(struts == Scenes.MOUSE_UP) Data.canvas.switchScenes("Home");
        }
    }

    public void draw(Graphics g) {
        // 绘制背景
        Data.background.show(g);
        // 绘制关于作者
        g.drawImage(background, 48, 60, null);
        // 绘制按钮
        g.drawImage(buttonOk[buttonOkStruts], 188, 600, null);
    }
}

```

## 2.5 背景音乐类

```java
package utils;

import javax.imageio.ImageIO;
import javax.sound.sampled.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;

public class Load {

    public static Image image(String path) {
        BufferedImage img = null;
        URL url = Load.class.getResource("/resources/img/" + path);
        try {
            img = ImageIO.read(url);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return img;
    }

    // 返回一段音乐
    public static Clip sound(String path) {
        try {
            AudioInputStream ais = AudioSystem.getAudioInputStream(Load.class.getResourceAsStream("/resources/sound/" + path + ".wav"));
            Clip sound = AudioSystem.getClip();
            sound.open(ais);
            return sound;
        } catch (LineUnavailableException | UnsupportedAudioFileException | IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    public static void playSound(String path) {
        new Thread(() -> Load.sound(path).start()).start();
    }
}

```

获取源码，公众号回复【飞机】，即可。更多最新Java面试题加群、见群公告。~

不会还有人没 **点赞 + 关注 + 收藏** 吧!

![image](https://tva4.sinaimg.cn/large/007F3CC8ly1h1l3x80dfjj30ci0gb0uu.jpg)

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

