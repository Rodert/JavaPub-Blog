---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: Java实现植物大战僵尸小游戏【附源码】
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

植物大战僵

<!-- more -->

Java实现植物大战僵尸小游戏【附源码】

`文末源码`

# Java 实现 植物大战僵尸 小游戏【附源码】

适合人群：Java 学习者和爱好者，下面有展示图。

@[toc]

# 1 前言
🚀获取源码，文末公众号回复【植物大战僵尸】，即可。
⭐欢迎点赞留言

# 2 正文
> **公众号：JavaPub**

## 2.1 展示
1MB GIF可以欣赏：https://tva2.sinaimg.cn/large/007F3CC8ly1h1d47cxdsag31b60k9u0x.gif


 <img src="https://tva2.sinaimg.cn/large/007F3CC8ly1h1d47cxdsag31b60k9u0x.gif" border="0" />

---

![请添加图片描述](https://img-blog.csdnimg.cn/218def43e1b8462cbec64b2b5c16c9e1.gif)





## 2.2 项目结构

![在这里插入图片描述](https://img-blog.csdnimg.cn/0cc76696ff494bf9b149818d9617edee.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmF2YVB1Yi1yb2RlcnQ=,size_20,color_FFFFFF,t_70,g_se,x_16)




## 2.2 主要代码

```java
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="KeyWords" content="lonelystar,植物大战僵尸">
<meta name="Description" content="植物大战僵尸">
<title>植物大战僵尸</title>
<style type="text/css">
body{-moz-user-select:none}
td{font-family: 宋体; font-size: 12px}
div{left:0}
span{cursor:default}
span,div,h2,h3{padding:0;margin:0}
td.HandBookZombie{background: url(images/interface/Almanac_ZombieWindow2.png) no-repeat; width:20%; height:16%; text-align:center}
#DivTeach{
filter:"alpha(opacity=90)"; /* IE 8 */
filter:alpha(opacity=90); /* IE 4-7 */
opacity:.9; /* FireFox,Safari(WebKit),Opera */
-moz-opacity:.9; /* FireFox<3.5 */
position:absolute;width:900px;height:50px;top:530px;left:0;z-index:100;text-align: center; font-family: 幼圆; font-size: 20pt; font-weight: bold; color: #FFFFFF; background-color: #5B432E}
.WindowFrame{position:absolute;width:900px;height:600px;OVERFLOW: hidden;border:3px outset ;}
#dFlagMeterTitleB{position:absolute;color:#000; font-size: 18pt;font-weight:bold;width:343px;top:15px;left:-5px}
#dFlagMeterTitleB span{position:absolute;color:#F93;font-size: 18pt;font-weight: bold;width:343px;top:-1px;left:-1px;}

#dSurfaceBack{position:absolute;display:none;top:0;width:900px;height:600px;z-index:255}
#dHelp{width:614px;height:399px;background:url(images/Help.png);position:absolute;display:none;left:143px;top:100px}
#dSelectLevel{position:absolute;width:100%;height:100%;font-weight:bold;display:none}
#dOptionsMenuBack{position:absolute;text-align:center;left:244px;top:60px;width:412px;height:483px;display:none;background:url(images/OptionsMenuback32.png);_background:url(images/OptionsMenuback8.png)}
.TitleBigContainer{position:relative;width:220px;margin:120px auto 0 auto;height:240px;overflow:hidden}
.TitleSmallContainer{position:relative;width:100%;line-height:35px;color:#FFF;font-size:16px}
.SmallLevel{float:left;cursor:pointer;width:50%}
.BigLevel{float:left;color:#FC6;font-size:20px;width:100%;height:40px}
.OptionsMenuButton,.OptionsMenuButtonDown{background:url(images/OptionsBackButton32.png);_background:url(images/OptionsBackButton8.png);float:left;font-family:黑体;font-size:32px;cursor:pointer;width:360px;height:100px;margin-left:26px;display:inline;color:#FC6}
.OptionsMenuButton{background-position:0 0}
.OptionsMenuButtonDown{background-position:0 100}
.OptionsMenuButtonSpan{height:100px;line-height:100px;cursor:pointer}

#dPCard img{left:0;width:70px;height:42px}
#dPCard .span1{cursor:pointer;width:70px;height:42px;float:left;margin:8px 0 0 2px;position:relative;} 
#dPCard .span2{cursor:pointer;text-align:center;position:absolute;left:40px;top:27px;font-family:Fixedsys;font-size:9pt}
#dCardList div{position:relative;cursor:pointer;padding:0;height:60px}
#dCardList span{cursor:pointer;position:absolute;left:66px;top:40px;width:34px;height:20px;font-family:Fixedsys;font-size:11pt}
#dCardList img{position:absolute;width:100px;height:60px}
.SelectModal{color: #FC6; font-weight: bold;cursor:pointer;background: url(images/interface/Button.png) no-repeat center;text-align:center;height:43px;width:115px}
.Menu{float:left;text-align:center;line-height:41px;font-weight:bold;font-family:黑体;color:#00CB08;height:41px;width:113px;background:url(images/interface/Button.png)}
#imgSF{position:absolute;cursor:pointer;z-index:254}
#PointerUD{position:absolute;z-index:50}
#dTitle{display:none;position:absolute;left:100;background-color:#FFD;width:150px;font-size:12px;text-align:center;line-height:1.5;border:1px solid #000;padding:3px;z-index:254}
#dAll img,#dFlagMeter img{position:absolute;border-style:none}
#dProcess{text-align:center;border: 1px solid #FFF;background-color:#000;color:#FFF;position:absolute;left:130px;top:50px;width:640px;height:500px;display:none;z-index:250;padding:10px;*padding:10px 5px 10px 2px}
#dProcess img{margin:5px 0}
#dProcess h2{font-size:16px;margin:0 10px;color:#E80}
#dProcess h3{font-size:12px}
#dProcess2{overflow:auto;line-height:18px;font-size:12px;text-align:left;width:100%;*width:96%;height:450px}
#dLink{position:absolute;left:5px;top:610px;width:500px;height:50px}
#dLink div{float:left;margin-right:10px}

.Tom1{left:0;top:0;width:86px;height:91px;background:url(images/interface/Tombstones.png) no-repeat}
.Tom2{position:absolute;left:0;top:0;width:86px;height:91px;background:url(images/interface/Tombstone_mounds.png) no-repeat}
</style>
<script src="js/Cfunction.js" type="text/javascript"></script>
<script src="js/CPlants.js" type="text/javascript"></script>
<script src="js/CZombie.js" type="text/javascript"></script>
<script id="JSPVZ" type="text/javascript"></script>
<script id="JSProcess" type="text/javascript"></script>
</head>
<body id="dBody" topmargin="0" leftmargin="0" oncontextmenu="return false" ondragstart="return false" onselectstart="return false" bgcolor="#008080">

<!--进度条-->
<div id="dFlagMeter" style="visibility:hidden;position:absolute;z-index:255;left:50px;top:280px;width:500px;height:40px">
	<div id="dFlagMeterTitle" style="position:absolute;text-align:right"><div id="dFlagMeterTitleB"><span id="sFlagMeterTitleF"></span></div></div>
	<div id="dFlagMeterContent" style="position:absolute;left:344px;width:157px;height:40px">
		<img id="imgFlagMeterEmpty" border="0" src="images/interface/FlagMeterEmpty.png" style="top: 17px">
		<img id="imgFlagMeterFull" border="0" src="images/interface/FlagMeterFull.png" style="top: 17px;clip:rect(0,auto,auto,157px)">
		<img id="imgFlag1" src="images/interface/FlagMeterParts2.png" style="left: 10px; top: 14px;display:none">
		<img id="imgFlag2" src="images/interface/FlagMeterParts2.png" style="left: 40px; top: 14px;display:none">
		<img id="imgFlag3" src="images/interface/FlagMeterParts2.png" style="left: 70px; top: 14px;display:none">
		<img id="imgFlag4" src="images/interface/FlagMeterParts2.png" style="left: 100px; top: 14px;display:none">
		<img id="imgGQJC" src="images/interface/FlagMeterLevelProgress.png" style="left: 35px; top: 29px;display:block">
		<img id="imgFlagHead" src="images/interface/FlagMeterParts1.png" style="left: 139px; top: 13px">
	</div>
</div>

<!--选项界面-->
<div id="dSurface" class="WindowFrame" style="display:none;z-index:255">
	<div id="iSurfaceBackground">
		<map name="FPMap0">
			<area href="javascript:void(0)" shape="rect" coords="641, 466, 724, 527" onClick="ShowOptions()">
			<area href="javascript:void(0)" shape="rect" coords="718, 512, 790, 558" onClick="ShowHelp()">
			<area href="javascript:void(0)" shape="rect" coords="800, 495, 879, 548" onClick="SetNone($('dSurface'))">
		</map>
		<img src="images/surface.png" usemap="#FPMap0" border="0">
		<div style="position: absolute;background:url('images/SelectorScreenStartAdventur.png');left:474px;top:80px;width:331px;height:146px;cursor:pointer" onMouseOver="this.style.backgroundPosition='bottom'" onMouseOut="this.style.backgroundPosition='top'" onClick="ShowLevel()"></div>
		<div style="position: absolute;background:url('images/SelectorScreenSurvival.png');left:474px;top:203px;width:313px;height:131px;cursor:pointer" onMouseOver="this.style.backgroundPosition='bottom'" onMouseOut="this.style.backgroundPosition='top'" onClick="ShowMiniGame()"></div>
	</div>
	<div id="dSurfaceBack">
		<div id="dHelp" onClick="HiddenHelp()"></div>
		<div id="dOptionsMenuback">
			<div id="dOptionsMenu" style="line-height:40px;position:absolute;width:100%;height:100%;display:none;font-weight:bold">
				<div style="margin-top:150px;height:40px"><input type="checkbox" id="cAutoSun" value="1" onChange="CheckAutoSun(this)"><label for="cAutoSun" id="lAutoSun" style="color:#FFF">自动拾取阳光</label></div>
				<div class="BigLevel" style="cursor:pointer" onClick="SelectModal(oS.Lvl)">重新开始</div>
				<div class="BigLevel" style="cursor:pointer" onClick="HiddenOptions();SelectModal(0);SetBlock($('dSurface'),$('iSurfaceBackground'))">返回菜单</div>
				<div class="OptionsMenuButton" style="margin-top:108px" onMouseDown="OptionsMenuDown(this,$('sOptionsMenu'))" onMouseUp="OptionsMenuUP(this,$('sOptionsMenu'));HiddenOptions()"><span id="sOptionsMenu" class="OptionsMenuButtonSpan">返回游戏</span></div>
			</div>
			<div id="dSelectLevel">
				<div class="TitleBigContainer">
					<div id="dTitleSmallContainer" class="TitleSmallContainer" style="display:none">
						<div id="dBigLvl1">
							<div class="BigLevel">&nbsp;&nbsp;&nbsp;第一大关&nbsp;&nbsp;&nbsp;<span style="cursor:pointer" onClick="SetNone($('dBigLvl1'));SetBlock($('dBigLvl2'))" title="点击进入到第二大关">>></span></div>
							<div onClick="SelectModal(1)" class="SmallLevel">第一关</div>
							<div onClick="SelectModal(2)" class="SmallLevel">第二关</div>
							<div onClick="SelectModal(3)" class="SmallLevel">第三关</div>
							<div onClick="SelectModal(4)" class="SmallLevel">第四关</div>
							<div onClick="SelectModal(5)" class="SmallLevel">第五关</div>
							<div onClick="SelectModal(6)" class="SmallLevel">第六关</div>
							<div onClick="SelectModal(7)" class="SmallLevel">第七关</div>
							<div onClick="SelectModal(8)" class="SmallLevel">第八关</div>
							<div onClick="SelectModal(9)" class="SmallLevel">第九关</div>
							<div onClick="SelectModal(10)" class="SmallLevel">第十关</div>
						</div>
						<div id="dBigLvl2" style="display:none">
							<div class="BigLevel"><span style="cursor:pointer" onClick="SetNone($('dBigLvl2'));SetBlock($('dBigLvl1'))" title="点击进入到第一大关"><<</span>&nbsp;&nbsp;&nbsp;第二大关&nbsp;&nbsp;&nbsp;</div>
							<div onClick="SelectModal(11)" class="SmallLevel">第一关</div>
							<div onClick="SelectModal(12)" class="SmallLevel">第二关</div>
						</div>
					</div>
					<div id="dMiniSmallContainer" class="TitleSmallContainer" style="display:none">
						<div class="BigLevel">小游戏模式</div>
						<div onClick="SelectModal('StrongLevel')" class="SmallLevel" style="width:100%">超乎寻常的压力！</div>
						<div onClick="SelectModal('TestUHeart')" class="SmallLevel" style="width:100%">你的心脏够强劲吗？</div>
						<div onClick="SelectModal('ZombieRun')" class="SmallLevel" style="width:100%">僵尸快跑！</div>
						<div onClick="SelectModal('PovertyOfTheSoil')" class="SmallLevel" style="width:100%">贫瘠之地</div>
						<div onClick="SelectModal('MassGrave')" class="SmallLevel" style="width:100%">乱葬岗</div>
					</div>
				</div>
				<div class="OptionsMenuButton" style="margin-top:20px" onMouseDown="OptionsMenuDown(this,$('sLevelMenu'))" onMouseUp="OptionsMenuUP(this,$('sLevelMenu'));HiddenLevel();HiddenMiniGame()"><span id="sLevelMenu" class="OptionsMenuButtonSpan">返&nbsp;&nbsp;&nbsp;&nbsp;回</span></div>
			</div>
		</div>
	</div>
</div>

<!--主界面EDAll-->
<div class="WindowFrame" id="dAll" style="position:absolute;left:0;top:0;width:900px;background-color:#000">
	<!--背景图片-->
	<div style="position:absolute;width:1400px;height:600px;display:none;z-index:0" id="tGround"></div>
	<!--左边卡片列-->
	<div id="dCardList" style="visibility:hidden;position:absolute;left:500px;top:0;width:100px;overflow:visible;z-index:254"></div>
	<!--出场僵尸显示-->
	<div id="dZombie" style="position:absolute;width:335px;height:600px;left:1065px;top:0;z-index:1"></div>
	<!--选择卡片-->
	<div id="dSelectCard" align=center style="display:none;position:absolute;left:600px;top:0;width:465px;height:600px;z-index:1;background: url('images/interface/SeedChooser_Background.png') no-repeat">
		<div style="text-align:center;line-height:35px;font-size: 12pt;color:#FC6;height:35px;width:100%;top:0;font-family:新宋体;font-weight: bold">选择你的植物</div>
		<div id="dPCard" style="position:relative;width:96%;height:455px;"></div>
		<div style="width:100%;height:40px;line-height:40px;text-align:center;margin-top:10px">
			<input onClick="ResetSelectCard()" type="button" value="重选" name="btnReset" id="btnReset" style="width: 65; height: 35; border-left: 3px solid #85411C; border-right: 3px solid #4E250C; border-top: 3px solid #85411C; border-bottom: 3px solid #4E250C; background-color: #602D11; color:#FC6; font-weight:bold; font-size:14px;cursor:pointer">
			<input onClick="LetsGO()" type="button" value="GO!" disabled="disabled" name="btnOK" id="btnOK" style="width: 65; height: 35; border-left: 3px solid #85411C; border-right: 3px solid #4E250C; border-top: 3px solid #85411C; border-bottom: 3px solid #4E250C; background-color: #602D11; color:#888; font-weight:bold; font-size:14px;cursor:pointer">
		</div>
	</div>
	<!--阳光和铲子-->
	<div id="dTop" style="position:absolute;left:605px;top:561px;height:35px;width:123px;display:none;z-index:1;">
		<div id="dSunNum" style="background:url('images/interface/SunBack.png') no-repeat;position:absolute;width:123px;height:35px"><span id="sSunNum" style="text-align:center;position:absolute;top:4px;left:43px;width:68px;font-family:Verdana;font-weight:bold;font-size:18pt"></span></div>
		<div id="tdShovel" style="position:absolute;width:71px;height:35px;left:130px;background: url('images/interface/ShovelBack.png') no-repeat;visibility:hidden"><img id="imgShovel" src="images/interface/Shovel.png" onMouseDown="ChoseShovel(event)"></div>
	</div>
</div>

<!--菜单-->
<div id="dMenu" style="display:none;position:absolute;cursor:pointer;width:226px;height:41px;left:677px;z-index:254">
	<div id="dMenu0" class="Menu" onClick="PauseGame(this)">暂 停</div>
	<div id="dMenu1" class="Menu" onClick="ClickMenu()">菜 单</div>
</div>

<!--图鉴-->
<div id="dHandBook" style="display:none;position:absolute;z-index:255" class="WindowFrame">
<table border="0" width="800" cellspacing="0" cellpadding="0" background="images/interface/Almanac_IndexBack.jpg" height="600">
	<tr>
		<td height="88" align="center" style="font-size: 32px; font-weight: bold; font-family: 黑体;" colspan="3">	图鉴——索引</td>
	</tr>
	<tr>
		<td align="center" width="400" height="473">
		<img border="0" src="images/Plants/SunFlower/SunFlower.gif" width="73" height="74"><br>
		<br>
		<br>
		<br>
		<input type="button" value="查看植物" name="btnViewPlant" id="btnViewPlant" style="cursor:pointer;width: 113; height: 41; border-left: 3px solid #85411C; border-right: 3px solid #4E250C; border-top: 3px solid #85411C; border-bottom: 3px solid #4E250C; background-color: #8F431B; color:#FFCC66; font-weight:bold; font-size:14pt; font-family:幼圆" onClick="ViewProducePlant()"><br>
		<br>
&nbsp;</td>
		<td align="center" width="400" height="473" colspan="2">
		<img border="0" src="images/Zombies/Zombie/Zombie.gif" width="149" height="130"><br>
&nbsp;<table border="0" width="113" background="images/interface/Button.png" height="41" cellspacing="0" cellpadding="0">
			<tr>
				<td style="cursor:pointer;font-weight:bold; font-size:14pt; font-family:幼圆; color:#00F500" align="center" onClick="ViewProduceZombie()">查看僵尸</td>
			</tr>
		</table>
		<p><br>
		<br>
&nbsp;</td>
	</tr>
	<tr>
		<td align="center" width="400">
		　</td>
		<td align="center" width="238">
		　</td>
		<td align="center" width="162">
		<table border="0" width="89" cellspacing="0" cellpadding="0" height="26">
			<tr>
				<td background="images/interface/Almanac_CloseButton.png" style="cursor:pointer" onMouseOver="this.style.backgroundImage='url(images/interface/Almanac_CloseButtonHighlight.png)'" onMouseOut="this.style.backgroundImage='url(images/interface/Almanac_CloseButton.png)'" onClick="SetNone($('dHandBook'))" align="center">
				<font color="#000080" style="font-size: 9pt;">关闭</font></td>
			</tr>
		</table>
		</td>
	</tr>
</table>
</div>

<!--获得新植物-->
<div id="dNewPlant" style="display:none;position:absolute;width:800px;height:600px;background:url(images/interface/AwardScreen_Back.jpg) no-repeat">
	<div id="dNewPlantTitle" style="position:absolute;left:50%;text-align:center;margin-left:-250px;color: #FC6; font-size: 20px;height:90px;line-height:90px; font-weight: bold; width:500px">你获得了一棵新的植物！</div>
	<div style="position:absolute;top:100px;width:800px;height:191px;line-height:191px;text-align:center">
		<img id="iNewPlantCard" border="0">
	</div>
	<br>
	<div id="dNewPlantName" style="position:absolute;position:absolute;top:291px;text-align:center;left:50%;margin-left:-150px;width:300px;height:55px;font-family: 宋体; font-size: 20px; color: #FC6; font-weight: bold;line-height:55px">abc</div>
	<br><br><br>
	<div id="dNewPlantTooltip" style="position:absolute;left:50%;top:400px;text-align:center;margin-left:-140px;width:280px;font-weight: bold;font-family: 宋体; font-size: 12px;color:#232323">abc</div>
	<br><br><br><br><br><br>
	<input type="button" value="下一关！" name="btnNextLevel" id="btnNextLevel" style="position:absolute;cursor:pointer;width: 113; height: 41; border-left: 3px solid #85411C; border-right: 3px solid #4E250C; border-top: 3px solid #85411C; border-bottom: 3px solid #4E250C; background-color: #8F431B; color:#FC6; font-weight:bold; font-size:14px; font-family:幼圆; left:344; top:507">
</div>

<!--开发进度显示-->
<div id="dProcess">
	<div id="dProcess2"><span id="sFailed" style="line-height:30px;font-size:16px;color:#FF0;font-weight:bold">4444.li<br>4444.li</span></div>
	<br>
	<input type="button" value="关闭" onClick="SetNone($('dProcess'))" style="cursor:pointer;width: 113px; height: 30px; border-left: 3px solid #85411C; border-right: 3px solid #4E250C; border-top: 3px solid #85411C; border-bottom: 3px solid #4E250C; background-color: #8F431B; color:#FC6; font-weight:bold; font-size:14px; font-family:幼圆">
</div>

<script type="text/javascript">
//初始化系统对象，载入关卡
LoadLvl();

</script>

</body>
</html>
```

## 源码下载

获取源码，公众号回复【植物大战僵尸】，见公 ~

![在这里插入图片描述](https://img-blog.csdnimg.cn/a9a010f9dfa14601b5375523f54019b9.png)


不会还有人没 **点赞 + 关注 + 收藏** 吧!

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

