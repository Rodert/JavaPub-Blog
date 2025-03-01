---
## 这是侧边栏索引
index: 1
## 这是页面的图标
icon: page
## 这是文章的标题
title: 超级马里奥【附源码】
## 设置作者
author: Wang Shiyu
## 设置写作时间
date: 2022-04-27
## 一个页面可以有多个分类
category:
  - 小游戏
  - 精品项目实战
## 一个页面可以有多个标签
tag:
  - 小游戏
  - 超级马里奥
  - web前端期末大作业
## 此页面会出现在首页的文章板块中
star: true
---

超级马里奥【附源码】,java精品项目，毕业设计，计算机系，计算机毕业设计，程序设计，设计与实现，源码，

<!-- more -->

超级马里奥【附源码】


我的网站已经上线了 <http://javapub.net.cn/>

`文末源码、免费获取`
`文末源码、免费获取`
`文末源码、免费获取`



> 点赞再看，养成习惯

适合人群：初级学习者和爱好者，下面有展示图。计算机毕业设计

@[toc]

## 1 前言

🚀获取源码，文末公众号回复【超级马里奥】，即可。
⭐欢迎点赞留言

## 2 正文

> **公众号：JavaPub**

### 2.1 展示预览

13MB GIF可以欣赏：
https://tva2.sinaimg.cn/large/007F3CC8ly1h1opj6dis6g30t80lrqv5.gif



<img src="https://tva1.sinaimg.cn/large/007F3CC8ly1h1opj6dis6g30t80lrqv5.gif" alt="动画" width="1052" data-width="1052" data-height="783">


---


![动画](https://tvax4.sinaimg.cn/large/007F3CC8ly1h1opj6dis6g30t80lrqv5.gif)



### 2.2 项目结构


![image](https://tva4.sinaimg.cn/large/007F3CC8ly1h1onrktn8lj30hc05jwhd.jpg)



### 2.2 主要代码展示

```bash

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Backbone Game Engine</title>
    <meta name="description" content="Elementary HTML5 Canvas Game Engine based on Backbone. Specialized for 2D platformers, and optimized for mobile.">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <link href="apple_touch_icon.png" rel="apple-touch-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    
    <script src="docs/jquery.min.js" type="text/javascript"></script>
    <script src="docs/bootstrap.min.js" type="text/javascript"></script>
    <link href="docs/bootstrap.min.css" rel="stylesheet" type="text/css" charset="utf-8">

    <link href="docs/docs.css" rel="stylesheet" type="text/css" charset="utf-8">
  </head>

  <body data-spy="scroll" data-target="#sidebar" data-offset="100">
    <header class="navbar navbar-inverse" role="banner">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle pull-left" data-toggle="collapse" data-target="#navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="index.html" title="Elementary HTML5 Canvas Game Engine based on Backbone."><img src="apple_touch_icon.png" /> Backbone Game Engine</a>
      </div>
      <div id="navbar-collapse" class="collapse navbar-collapse" role="navigation">
        <ul class="nav navbar-nav">
          <li><a href="index.html">Documentation</a></li>
          <li><a href="examples.html">Examples</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="github-icon"><a href="https://github.com/martindrapeau/backbone-game-engine" title="Fork me on Github"><img src="docs/github.png" />Github</a></li>
        </ul>
      </div>
    </header>

    <div class="container">
    <div class="row">

    <div class="col-md-9">
      <div id="introduction" class="row">
        <div class="col-md-12">
          <h1>HTML5 Canvas &amp; Backbone</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <p>
            An elementary HTML5 Canvas game engine built on Backbone. Specialized for 2D platformers, and optimized for mobile.
          </p>
          <h4>Examples</h4>
          <ul>
            <li>Real game: <a href="http://www.ludosquest.com" target="_blank">Ludo's Quest</a> - <a href="https://itunes.apple.com/ca/app/ludos-quest/id1047863228" target="_blank">launched on iOS</a> using <a href="https://www.cocoon.io" target="_blank">Cocoon.io</a></li>
            <li>Test game: <a href="http://www.mariocraft.club" target="_blank">Mariocraft</a></li>
            <li>Advanced: <a href="super-mario-bros/index.html" target="_blank">Super Mario Bros, level 1-1</a></li>
            <li>Elementary: <a href="ball/index.html" target="_blank">Bouncing ball</a></li>
            <li>Basic: <a href="mario/index.html" target="_blank">Mario in an empty world</a></li>
            <li>Basic: <a href="gui/index.html" target="_blank">GUI</a></li>
            <li>Basic: <a href="frog/index.html" target="_blank">Hoppy frog</a></li>
          </ul>
          <p>
            These examples are on <a href="https://github.com/martindrapeau/backbone-game-engine">Github</a>.
          </p>
        </div>
        <div class="col-md-3 col-xs-6">
          <p>
            <div class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                  <a class="item active" href="super-mario-bros/index.html" target="_blank">
                    <img src="docs/super-mario-bros-level-1-1.png" alt="" class="img-responsive" alt="Super Mario Bros level 1-1" title="Super Mario Bros level 1-1" />
                    <span class="carousel-caption">Click to play</span>
                  </a>
              </div>
            </div>
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <h4>CocoonJS Example</h4>
          <p>
            Backbone Game Engine was written to run inside of CocoonJS Canvas+, so you can turn your HTML5 game into a native application on iOS or Android. If you have the CocoonJS launcher loaded on your iOS or Android device, you can load Super Mario Bros level 1-1 via this URL:
          </p>
<pre>
http://martindrapeau.github.io/cocoon-mario/cocoon-mario.zip
</pre>
        </div>
      </div>

      <div id="features" class="row">
        <div class="col-md-12">
          <h3>Features:</h3>
          <ul>
            <li><strong>Built on Backbone</strong>. Events, models, collections, inheritance and RESTful persistence. Why reinvent the wheel?</li>
            <li><strong>HTML5 canvas only</strong>. No jQuery, as little DOM manipulations as possible.</li>
            <li><strong>Mobile optimized</strong>. Build to run on mobile devices with transparent touch and viewport support. Everything is optimized for maxium frames per seconds (FPS).</li>
            <li><strong>Go Native with CocoonJS.</strong>. Built to run in Ludei's <a href="http://support.ludei.com/hc/en-us/articles/200767118-Canvas-development-Guide" target="_blank">CocoonJS canvas+</a>. Deploy native on iOS and Android.</li>
            <li><strong>2D platformer</strong>. Built with side-scrollers in mind. Built-in classes for sprites, sprite sheets, characters, hero, quad-tree collision detection, world and editor.</li>
            <li><strong>No compilation</strong>. You don't need to install node, grunt or whatever else. Just code and press F5 to run.</li>
            <li><strong>No server required</strong>. Fork this repo and your Github site is up and going. Create your own game and point your friends to it. Rebase to pull in latest engine updates.</li>
            <li><strong>Built for mobile</strong>. Conceived to run on tablets. Share your URL with Mom so she can add it to the home screen of her iPad.</li>
            <li><strong>Take if offline</strong>. With HTML5 Application Cache, your game runs offline. Perfect for taking it on the road or on a fishing trip.</li>
            <li><strong>Save state</strong>. With HTML5 Local Storage, save where you are.</li>
            <li><strong>World editor</strong>. Conceived for tile-based games, comes with a world editor. Place your tiles and characters, then hit play to try it out. Hit save to save your world.</li>
          </ul>
        </div>
      </div>

      <div id="dependencies" class="row">
        <div class="col-md-12">
          <h3>Dependencies</h3>
          <ul>
            <li><a href="http://underscorejs.org/" target="_blank">Underscore</a> </li>
            <li><a href="http://backbonejs.org/" target="_blank">Backbone</a> </li>
            <li><a href="https://github.com/inkling/backbone.native/" target="_blank">backbone.native</a>. To drop jQuery.</li>
            <li><a href="https://github.com/asaarinen/qtree/" target="_blank">simple-quadtree</a></li>
          </ul>
          <p>
            All included in the <code>3rd</code> folder.  That and nothing else.
          </p>

          <h3>Why Backbone?</h3>
          <p>
            Backbone implements <a href="http://backbonejs.org/#Events" target="_blank">events</a>, <a href="http://backbonejs.org/#Model" target="_blank">models</a>, <a href="http://backbonejs.org/#Collection" target="_blank">collections</a>, <a href="http://backbonejs.org/#Model-extend" target="_blank">inheritance</a> and <a href="http://backbonejs.org/#Sync" target="_blank">persistence</a>. Models implement getters and setters for object attributes. Models and Collections have an <code>extend</code> function to easily do inheritance. They implement methods for persistence (RESTful JSON by default). They can also trigger events and bind to them. Everything you need to build a great extensible game engine. Plus, Backbone is now widely used and provides these features in a standard fashion with a huge community to support them. I hope this project can make game programming accessible to developers already familiar with Backbone.
          </p>

          <h3>Using and Contributing</h3>
          <p>
            Backbone Game Engine was built to get you going fast. <a href="https://github.com/martindrapeau/backbone-game-engine">Fork this repository</a>, and your own Github page will be ready in minutes. You can then create your own games by simply creating a new directory, and putting files in it.
          </p>
          <p>
            The default branch is <code>gh-pages</code> so that any changes get published automatically to the Github page. Changes typically take only a few seconds to get published. This allows you to develop, test, document and deploy rapidly. It is a double-edge sword though. Any untested code you push to your fork on that branch will be felt by your users. It is therefore a good practice to create and work on another branch, and fast-forward merge to the <code>gh-pages</code> branch when done.
          </p>
          <p>
            To report a bug, use <a href="https://github.com/martindrapeau/backbone-game-engine/issues" target="_blank">Github issues</a>. To contribute improvements, bug fixes or new examples, make changes to your fork and do a pull request. For anyone looking to help, here is a short to-do list:
          </p>
          <ul>
            <li>Implement vertical panning in Backbone.Camera.</li>
            <li>Revamp collision detection: optimize lookup and better functions.</li>
            <li>Implement sound.</li>
            <li>Add missing behaviors in Super Mario: character death, break brick, etc.</li>
          </ul>
          <br/>
        </div>
      </div>

      <!-- Documentation -->
      <div id="getting-started" class="row">
        <div class="col-md-12">
          <h1>Getting Started</h1>
        </div>
      </div>

      <div id="documentation-Backbone" class="row">
        <div class="col-md-12">
          <h3>Backbone</h3>
          <p>
            The engine is based on Backbone so it is essential to understand its core structure: a <a href="http://backbonejs.org/#Model" target="_blank">Backbone.Model</a>. A model has hash of <code>attributes</code> that are changed via getter and setter methods <code>get</code> and <code>set</code>. These attributes should only contain state information as it is those attributes which get saved and restored. A model is a Javascript object. Hence behaviour can be stored as properties and methods directly on the object. For example a sprite sheet points to an image. Attribute <code>img</code> contains the <code>Image</code> object or DOM selector (by id) for retrieving the Image object. Property <code>img</code> contains reference to the Image object. It is automatically set when the sprite sheet model is initialized.
            <pre>
var spriteSheet = new Backbone.SpriteSheet({
  id: "mario",
  img: "#mario",
  tileWidth: 32,
  tileHeight: 64,
  tileColumns: 21,
  tileRows: 6
});
spriteSheet.get("img"); // attribute
// #mario

spriteSheet.img; // property
// &lt;img id=​"mario" src=​"../​super-mario-bros/​super-mario-2x.png" style=​"display:​none;​"&gt;

spriteSheet.img.width
//672

spriteSheet.img.height
//384
</pre>
          </p>
          <p>
            In fact, a model stores its attributes in the object property <code>attributes</code>. Methods <code>get</code>, <code>set</code> and <code>toJSON</code> operate on that property. Just remember that state date like sprite coordinates, velocity, etc go in there. However references to other objects do not.
          </p>
          <div class="alert alert-info">
            Note on nomenclature: The word <strong>attribute</strong> is used to define state data (get and set stored in obejct property attributes) while the word <strong>property</strong> is used to define behavioural data stored directly on the object.
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <h3 id="documentation-no-jQuery">Living without jQuery</h3>
          <p>
            Backbone Game Engine does not use jQuery. Instead, it depends on <a href="https://github.com/inkling/backbone.native/" target="_blank">backbone.native</a> which re-creates the ubiquitous <code>$</code> function/object with only essentials required by Backbone. As such, you are limited to simple DOM selectors enabled by <a href="https://developer.mozilla.org/en/docs/Web/API/Document.querySelectorAll" target="_blank">querySelectorAll</a> and events. Since the framework is for canvas-based games, avoid HTML manipulations. Canvas-based only allows for easier wrapping with CocoonJS. Consult the documentation of backbone.native to understand limitations.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <h3 id="documentation-Structure">Directory structure</h3>
          <p>
            To create a new example (or game), create an empty directory at the same level as <code>super-mario-bros</code>. Then, add some files. Here is the recommended file structure:
          </p>
          <pre>
3rd/
src/
...
super-mario-bros/
my-game/
        index.html
        main.js
</pre>
          <p>
            <code>index.html</code> is the HTML document which loads your assets, and defines your canvas. File <code>main.js</code> is where you instantiate the game engine and sprites. It must get loaded last.
          </p>

          <h3 id="documentation-HTML">index.html</h3>
          <p>
            The HTML document (usually named <code>index.html</code> in its own folder) declares the assets to be loaded and the <code>canvas</code> element. Javascript assets are declared in the <code>HEAD</code> element. Images are loaded via <code>IMG</code> elements. They must be hidden with inline CSS. Everything is bootstrap-loaded as declared in the HTML file. There is no asynchronous loading.
          </p>
          <p>
            Here is an example HTML file taken from the example <a href="mario/index.html" target="_blank">Mario</a>.
          </p>
          <pre>
&lt;!doctype html&gt;
&lt;html style="touch-action: none;"&gt;
    &lt;head&gt;
        &lt;title&gt;Mario - Backbone Game Engine&lt;/title&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
        &lt;link href="../favicon.ico" rel="shortcut icon" type="image/x-icon" /&gt;
        &lt;link href="../apple_touch_icon.png" rel="apple-touch-icon" /&gt;

        &lt;meta name="viewport" content="width=960, user-scalable=no"/&gt;
        &lt;meta name="apple-mobile-web-app-capable" content="yes" /&gt;
        &lt;meta name="mobile-web-app-capable" content="yes" /&gt;
        &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/&gt;

        &lt;script src="../3rd/underscore.js" type="text/javascript"&gt;&lt;/script&gt;
        &lt;script src="../3rd/backbone.native.js" type="text/javascript"&gt;&lt;/script&gt;
        &lt;script src="../3rd/backbone.js" type="text/javascript"&gt;&lt;/script&gt;

        &lt;script src="../src/shapes.js" type="text/javascript"&gt;&lt;/script&gt;
        &lt;script src="../src/core.js" type="text/javascript"&gt;&lt;/script&gt;
        &lt;script src="../src/input.js" type="text/javascript"&gt;&lt;/script&gt;
        &lt;script src="../src/hero.js" type="text/javascript"&gt;&lt;/script&gt;
        &lt;script src="../src/world.js" type="text/javascript"&gt;&lt;/script&gt;

        &lt;script src="main.js" type="text/javascript"&gt;&lt;/script&gt;

        &lt;style&gt;
            body {
                margin: 0;
                background-color: #000;
            }
            canvas {
                position: fixed;
                top: 0;
                left: 0;
            }
        &lt;/style&gt;

    &lt;/head&gt;

    &lt;body&gt;
        &lt;img id="mario" src="../super-mario-bros/super-mario-2x.png" style="display:none;" /&gt;
        &lt;canvas id="foreground" width="960" height="700"&gt;
            Your browser does not support canvas element.
        &lt;/canvas&gt;
    &lt;/body&gt;

&lt;/html&gt;
</pre>
          <p>
            Some important notes:
          </p>
          <ul>
            <li>HTML meta tags <code>viewport</code>, <code>apple-mobile-web-app-capable</code>, <code>mobile-web-app-capable</code> and <code>apple-mobile-web-app-status-bar-style</code> ensure the canvas is properly sized and styled on iPads and other mobile devices. The width specified there should be the same as the canvas elements. On <a href="#mobile-devices">mobile devices</a>, an orientation change will recalculate and change the width to fit the canvas in the viewport. </li>
            <li>Style <code>touch-action: none;</code> on the <code>HTML</code> tag disables touch behaviors, like pan and zoom for IE10.</li>
            <li>Elements must all have ids since we use the native <code>getElementById</code> Javascript function to retrieve the <code>Canvas</code> and <code>Image</code> objects from their respective DOM elements.</li>
          </ul>

          <h3 id="documentation-main">main.js</h3>
          <p>
            File <code>main.js</code> is where you declare and initialize your objects. It is recommended that you wrap that code in a function which gets executed once the document and all assets are loaded (i.e. window.onload event). You can use for example <code>$(window).on("load", function() {});</code>. 
          </p>
          <p>
            Other files use a simple anonymous function instead since they contain class declarations mainly. However in <code>main.js</code> is where <code>Canvas</code> and <code>Image</code> objects are retrieved from the DOM elements. So they must first be loaded. This keeps things simple. Assets are as a consequence always loaded synchronously.
          </p>
          <p>
            Here is a sample <code>main.js</code> file, taken from the <a href="mario/index.html" target="_blank">Mario</a> example.
          </p>
          <pre>
$(window).on("load", function() {

  // Mario alone in an empty world. Control him with the touchpad.

  Backbone.Mario = Backbone.Hero.extend({
    defaults: _.extend({}, Backbone.Hero.prototype.defaults, {
      name: "mario",
      spriteSheet: "mario"
    })
  });

  var canvas = document.getElementById("foreground");

  var spriteSheets = new Backbone.SpriteSheetCollection([{
    id: "mario",
    img: "#mario",
    tileWidth: 32,
    tileHeight: 64,
    tileColumns: 21,
    tileRows: 6
  }]).attachToSpriteClasses();

  var debugPanel = new Backbone.DebugPanel();

  var input = new Backbone.Input({
    drawTouchpad: true,
    drawPause: true
  });

  var mario = new Backbone.Mario({
    x: 400, y: 400, floor: 500
  }, {
    input: input
  });

  var world = new Backbone.World({
    width: 30, height: 18,
    tileWidth: 32, tileHeight: 32,
    backgroundColor: "rgba(66, 66, 255, 1)",
    viewportBottom: 156
  });
  world.add(mario);

  var engine = new Backbone.Engine({}, {
    canvas: canvas,
    debugPanel: this.debugPanel,
    input: input
  });
  engine.add([
    world,
    input,
    debugPanel
  ]);

  // Expose things as globals - easier to debug
  _.extend(window, {
    canvas: canvas,
    engine: engine
  });

  // Ensure the canvas is always visible and centered
  adjustViewport(canvas, canvas.width, canvas.height);

});
</pre>
        </div>
      </div>

      <div id="documentation" class="row">
        <div class="col-md-12">
          <h1>Reference</h1>
          <p>
            Backbone Game Engine defines classes in the <code>Backbone</code> namespace. Most are sub-classed from <code>Backbone.Model</code> or <code>Backbone.Collection</code>.
          </p>
        </div>
      </div>

      <div id="documentation-Engine" class="row">
        <div class="col-md-12">
          <h3>Backbone.Engine</h3>
          <pre>new Backbone.Engine([attributes], [options])</pre>
          <p>
            <code>Backbone.Engine</code> is a Backbone model that holds a <a href="http://backbonejs.org/#Collection" target="_blank">Backbone collection</a> of sprite models.
            It uses HTML5's <a href="https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame" target="_blank">requestAnimationFrame</a> to provide a 60 frames per second game loop.
          </p>
          <p>
            The sprite collection is stored in property <code>sprites</code>. You may directly access it however for convenience, methods <code>add</code>, <code>remove</code> and <code>reset</code> exist as proxy the engine.
          </p>
          <h4>Attributes</h4>
          <ul>
            <li><code>clearOnDraw</code>: Optional. Boolean to ask for a clear of the canvas before redraw. Defaults to false. Note that this is an expensive call. Better to only clear the area that changed.</li>
            <li><code>tapDetectionDelay</code>: Optional. The delay in ms before a tap gestured is detected. Defaults to 50ms</li>
            <li><code>tapMoveTolerance</code>: Optional. The amount of pixel move tolerated to detect a tap gesture. Defaults to +/-5 pixels. Beyond that, a drag gesture will be trigerred.</li>
          </ul>
          <h4>Options</h4>
          <p>
            Upon instantiation, these options can be passed. They will be stored as properties on the <code>Backbone.Engine</code> model instance.
          </p>
          <ul>
            <li><code>canvas</code>: The canvas to draw upon. Drawing is on its 2d context.</li>
            <li><code>input</code>: Optional. The user control input instance. If passed and the pause button is enabled, will stop/start then engine when pressed.</li>
            <li><code>debugPanel</code>: Optional. A <a href="#documentation-DebugPanel">Backbone.DebugPanel</a> instance. If passed <code>fps</code> and <code>cycleTime</code> are output.</li>
          </ul>
          <h4>Methods</h4>
          <ul>
            <li><code>add()</code>: Adds one or multiple models delegating to the sprite collection's <code>add</code> method.</li>
            <li><code>remove()</code>: Removes one or multiple models delegating to the sprite collection's <code>remove</code> method.</li>
            <li><code>reset()</code>: Clears or sets the sprites collection delegating to the <code>reset</code> method.</li>
            <li><code>isRunning()</code>: Returns true if the engine is running, or false if not.</li>
            <li><code>start(), stop()</code>: Starts or stops the engine.</li>
            <li><code>toggle()</code>: Toggle start/stop the engine.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>tap</code>: Trigerred when the user clicks or taps on the canvas. A tap is defined when the user presses/clicks on a position without moving for more than <code>tapDetectionDelay</code> ms. The event callback function is passed the DOM event object, with these extra properties attached: <code>canvas</code>, <code>canvasX</code> and <code>canvasY</code>. In addition, property <code>canvasHandled</code> is provided as a mechanism to stop propagation (see below). </li>
            <li><code>key</code>: Trigerred when the user types in a key. The event callback function is passed the DOM event object, with additional property <code>canvas</code>.</li>
            <li><code>dragstart</code>, <code>dragmove</code> and <code>dragend</code>: Trigerred when a drag gesture occurs. This happens when the user presses/clicks and holds and moves. When these events are trigerred, the <code>tap</code> event does not get trigerred.</li>
          </ul>
          <div class="alert alert-info">
            Note: The <code>tap</code> and <code>drag*</code> events are broadcasted to whomever is listening. Event property <code>canvasHandled</code> is used to to prevent propagation to many overlapping objects. At first it is set to <code>false</code>. The first object to intercept and handle the event should set it to <code>true</code>. Subsequent objects intercepting the event should look at this property and return without action when <code>true</code>. <code>Backbone.Button</code> and <code>Backbone.WorldEditor</code> implement this behavior.
          </div>
          <h4>How it works</h4>
          <p>During every animation frame, the engine performs these things:</p>
          <ul>
            <li>Loop through models (in order), and calls their <code>update</code> method. Passing <code>dt</code>, the time in milliseconds since the last call to update. The update method must return <code>true</code> to ask for a redraw, or <code>false</code> not to.</li>
            <li>Loop through all models that requested a redraw, and call their <code>draw</code> method passing <code>context</code>, the canvas 2d context. Perform whatever magic you like in the draw method.</li>
            <li>Call itself again upon the next animation frame.</li>
          </ul>
          <div class="alert alert-info">Note: By default the engine does not clear the canvas before redraw. You can set the <code>clearOnDraw</code> option to do so however it is an expensive call. Better to do it only when required. See class <a href="#documentation-World">Backbone.World</a> for an example.</div>
          <p>
            The <code>update</code> method is used to update the model position, animation, detect collisions, or whatever you like. If it requests a redraw, the engine will then call its <code>draw</code> method. The engine ensures that models are updated and drawn in the order they are sorted in the collection. You can define the sort order by defining a <a href="http://backbonejs.org/#Collection-comparator" target="_blank">comparator</a>.
          </p>
          <p>
            Models added to the collection receive an <code>attach</code> event and have property <code>engine</code> set as backreference. When removed, they receive a <code>detach</code> event.
          </p>
          <p>
            To measure performance, two properties are set: <code>fps</code> and <code>cycleTime</code>. If you passed option <code>debugPanel</code>, they will be drawn on screen.
          </p>
          <p>
            The engine can be started and stopped. When running, will perform an update/draw sequence 60 times per second. Use methods <code>start</code>, <code>stop</code> or <code>toggle</code>. Use method <code>isRunning</code> to determine if the engine is running. If you passed option <code>input</code>, the engine will bind to the <em>pause</em> button (or the <em>p</em> key) to toggle start/stop.
          </p>
          <h4>Usage</h4>
          <pre>
  var canvas = document.getElementById("foreground");

  var debugPanel = new Backbone.DebugPanel();

  var ball = new Backbone.Ball({
    x: 100, y: 100, color: "blue"
  });

  var engine = new Backbone.Engine({
    clearOnDraw: true
  }, {
    canvas: canvas,
    debugPanel: debugPanel
  });
  engine.add([
    ball,
    debugPanel
  ]);
</pre>
          <p>
            Taken from the <a href="ball/index.html" target="_blank">Bouncing Ball</a> example. Draws two models: the debug panel and a bouncing ball.
          </p>
        </div>
      </div>

      <div id="documentation-SpriteSheet" class="row">
        <div class="col-md-12">
          <h3>Backbone.SpriteSheet</h3>
          <pre>new Backbone.SpriteSheet([attributes], [options]);</pre>
          <p>
            <code>Backbone.SpriteSheet</code> is a Backbone model which breaks an image into frames used for animation.
          </p>
          <h4>Attributes</h4>
          <ul>
            <li><code>img</code>: The <code>Image</code> object or element id selector of the image to find in the DOM (i.e. <code>#icons</code>). A pointer to the Image object is then stored in property <code>img</code>.</li>
            <li><code>imgUrl</code>: Optional. The url to the image to load dynamically. If specified, and the image element does not exist, will try to load the image.</li>
            <li><code>tileWidth, tileHeight</code>: Size of tiles in pixels.</li>
            <li><code>tileColumns, tileRows</code>: Number of tiles in the image.</li>
          </ul>
          <h4>Properties</h4>
          <ul>
            <li><code>frames</code>: Array of animation frames. Automatically set when model is instantiated.</li>
            <li><code>img</code>: Pointer to <code>Image</code> object. Automatically set when model is instantiated.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>spawnImg</code>: Trigerred when the image is fully loaded.</li>
            <li><code>destroyImg</code>: Trigerred when the image is unloaded.</li>
          </ul>
          <p>
            When a sprite sheet is instantiated, an array of frames is built and stored in property <code>frames</code>. A frame object contains the coordinates of the frame. It consists of <code>{x, y, width, height}</code> representing the pixel position and size of the frame. These will be passed to the <a href="https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D#drawImage()" target="_blank">HTML5 canvas drawImage</a> function as arguments <code>sx, sy, sw, sh</code> by the <code>draw</code> method.
          </p>
          <p>
            Sprite sheets are not generally created on their own, but rather in a <code>Backbone.SpriteSheetCollection</code>. See below for usage.
          </p>
        </div>
      </div>

      <div id="documentation-SpriteSheetCollection" class="row">
        <div class="col-md-12">
          <h3>Backbone.SpriteSheetCollection</h3>
          <pre>new Backbone.SpriteSheetCollection([models], [options]);</pre>
          <p>
            <code>Backbone.SpriteSheetCollection</code> is a Backbone collection of <code>Backbone.SpriteSheet</code> models.
          </p>
          <h4>Methods</h4>
          <ul>
            <li><code>attachToSpriteClasses()</code>: Attaches sprite sheets to sprite class prototypes. Does so by finding all defined sprite classes (<code>Backbone.*</code>) with default attribute <code>spriteSheet</code> matching a sprite sheet id in the collection. Then sets their <code>spriteSheet</code> property to point to the correct sprite sheet in the collection.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>allSpawnImg</code>: Trigerred when all images are fully loaded.</li>
          </ul>
          <h4>Usage</h4>
          <p>
            Define your sprite sheets by creating a collection as such:
          </p>
          <pre>
this.spriteSheets = new Backbone.SpriteSheetCollection([{
  id: "mario",
  img: "#mario",
  tileWidth: 32,
  tileHeight: 64,
  tileColumns: 21,
  tileRows: 2
}, {
  id: "tiles",
  img: "#tiles",
  tileWidth: 32,
  tileHeight: 32,
  tileColumns: 29,
  tileRows: 28
}]).attachToSpriteClasses();
</pre>
          <p>
            <img src="docs/super-mario-sprite.png" class="img-responsive" alt="Backbone.Input" />
          </p>
          <p>
            Here two sprite sheets are created <code>mario</code> and <code>tiles</code>. Their graphics are in <code>Image</code> objects found in the DOM. The attribute <code>img</code> is the selector to retrieve them.
          </p>
          <p>
            Calling method <code>attachToSpriteClasses</code> will attach the sprite sheets to each sprite class found in the <code>Backbone</code> namespace.
          </p>
        </div>
      </div>

      <div id="documentation-Sprite" class="row">
        <div class="col-md-12">
          <h3>Backbone.Sprite</h3>
          <pre>new Backbone.Sprite([attributes], [options]);</pre>
          <p>
            <code>Backbone.Sprite</code> is a <a href="http://backbonejs.org/#Model" target="_blank">Backbone Model</a> which implements the required <code>update</code> and <code>draw</code> methods to animate a sprite, frame by frame.
          </p>
          <h4>Attributes</h4>
          <ul>
            <li><code>x, y</code>: The coordinates in pixels.</li>
            <li><code>width, height</code>: Size of the sprite in pixels.</li>
            <li><code>paddingLeft, paddingRight, paddingTop, paddingBottom</code>: Optional. Internal padding to account for empty space inside the tile of a sprite. Useful to specify empty zones for collision detection.</li>
            <li><code>sequenceIndex</code>: The current animation sequence frame. Automatically set.</li>
            <li><code>state</code>: The current animation.</li>
            <li><code>spriteSheet</code>: Sprite sheet id. </li>
            <li><code>collision</code>: Optional. For use with <a href="#documentation-World">Backbone.World</a>.</li>
            <li><code>static</code>: Optional. For use with <a href="#documentation-World">Backbone.World</a>.</li>
            <li><code>visible</code>: Optional boolean. If true, the sprite is not drawn. Default is false.</li>
            <li><code>zIndex</code>: Optional. Specifies the drawing order. Higher value is drawn above sprites with lower values. Default is 0.</li>
          </ul>
          <div class="alert alert-info">
            Note: <code>zIndex</code> is only used in <code>Backbone.World</code>. Currently, it is partially implemented - only 0 and 1 values are recognized.
          </div>
          <h4>Properties</h4>
          <ul>
            <li><code>animations</code>: Hash of animations of the sprite. Described further below.</li>
            <li><code>spriteSheet</code>: Instance of the <code>Backbone.SpriteSheet</code> holding the images to animate. This is automatically set when you define your sprite sheet collection. See <a href="#documentation-SpriteSheetCollection">Backbone.SpriteSheetCollection</a> for details.</li>
            <li><code>saveAttributes</code>: Attributes serialized for persistence. Defaults to <code>["name", "state", "sequenceIndex", "x", "y"]</code>.</li>
          </ul>
          <h4>Methods</h4>
          <ul>
            <li><code>toSave()</code>: Serializes attributes for persistence. Attributes to be serialized are specified in the <code>saveAttributes</code> property.</li>
            <li><code>update(dt)</code>: Called by then engine 60 times a second. Updates sprite attribues and implements behavior. Returns true to ask for a redraw, or false for none.</li>
            <li><code>onUpdate(dt)</code>: Not defined by default. If you define it, it is called at the end of <code>update</code>. Useful for extending the behavior of a sprite without having to overload metod <code>update</code>. Note that <code>draw</code> is called based on the Boolean return value of this method to decide whether to draw or not. It must therefore return <code>true</code> to perform a draw, or <code>false</code> not to.</li>
            <li><code>draw(context, options)</code>: Called by the engine after <code>update</code>, if a redraw was asked. Takes care of rendering the sprite, and its proper animation at the correct position. Argument <code>options</code> can be used by a model serving as proxy. For example it is passed when drawn by a <code>Backbone.World</code>instance. It will contain <code>offsetX</code> and <code>offsetY</code> to transform <code>x</code> and <code>y</code> from world coordinates to canvas coordinates.</li>
            <li><code>onDraw(context, options)</code>: Not defined by default. If defined, it is called at the end of <code>draw</code>. Useful for extending the rendering of a sprite without having to overload metod <code>draw</code>.</li>
            <li><code>getAnimation([state])</code>: Returns the current animation based on argument <code>state</code>. If argument <code>state</code> is omitted, the attribute is used instead.</li>
            <li><code>overlaps(x, y):</code>: Checks to see if the sprite overlaps with the passed coordinates. Returns a Boolean.</li>
            <li><code>getLeft(withPadding), getRight(withPadding), getTop(withPadding), getBotttom(withPadding)</code>: Returns the left, right, top or bottom-most position of a sprite. Argument withPadding is a boolean specifying whether to include the padding or not. Defaults to false.</li>
            <li><code>bbox(withPadding)</code>: Returns the bounding box of the sprite as an object <code>{x1, y1, x2, y2}</code>. Argument <code>withPadding</code> is a boolean specifying whether to include the padding or not. Defaults to false.</li>
            <li><code>getCenterX(withPadding)</code>: Returns the center <code>x</code> of the sprite. Argument <code>withPadding</code> is a boolean specifying whether to include the padding or not. Defaults to false.</li>
            <li><code>getCenterX(withPadding)</code>: Returns the center <code>y</code> of the sprite. Argument <code>withPadding</code> is a boolean specifying whether to include the padding or not. Defaults to false.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>attach</code>: Triggered when the sprite is attached to the engine.</li>
            <li><code>detach</code>: Triggered when the sprite is detached to the engine.</li>
          </ul>
          <p>
            The <code>attach</code> and <code>detach</code> events can be used to start/stop listening to events. For example, the <code>Backbone.Hero</code> sprite starts listening to user input when attached, and stops when detached.
          </p>
          <h4>Sprite and sprite sheets</h4>
          <p>
            Graphics are obtained from a <a href="#documentation-SpriteSheet">Backbone.SpriteSheet</a> model. In attribute <code>spriteSheet</code>, specify the sprite sheet id you previously defined in a <code>Backbone.SpriteSheetCollection</code> instance. The collection will automatically attach it to the sprite by setting property <code>spriteSheet</code> as back reference. Building on the example above:
          </p>
          <pre>
var spriteSheets = new Backbone.SpriteSheetCollection([{
  id: "mario",
  img: "#mario",
  tileWidth: 32,
  tileHeight: 64,
  tileColumns: 21,
  tileRows: 2
}]).attachToSpriteClasses();

var mario = new Backbone.Mario({
  spriteSheet: "mario"
});

mario.get("spriteSheet");
// mario

spriteSheets.get("mario");
// child {cid: "c2", attributes: Object, collection: child, _changing: false, _previousAttributes: Object…}

mario.spriteSheet;
// child {cid: "c2", attributes: Object, collection: child, _changing: false, _previousAttributes: Object…}
</pre>
          <h4>Inheritance</h4>
          <p>
            Instantiating a <code>Backbone.Sprite</code> model is not very useful by itself. You must first extend the <code>Backbone.Sprite</code> class to provide your own animations and a pointer to the sprite sheet. For example this defines a sprite with 3 animations <code>idle</code>, <code>walk-left</code> and <code>walk-right</code>. It points to the sprite sheet id <code>mario</code>.
          </p>
          <pre>
Backbone.MySprite = Backbone.Sprite.extend({
  defaults: _.extend(_.deepClone(Backbone.Sprite.prototype.defaults), {
    x: 400,
    y: 400,
    spriteSheet: "mario",
    state: "idle",
    sequenceIndex: 0,
    static: false,
    collision: true
  }),
  animations: {
    idle: {
      sequences: [0]
    },
    "walk-right": {
      sequences: [1, 2, 3, 2],
      delay: 200
    },
    "walk-left": {
      sequences: [1, 2, 3, 2],
      scaleX: -1,
      delay: 200
    }
  }
});
</pre>

          <p>
            Above, the <code>Backbone.Sprite</code> was sub-classed using <code>extend</code> method. <code>defaults</code> are the default attributes to give any new <code>Backbone.MySprite</code> instance. They extend the Sprite class' defaults.
          </p>
          <p>
            If you want to reuse parts of <code>defaults</code> or <code>animations</code> from a parent class, make sure to make a copy. You can use the helper function <code>_.deepClone</code> for that purpose (<code>_.clone</code> only goes one level deep). Otherwise you may change the parent class behavior. For example the <code>Backbone.PennieUg</code> class reuses the <code>Backbone.Pennie</code> class' properties <code>defaults</code> and <code>animations</code> by first creating copies.
          </p>
          <pre>

  Backbone.PennieUg = Backbone.Pennie.extend({
    defaults: _.extend(_.deepClone(Backbone.Pennie.prototype.defaults), {
      name: "pennie-ug"
    }),
    animations: _.deepClone(Backbone.Pennie.prototype.animations)
  });
  Backbone.PennieUg.prototype.animations.idle.sequences = [168, 168, 169, 170, 169, 168];
</pre>
          <div class="alert alert-info">
            Helper function <code>deepClone</code> was created as a mixin of <code>underscore</code>. When it makes sense, make general functions available that way. Look at the end of <code>src/core.js</code> for all mixins.
          </div>
          <h4>Animations</h4>
          <p>
            Sprite property <code>animations</code> contains a hash of animations. Each animation contains a sequence of frames and a delay between frames for animation. For example:
          </p>
          <pre>
animations: {
  idle: {
    sequences: [0, 1],
    delay: 200
  }
}
</pre>
          <p>
            This defines an animation of two frames, alternating at an interval of 200ms. Values 0 and 1 in array <code>sequences</code> are frame indices defined in the sprite sheet. Sprite attributes <code>state</code> and <code>sequenceIndex</code> control which animation and sequence are currently used. The <code>sequenceIndex</code> is automatically incremented (and reset to 0) by the sprite's draw function. Attribute <code>state</code> determines the current animation. It must be set to <code>idle</code> in the above example (as there is only one).
          </p>
          <p>
            Extra animation options are available. Here is a complete list:
          </p>
          <ul>
            <li><code>sequences</code>: Array of frame indices, or squence objects. A sequence object looks like this: <code>{frame: 52, x: 0, y: -32, scaleX: 1.00, scaleY: 1}</code>. It allows you to specify an offset to apply when the sprite is drawn, and a scaling factor.</li>
            <li><code>scaleX, scaleY</code>: Optional. Scaling factors. Set <code>scaleX</code> to -1 to flip horizontally. Defaults to 1 if omitted.</li>
            <li><code>delay</code>: Optional. The time to change to the next sequence. No need to specify if there is only one frame (as there is no animation). You can also define a sprite method <code>sequenceDelay</code> to programmatically return the delay. It will be passed the current animation.</li>
          </ul>
          <p>
            For detailed examples of animations, look at file <code>artifacts.js</code> in the <code>super-mario-bros</code> folder. Class <code>Backbone.Pennie</code> implements a basic animation sequence using frame indices, while <code>Backbone.FlyingPennie</code> implements a more complex animation with sequence objects.
          </p>
          <pre>
Backbone.Pennie = Backbone.AnimatedTile.extend({
  ...
  animations: {
    idle: {
      sequences: [52, 52, 53, 54, 53, 52],
      delay: 50
    }
  },
  ...

Backbone.FlyingPennie = Backbone.Sprite.extend({
  ...
  animations: {
    anim: {
      sequences: [
        {frame: 52, x: 0, y: -32, scaleX: 1.00, scaleY: 1},
        {frame: 52, x: 0, y: -64, scaleX: 0.50, scaleY: 1},
        {frame: 53, x: 0, y: -90, scaleX: 0.50, scaleY: 1},
        {frame: 53, x: 0, y: -128, scaleX: 1.00, scaleY: 1},
        {frame: 53, x: 0, y: -128, scaleX: 0.50, scaleY: 1},
        {frame: 52, x: 0, y: -112, scaleX: 0.50, scaleY: 1},
        {frame: 52, x: 0, y: -90, scaleX: 1.00, scaleY: 1},
        {frame: 52, x: 0, y: -80, scaleX: 0.50, scaleY: 1},
        {frame: 53, x: 0, y: -80, scaleX: 0.50, scaleY: 1}
      ],
      delay: 50
    }
  },
  ...

</pre>
        </div>
      </div>

      <div id="documentation-Input" class="row">
        <div class="col-md-12">
          <h3>Backbone.Input</h3>
          <pre>new Backbone.Input([attributes], [options]);</pre>
          <p>
            <code>Backbone.Input</code> class is a model which captures user input events and stores them as model attributes. For example pressing the left arrow, sets the <code>left</code> attribute to <code>true</code>. Depressing sets it to <code>false</code>. Bind to on the attribute change event to be notified.
          </p>
          <p>
            <code>Backbone.Input</code> supports keyboard, mouse and touch events. It can draw a touchpad on screen with left and right arrow keys, an A (red) button and a B (blue) button.
          </p>
          <p>
            <img src="docs/input.png" class="img-responsive" alt="Backbone.Input" />
          </p>
          <div class="alert alert-info">
            Note: The Backbone.Input model only captures input when attached to a Backbone.Engine.
          </div>
          <h4>Attributes</h4>
          <p>This attribute can be passed when creating the model, to configure the input.</p>
          <ul>
            <li><code>drawTouchpad</code>: Optional. Boolean or string "auto" to indicate whether to draw the touchpad. When "auto", the touchpad will be drawn only on touch devies. Defaults to "auto".</li>
          </ul>
          <p>The following model attributes are set by the model. They should not be set externally.</p>
          <ul>
            <li><code>touchEnabled</code>: Boolean set to true if the device is touch enabled.</li>
            <li><code>left</code>: Boolean set to true when the left touchpad arrow or left keyboard arrow key is pressed.</li>
            <li><code>right</code>: Boolean set to true when the right touchpad arrow or right keyboard arrow key is pressed.</li>
            <li><code>buttonA</code>: Boolean set to true when the A touchpad button is pressed, or when the z keyboard key is pressed.</li>
            <li><code>buttonB</code>: Boolean set to true when the B touchpad button is pressed, or when the x keyboard key is pressed.</li>
          </ul>
          <h4>Methods</h4>
          <ul>
            <li><code>hasTouchpad()</code>: Returns true if the touchpad is drawn.</li>
            <li><code>leftPressed()</code>: Returns true if the left button is pressed.</li>
            <li><code>rightPressed()</code>: Returns true if the right button is pressed.</li>
            <li><code>buttonAPressed()</code>: Returns true if button A is pressed.</li>
            <li><code>buttonBPressed()</code>: Returns true if button B is pressed.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>attach</code>: Triggered when the input is attached to the engine. Will start listening to user input.</li>
            <li><code>detach</code>: Triggered when the input is detached to the engine. Will stop listening to user input.</li>
          </ul>
          <p>
            You can add or remove a <code>Backbone.Input</code> model from the engine on the fly. In the Super Mario Bros example, the <code>Backbone.Input</code> and the <code>Backbone.WorldEditor</code> are swapped when moving from play to edit modes.
          </p>
          <h4>Usage</h4>
          <pre>
var input = new Backbone.Input();
var engine = new Backbone.Engine();
engine.add(input);
input.bind("change:left", function(input) {
  if (input.leftPressed())
    console.log("left pressed:)");
  else
    console.log("left depressed:(");
});
</pre>
        </div>
      </div>

      <div id="documentation-World" class="row">
        <div class="col-md-12">
          <h3>Backbone.World</h3>
          <pre>new Backbone.World([attributes], [options])</pre>
          <p>
            <code>Backbone.World</code> is model which contains a collection of sprites that interact with each other. A world is an environment composed of tiles and characters. The world extends beyond the canvas however the viewport, the visible portion, is constrained within its prescribed limits. <code>Backbone.World</code> is similar to a sprite; it implements the <code>update</code> and <code>draw</code> methods required by the <code>Backbone.Engine</code> collection.
          </p>
          <h4>Attributes</h4>
          <ul>
            <li><code>x, y</code>: Origin of top-left corner in pixels.</li>
            <li><code>width, height</code>: Size of world in tiles.</li>
            <li><code>tileWidth, tileHeight</code>: Size of a tile in pixels.</li>
            <li><code>viewportLeft, viewportRight, viewportTop, viewportBottom</code>: Defines an area in the canvas the world is constrained to. Each value provides gutter regions in pixels. Anything drawn by the world will be clipped in the area. Useful for drawing a menu bar or buttons on the same canvas. In provided demos for example, <code>viewportBottom</code> is set to 156 pixels to make room the the touchpad.</li>
            <li><code>sprites</code>: Array of sprite models for persistence.</li>
            <li><code>backgroundColor</code>: Background color of the world.</li>
            <li><code>backgroundImage</code>: Id attribute of an image element in the DOM to show as background.</li>
            <li><code>state</code>: Persisted state either play or pause.</li>
          </ul>
          <div class="alert alert-info">
            Note: Setting a viewport different than the canvas size uses canvas clipping. Avoid using if you can as clipping the is expensive and can introduce performance issues.
          </div>
          <h4>Options</h4>
          <ul>
            <li><code>backgroundImage</code>: Optional. Pass to use a background image instead of a background color. Anchored to the origin.</li>
            <li><code>input</code>: Input instance to control the hero.</li>
            <li><code>camera</code>: Camera instance to keep the hero in the viewport.</li>
            <li><code>debugPanel</code>: Optional.</li>
          </ul>
          <h4>Methods</h4>
          <p>
            A <code>Backbone.World</code> is a model that wraps a collection stored in property <code>sprites</code>. To prevent outside direct access to this collection, it provides these two methods:
          </p>
          <ul>
            <li><code>add(models, [options])</code>: Add one or many models. Adds <code>world</code> to options and delegates to the <code>sprites</code> collection's <code>add</code> method. Then sets the <code>world</code> property as back-reference on the new model(s). Returns the new model(s).</li>
            <li><code>remove(models, [options])</code>: Removes one or many models. Delegates to the <code>sprites</code> collection's <code>remove</code> method. Deletes the <code>world</code> back-reference and returns the model(s).</li>
          </ul>
          <p>
            In addition to standard <code>Backbone.Model</code> methods, it also exposes these:
          </p>
          <ul>
            <li><code>spawnSprites()</code>: Resets the sprites collection by retrieving the <code>sprites</code> attribute from the model. This is called after the world is loaded.</li>
            <li><code>update(dt)</code>: Update function called by the engine. Will in turn call the update method of all sprites.</li>
            <li><code>draw(context)</code>: Draw function called by the engine. Will in turn call the draw method of all sprites.</li>
            <li><code>cloneAtPosition(sprite, x, y)</code>: Clones the sprite model and places the new instance at the specified coordinates. Will pass <code>world</code> to the <code>options</code> payload when created. Will also set property <code>world</code> as back-reference. If the sprite name matches that of the world attribute <code>hero</code> it will also pass option <code>input</code>, and if a <code>Backbone.Camera</code> exists, it will be tied to it. This function also acts as a toggle when placing a sprite over a tile where another exists. The existing one is removed. This ensures only one tile (static sprite) exists at one location.</li>
            <li><code>width(), height()</code>: Return the size of the world in pixels.</li>
            <li><code>getWorldIndex(object)</code>: Calculates the index position of a tile based on coordinates. Argument <code>object</code> must contain <code>x</code> and <code>y</code>, or be a model with those attributes. The index is calculated with formula <code>height * x/tileWidth + y/tileHeight</code>. This method is used to set the <code>id</code> of tile sprites.</li>
            <li><code>getWorldCol(x), getWorldRow(y)</code>: Returns the tile position in columns or rows of a coordinate.</li>
            <li><code>findAt(x, y, [type], [exclude], [collision])</code>: Finds the first sprite at the specified coordinate. Use for collision detection. Optional arguments allow you to filter what to look for. Set <code>type</code> to <code>character</code> to find moving sprites, or <code>tile</code> to find tiles. Set <code>exclude</code> to the id of the sprite you want to exclude from the search. In a collision detection scheme, this is usually the id of the sprite you are checking against. Set <code>collision</code> to true to find only tiles that have their <code>collision</code> flag set.</li>
            <li><code>filterAt(x, y, [type], [exclude], [collision])</code>: Same as <code>findAt</code> but returns the list of all matching sprites instead of the first.</li>
            <li><code>findCollidingAt(x, y)</code>: Finds a colliding tile. Just like calling <code>findAt(x, y, "tile", null, true)</code>.</li>
            <li><code>findCollisions()</code>: Finds collisions for a given set of collision map.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>attach</code>: Triggered when the sprite is attached to the engine. Will trigger the <code>attach</code> method of all sprites in the world.</li>
            <li><code>detach</code>: Triggered when the sprite is detached to the engine. Will trigger the <code>detach</code> event of all sprites in the world.</li>
            <li><code>tap</code>:
              Trigerred when the user taps or clicks on the canvas. The callback will be passed the DOM event extended with these properties: <code>canvas</code>, <code>canvasX</code>, <code>canvasY</code>, <code>world</code>, <code>worldX</code> and <code>worldY</code>.
            </li>
            <li><code>key</code>: Trigerred on a keyup event. The event callback will be passed the DOM event as argument.</li>
          </ul>
          <h4>How it works</h4>
          <p>
            Sprites can be added and removed via methods <code>add</code> and <code>remove</code>. Sprites are automatically attached to the <a href="#documentation-Engine" target="_blank">Backbone.Engine</a> the world is attached to. Sprites then have properties <code>engine</code> and <code>world</code> set as back-reference. In each request frame, the same mechanics apply as for sprites attached directly to an engine; methods <code>update</code> and <code>draw</code> are called for each sprite. The exception is for static sprites which are only updated/redrawn when required (see below).
          </p>
          <p>
            Internally, the world keeps sprites into a collection stored in property <code>sprites</code>. It further splits sprites into 2 collections for faster lookup:
          </p>
          <ul>
            <li><code>staticSprites</code>: Background sprites that have no animation. These are usually same-sized tiles. Sprites that have their <code>static</code> attribute set to <code>true</code> will be put in this collection. Sprites are given an <code>id</code> determined by their position (column and row). The collection is ordered and indexed on <code>id</code> allowing for fast lookup on a pair of x/y coordinates. In addition, these sprites are drawn on a background canvas only drawn when required (i.e. world is panned).</li>
            <li><code>dynamicSprites</code>: Animated tiles and characters. Their <code>static</code> attribute must be set to <code>false</code> to fall in this collection. These sprites are given unique <code>id</code> attributes based on their name (i.e. <code>mario.1</code>). They are not indexed therefore lookup has an order of N. Keep the number of sprites here to a minimum.</li>
          </ul>
          <p>
            A world is measured in tiles via attributes <code>width</code>, <code>height</code>, <code>tileWidth</code> and <code>tileHeight</code>. Call methods <code>width</code> and <code>height</code> to get the size in pixels. Attributes <code>x</code> and <code>y</code> determine the origin in pixels (top-left corner) and allow the world to be panned consequently changing the viewport.
          </p>
          <div class="alert alert-info">
            Note: If you define an animated tile, make sure its <code>static</code> attribute is set to false to prevent redraws every animation frame. Also ensure the width of tile sprites match that of world attributes <code>tileWidth</code> and <code>tileHeight</code>.
          </div>
          <h4>Sprites</h4>
          <p>
            When the world is created, sprites are instantiated in method <code>spawnSprites</code>. Each sprite instance is attached to the engine. Sprites then have properties <code>engine</code> and <code>world</code> set pointing to those respective objects.
          </p>
          <p>
            Sprites can be categorized with attribute <code>type</code> as to identify one another when they interact with each other. Sprites of type <code>tile</code> are usually static and obstacles. Sprites of type <code>character</code> are usually dynamic and moving sprites.
          </p>
          <p>
            You can add sprites with method <code>add</code> which delegates to the <code>sprites</code> collection's <code>add</code> method. It takes care of passing the <code>world</code> as option.
          </p>
          <p>
            You can also use method <code>cloneAtPosition(sprite, x, y)</code>. It takes as argument an existing sprite, and coordinates. It will clone the sprite and place it at the specified coordinates passing <code>world</code> and <code>input</code> as options. If the sprite has its <code>hero</code> attribute set to <code>ture</code>, and if a <code>Backbone.Camera</code> exists, it will be tied to it. Backbone.WorldEditor</code> uses this function for instance.
          </p>
          <p>
            Methods <code>getWorldIndex</code>, <code>getWorldCol</code> and <code>getWorldRow</code> can be used to find the position of a sprite. A sprite's <code>x</code> and <code>y</code> attributes determine their position relative to the world origin.
          </p>
          <h4>Background and Tiles</h4>
          <p>
            The background of a world is composed of same-size tiles defined by attributes <code>tileWidth</code> and <code>tileHeight</code>. A tile is usually a non-animated sprite with its <code>static</code> attribute set to true. The model <code>id</code> is the position of the sprite on screen (column and row). As such, there can only be one tile per location.
          </p>
          <h4>Character Sprites</h4>
          <p>
            Characters are sprites that interact with their environment. <a href="#documentation-Character">Backbone.Character</a> and <a href="#documentation-Hero">Backbone.Hero</a> are character sprites. Character sprite models usually have teir <code>type</code> attribute set to <code>character</code>. You are free to use attribute <code>type</code> to classify your sprites.
          </p>
          <h4>Collision detection</h4>
          <p>Internally sprite positions are stored in a <a href="https://github.com/asaarinen/qtree" target="_blank">QuadTree</a>. As a sprite moves, its position in the QuadTree is updated.
          </p>
          <p>Three methods exist to detect collisions.</p>
          <ul>
            <li><code>findAt(x, y, [type], [exclude], [collision])</code>:
              Find the first sprite touching the given point or <code>null</code> if none are found. Optional arguments can be passed for limiting the lookup:
              <ul>
                <li><code>type</code>: Optional. If set, will only lookup sprites matching that type. Typical values are <code>character</code> or <code>tile</code>.</li>
                <li><code>exlcude</code>: Optional. The sprite model's <code>id</code> to exclude in lookup.</li>
                <li><code>collision</code>: Optional. Boolean indicating whether to only include sprites that have the <code>collision</code> attribute explicitly set to <code>true</code>.
              </ul>
            </li>
            <li><code>filterAt(x, y, [type], [exclude], [collision])</code>: Same as a above but finds all sprites touching the given point. Returns an array of sprites.</li>
            <li><code>findCollisions(map, [type], [exclude], [collision])</code>:
              Detects collisions on sprites for a set of named coordinates.
              Optional arguments are the same as above. Argument <code>map</code> is an array of objects that is passed in, and passed out. A map object must contain:
              <ul>
                <li><code>x</code> and <code>y</code>: Coordinates to detect the collision.</li>
                <li><code>dir</code>: The lookout direction: <code>top</code>, <code>right</code>, <code>bottom</code> or <code>left</code>.</li>
                <li><code>sprites</code>: Array of detected colliding sprites. Reset/initialized to [] every call.</li>
                <li><code>sprite</code>: The closest sprite based on the lookout direction.</li>
              </ul>
            </li>
          </ul>
          <p>
            Look at the code in <code>Backbone.Character</code> and <code>Backbone.Hero</code> classes for examples on how to perform collision detection.
          </p>
          <h4>Persistence</h4>
          <p>
            The world model attributes contain all that is necessary to persist the state of the world to disk, or in the cloud. Calling the <code>save</code> method first serializes the sprite collection from the <code>sprites</code> property into the <code>sprites</code> attribute. It calls the <code>toSave</code> method on each sprite to save their position and state. It then delegates to the backbone model's <code>save</code> method to save to a server or local storage in JSON format. See the Backbone documentation for details.
          </p>
          <p>
            The world can be restored by calling <code>spawnSprites</code> passing as argument a saved world in JSON format. For example, file <code>super-mario-world/level-1-1.js</code> contains the level in JSON format. It is set in global variable <code>_world</code>. The world can be restarted anytime with this line of code:
          </p>
          <pre>world.set(window._world).spawnSprites();</pre>
          <h4>Usage</h4>
          <pre>
  var mario = new Backbone.Mario({
    x: 400, y: 400, floor: 500
  });

  var world = new Backbone.World({
    width: 30, height: 18,
    tileWidth: 32, tileHeight: 32,
    backgroundColor: "rgba(66, 66, 255, 1)"
  });
  world.add(mario);

  var engine = new Backbone.Engine();
  engine.add(world);
</pre>
        <p>
          A sprite (mario) is first created and added it the world. The world is then added to the engine. This is taken from file <code>mario/main.js</code> for the Mario example.
        </p>
        </div>
      </div>

      <div id="documentation-WorldEditor" class="row">
        <div class="col-md-12">
          <h3>Backbone.WorldEditor</h3>
          <pre>new Backbone.WorldEditor([attributes], [options])</pre>
          <p>
            <code>Backbone.WorldEditor</code> is a model which displays a palette of sprites and allows the user to edit a <code>Backbone.World</code> instance by placing and removing sprites. Also allows the user to pan the world. In the Super Mario Bros demo, an editor is drawn at the bottom of the world replacing the <a href="#documentation-Input">Backbone.Input</a>. Like sprites and world, it must be added to the <code>Backbone.Engine</code> to render. The palette will page automatically if there are too many sprites.
          </p>
          <p>
            <img src="docs/world-editor.png" class="img-responsive" alt="Backbone.Input" />
          </p>
          <h4>Attributes</h4>
          <ul>
            <li><code>x, y</code>: Top-left placement position in pixels of the editor on the canvas.</li>
            <li><code>width, height</code>: Size of editor in pixels.</li>
            <li><code>tileWidth, tileHeight</code>: Size of sprites drawn in the palette.</li>
            <li><code>padding</code>: Padding in pixels around sprites.</li>
            <li><code>backgroundColor</code>: Background color of the editor.</li>
            <li><code>selectColor</code>: Background and outline color of a selected sprite.</li>
            <li><code>selected</code>: The name of the cuurrently selected sprite.</li>
            <li><code>spriteNames</code>: Ordered array of sprite names in the palette.</li>
          </ul>
          <h4>Options</h4>
          <ul>
            <li><code>world</code>: The Backbone.World to edit.</li>
            <li><code>debugPanel</code>: Optional. If passed will output mouse coordinates.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>attach</code>: Triggered when the sprite is attached to the engine. Will start listening to user input.</li>
            <li><code>detach</code>: Triggered when the sprite is detached to the engine. Will stop listening to user input.</li>
          </ul>
          <h4>How it works</h4>
          <p>
            The palette is drawn as a series of tiles left to right, top to bottom. Each tile is a sprite. The sprite may be bigger than the specified tile size, in which case it will be resized to fit the <code>tileWidth</code> and <code>tileHeight</code> attributes.
          </p>
        </div>
      </div>

      <div id="documentation-Character" class="row">
        <div class="col-md-12">
          <h3>Backbone.Character</h3>
          <pre>new Backbone.Character([attributes], [options])</pre>
          <p>
            The <code>Backbone.Character</code> is a sub-classed <code>Backbone.Sprite</code> which implements an animated character with elementary AI (artificial intelligence) and physics. AI is limited to moving left, right, jumping/gravity and dying. Direction changes occur with collisions against an obstacle; either a tile or another character. You are free to extend the AI by subclassing it.
          </p>
          <div class="alert alert-info">
            A <code>Backbone.Character</code> must live inside a <code>Backbone.World</code>.
          </div>
          <h4>Attributes</h4>
          <ul>
            <li><code>x, y</code>: Position of the sprite.</li>
            <li><code>floor</code>: Set this value to prevent the character to fall outisde of the world due to gravity. By default it is null meaning the character will be removed from the world if it falls below the bottom of the world.</li>
            <li><code>ceiling</code>: Analogous to <ocde>floor</ocde> but for exiting the world from above.</li>
            <li><code>width, height</code>: Size of the sprite in pixels. Defaults to  32 x 32.</li>
            <li><code>paddingLeft, paddingRight, paddingTop, paddingBottom</code>: Optional. Internal padding to account for empty space inside the tile of a sprite. Useful to specify empty zones for collision detection.</li>
            <li><code>sequenceIndex</code>: The current animation sequence frame. Automatically set.</li>
            <li><code>name</code>: Name of the sprite.</li>
            <li><code>type</code>: Type of sprite. Defaults to character.</li>
            <li><code>spriteSheet</code>: Id of sprite sheet.</li>
            <li><code>state</code>: Current animation. Starts with <code>idle-right</code>.</li>
            <li><code>collision</code>: Boolean indicating whether it can be detected by other sprites. Defaults to true.</li>
            <li><code>static</code>: Set to false for the World to draw every animation frame.</li>
            <li><code>visible</code>: Set to true for the sprite to be drawn.</li>
            <li><code>zIndex</code>: Optional. Specifies the drawing order. Higher value is drawn above sprites with lower values. Default is 0.</li>
            <li><code>velocity, acceleration</code>: Current horizontal movement. Controlled by the AI in <code>update</code>.</li>
            <li><code>yVelocity, yAcceleration</code>: Current vertical movement. Controlled by the AI in <cpde>update</cpde>.</li>
            <li><code>health</code>: Amount of health the character has. When <code>health</code> is 0, the is "knocked-out" and dies. Defaults to 1.</li>
            <li><code>attackDamage</code>: This is the amount of damage the character does to an opponent. Will reduce their health by this value. Defaults to 1.</li>
            <li><code>aiDelay</code>: Time in ms between AI calls.</li>
          </ul>
          <h4>Methods</h4>
          <p>
            <code>Backbone.Character</code> inherits all methods from <code>Backbone.Sprite</code>. Here are additional methods, and ones with a different signature.
          </p>
          <ul>
            <li><code>getStateInfo([state])</code>: Decomposes <code>state</code> into move and direction components. For example <code>walk-left</code> would be decomposed into <code>{mov:"walk", mov2: null, dir:"left", opo:"right"}</code>. If argument <code>state</code> is omitted, the <code>state</code> attribute is used instead. See <a href="#documentation-Hero">Backbone.Hero</a> for a more detailed description.</li>
            <li><code>buildState(mov, [mov2], [dir])</code>: Helper to construct and return a dash-separated state string. Ignores falsy values. For instance <code>buildState("walk", "left")</code> and <code>buildState("walk", null, "left")</code> both return <code>walk-left</code>.</li>
            <li><code>update(dt)</code>: Handles the character movements and collision detection. Also calls the <code>ai</code> function.</li>
            <li><code>ai(dt)</code>: Implements the AI. Is called at an interval defined by attribute <code>aiDelay</code>.</li>
            <li><code>updateSequenceIndex(dt)</code>: Returns the new <code>sequenceIndex</code> (animation frame). Called by <code>update</code>.</li>
            <li><code>toggleDirection(dirIntent)</code>: Invokes a <code>left</code> or <code>right</code> direction change.</li>
            <li><code>startNewAnimation(state, attrs, done)</code>: Changes the state of the character starting a new animation. Pass hash <code>attrs</code> to set attributes at the same time. Callback <code>done</code> is called once the animation is complete. Useful for performing only one animation sequence.</li>
            <li><code>hit(sprite, [dir], [dir2])</code>: Function invoked usually by a <code>hit</code> event. Implement this to determine what happens when another <code>sprite</code> hits the character. Argument <code>dir</code> is the primary direction of the hit (<code>left</code>, <code>right</code>, <code>top</code> or <code>bottom</code>). Argument <code>dir2</code> is the secondary direction. In top-left for example, it would be left. <code>dir2</code> can also be <code>attack</code> in which case <code>health</code> is reduced by <code>attackDamage</code> amount.</li>
            <li><code>hurt(sprite, [dir], [dir2])</code>: Function invoked when the character gets attacked and has remaining health. The character bounces back.</li>
            <li><code>knockout(sprite, [dir], [dir2])</code>: Function invoked when the sprite gets knocked out of the world. The sprite is litterally knocked out updside down. This function is called when <code>health</code> is 0.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>attach</code>: Triggered when the sprite is attached to the world. Turns on the AI.</li>
            <li><code>detach</code>: Triggered when the sprite is detached to the world. Turns off the AI meaning the character will not move.</li>
            <li><code>hit</code>: Trigger this event on the <code>Backbone.Character</code> to indicate a hit with another character. Delegates to the <code>hit</code> method above. For example, <code>Backbone.Hero</code> executes this when he lands on a character: <code>sprite.trigger("hit", this, "top", "left");</code>.</li>
            <li><code>change:health</code>: Whenever the character health decreases method <code>hurt</code> gets called. If <code>health</code> reaches 0, method <code>knockout</code> gets called instead.</li>
          </ul>
          <h4>How it works</h4>
          <p>
            During an animation frame, it is important to understand the method and event sequence. First, the <code>update</code> method is called. It may then call the <code>ai</code> method if the <code>aiDelay</code> internal is reached. Afterwhich collision detection is performed. At that point, the character may trigger <code>hit</code> events on other characters. Those may in turn trigger a <code>hit</code> event on the character. The character position and velocities are updated, and finally, the character model is set. The <code>update</code> method then returns <code>true</code> to tell the engine to draw the sprite, or <code>false</code> to prevent a redraw.
          </p>
          <div class="alert alert-info">
            These events are synchroneous, and will occur before the <code>update</code> method is completely executed.
            Therefore methods <code>ai</code>, <code>hit</code>, <code>hurt</code> and <code>knockout</code> may set the character model and abort the update. To abort the update, those methods set property <code>cancelUpdate</code> to <code>true</code>.
          </div>
          <h4>Example</h4>
          <p>
            In the Super Mario Bros example, look at file <code>enemies.js</code>. There are implementations for basic characters in that game. The <code>hit</code> method implements collision detection outcome, notably when Mario lands on a character. In the case of a Mushroom, it gets <em>squished</em>. When a turtle shell is sliding, it would cause a knockout.
          </p>
          <pre>
...
hit: function(sprite, dir, dir2) {
  if (this._handlingSpriteHit) return this;
  this._handlingSpriteHit = sprite;

  var cur = this.getStateInfo(),
      opo = dir == "left" ? "right" : (dir == "right" ? "left" : (dir == "top" ? "bottom" : "top"));

  if (sprite.get("hero")) {
    if (dir == "top")
      this.squish.apply(this, arguments);
  } else if (sprite.get("state").indexOf("slide") != -1 ||
            sprite.get("type") == "tile" && dir == "bottom" && sprite.get("state") == "bounce") {
    this.knockout.apply(this, arguments);
  }
  sprite.trigger("hit", this, opo);

  this._handlingSpriteHit = undefined;
  return this;
}
...
</pre>
        <p>
          The <code>hit</code> method will in turn trigger a hit event on the sprite which caused the collision.
          That sprite may in turn trigger a hit event. To avoid the possibility of inifite callback loops, private property <code>_handleSpriteHit</code> is used.
        </p>
        </div>
      </div>

      <div id="documentation-Hero" class="row">
        <div class="col-md-12">
          <h3>Backbone.Hero</h3>
          <pre>new Backbone.Hero([attributes], [options])</pre>
          <p>
            The <code>Backbone.Hero</code> is a sub-classed <code>Backbone.Character</code> which implements a controlable character with input and physics. Its playability is based on that of Mario in the Nintendo classic Super Mario Bros. Currently, only the small Mario is implemented.
          </p>
          <div class="alert alert-info">
            A <code>Backbone.Hero</code> must live inside a <code>Backbone.World</code>.
          </div>
          <h4>Attributes</h4>
          <ul>
            <li><code>x, y</code>: Position of the sprite.</li>
            <li><code>floor</code>: Set this value to prevent the character to fall outisde of the world due to gravity. By default it is null meaning the character will be removed from the world if it falls below the bottom of the world.</li>
            <li><code>ceiling</code>: Analogous to <ocde>floor</ocde> but for exiting the world from above.</li>
            <li><code>width, height</code>: Size of the sprite in pixels. Defaults to  32 x 64.</li>
            <li><code>paddingLeft, paddingRight, paddingTop, paddingBottom</code>: Optional. Internal padding to account for empty space inside the tile of a sprite. Useful to specify empty zones for collision detection. <ocde>paddingTop</ocde> is set to 32 to start as Mario is small.</li>
            <li><code>sequenceIndex</code>: The current animation sequence frame. Automatically set.</li>
            <li><code>name</code>: Name of the sprite. Defaults to hero.</li>
            <li><code>hero</code>: Boolean set to true indicating this character sprite is the hero. Backbone.World will detect this and pass the Backbone.Input instance for taking user input.</li>
            <li><code>type</code>: Type of sprite. Defaults to character.</li>
            <li><code>spriteSheet</code>: Id of sprite sheet.</li>
            <li><code>state</code>: Current animation. Starts with idle-right.</li>
            <li><code>collision</code>: Boolean indicating whether it can be detected by other sprites. Defaults to true.</li>
            <li><code>static</code>: Set to false for the World to draw every animation frame.</li>
            <li><code>visible</code>: Set to true for the sprite to be drawn.</li>
            <li><code>zIndex</code>: Optional. Specifies the drawing order. Higher value is drawn above sprites with lower values. Default is 0.</li>
            <li><code>velocity, acceleration</code>: Current horizontal movement. Do not set.</li>
            <li><code>yVelocity, yAcceleration</code>: Current vertical movement. Do not set.</li>
            <li><code>health</code>: Amount of health as an integer. When set to 0, the character is knocked out and dies. Defaults to 1.</li>
            <li><code>healthMax</code>: The maximum allowed health. Defaults to 2.</li>
            <li><code>dead</code>: Boolean flag indicating if the sprite is dead.</li>
            <li><code>attackDamage</code>: This is the amount of damage the hero does to an opponent. Will reduce their health by this value. Defaults to 1.</li>
            <li><code>ignoreInput</code>: Flag to prevent the hero from accepting user input. Defaults to false.</li>
            <li><code>canAttack</code>: Flag indicating whether the B button will result in an attack. Defaults to false.</li>
            <li><code>canTurnInJump</code>: By default the hero cannot turn in air (jumping or falling). Set this to tru to enable it.</li>
          </ul>
          <h4>Options</h4>
          <ul>
            <li><code>input</code>: Optional. A <code>Backbone.Input</code> instance to allow control of the character with the keyboard (left and right arrows, z and x) or via touch events on the on-screen drawn gamepad.</li>
          </ul>
          <h4>Methods</h4>
          <p>
            <code>Backbone.Hero</code> inherits all methods from <code>Backbone.Sprite</code> and <code>Backbone.Character</code>. In addition, it provides these methods you can override:
          </p>
          <ul>
            <li><code>dirToggled(dirIntent)</code>: Called when the user presses the left or right buttons. Argument <code>dirIntent</code> maye be left or right. The default implementation handles left/right movements.</li>
            <li><code>buttonAToggled</code>: Called when the user presses the A button (rigt-most blue on pad, or x on keyboard). The default implementation handles jumping.</li>
            <li><code>buttonBToggled</code>: Called when the user presses the B button (left-most red on pad, or z on keyboard). The default implementation handles running and attacking (if <code>canAttack</code> is set to true).</li>
          </ul>
          <h4>Events</h4>
          <p>
            <code>Backbone.Hero</code> has the same events as <code>Backbone.Character</code>.
          </p>
          <h4>How it works</h4>
          <p>
            Attribute <code>state</code> determines the current animation. A state is a pair of move and direction. For example <code>idle-right</code>, <code>walk-left</code> and <code>jump-right</code>. Method <code>getStateInfo</code> will decompose the state for you into those components.
          </p>
          <p>
            With attribute <code>nextState</code>, we are able to implement tweens, or in-between animations. For example, holding the right arrow button puts the hero in a <code>walk-right</code> state (and <code>slide-right</code> next state). Releasing the right arrow button transitions to the <code>slide-right</code> state (and <code>idle-right</code> next state) for quick decelration until velocity reaches 0 to fall to the <code>idle-right</code> state. If instead the left arrow button is pressed, we transition to the <code>skid-left</code> state (and <code>walk-left</code> next state) for quicker decelartion until velocity reaches 0 to then accelerate in the opposite direction to fall in the <code>walk-left</code> state (and <code>slide-left</code> next state).
          </p>
          <p>
            Holding an arrow button and the A button (z on keyboard) allows the character to run. Its state becomes <code>run-right</code> (or <code>run-left</code>). Pressing the B button allows the character to jump (<code>jump-left</code> or <code>jump-right</code>). Hold the B button to jump higher. You can control the direction and distance jumped with the arrow buttons. And like in the real game, a jump while running will go higher to cover more distance.
          </p>
          <p>
            Physics are implemented with attributes <code>velocity</code>, <code>acceleration</code>, <code>yVelocity</code> and <code>yAcceleration</code> measured in pixels per seconds. The two first control horizontal translations over time where a positive <code>velocity</code> indicates a move to the right, and negative to the left. The latter two control vertical translations where a positive <code>yVelocity</code> indicates a move downwards, and negative upwards.
          </p>
          <p>
            Each animation have targets of these properties when required. They are omitted otherwise (i.e. <code>walk-right</code> has no <code>yVelocity</code> or <code>yAcceleration</code>). The <code>update</code> method updates the model attributes according to the targets configured on the current animation. When <code>state</code> changes to another animation, so do the targets, and so follow the actual velocities over time to reach their targets. This gives the character momentum.
          </p>
          <p>
            Gravity is implemented with a positive <code>yAcceleration</code>. Unless atop a tile, our character will fall. However it is constrained by the extent of the <code>Backbone.World</code> it is contained in. And will therefore stop falling when the bottom is reached.
          </p>
          <h4>Collisions</h4>
          <p>
            Our character detects collisions either from tiles or other characters to constrain its movements. It does so using collision detection method <code>findCollidings</code> from <code>Backbone.World</code>. Every <code>update</code>, collisions with other sprites are detected on the outline of the sprite:
          </p>
          <p>
            <img class="img-responsive" src="docs/hero-collisions.png" alt="Hero Collisions" />
          </p>
          <p>
            Collisions are only handled when necessary. For instance, when jumping collisions are handled top and right only. The decision is based on looking at <code>velocity</code> and <code>yVelocity</code>. For gravity, a check is performed every time at the bottom of the sprite to land or to fall.
          </p>
          <pre>
var bottomWorld = this.world.height() + tileHeight,
    floor = this.get("floor") || bottomWorld,
    bottomY = Math.min(floor, bottomWorld);

for (i = 0; i < this.collisionMap.bottom.sprites.length; i++) {
  sprite = this.collisionMap.bottom.sprites[i];
  bottomY = Math.min(bottomY, sprite.getTop(true));
  if (sprite.get("type") == "platform") bottomPlatform = sprite;
}

...

if (yVelocity > 0 && heroBottomY >= bottomY) {
  // Stop falling
  land(bottomY);
  for (i = 0; i < this.collisionMap.bottom.sprites.length; i++)
    this.collisionMap.bottom.sprites[i].trigger("hit", this, "top", cur.dir);
  if (this.cancelUpdate) return true;
} else if (cur.mov != "jump" && yVelocity == 0 && heroBottomY < bottomY) {
  // Start falling if no obstacle below
  attrs.nextState = state;
  attrs.state = this.buildState("jump", cur.mov2, cur.dir);
} else if (yVelocity == 0 && heroBottomY == bottomY) {
  // On a floating platform - same vertical velocity
  if (bottomPlatform)
    relativeVelocity = bottomPlatform.get("velocity");
}
</pre>
          <p>
            When an obstacle is hit, the character stops moving. Its <code>x</code> is anchored, and <code>velocity</code> set to 0.
          </p>
          <pre>
if (velocity >= 0) {
  // Stop if obstacle to the right
  var rightX = this.world.width();
  for (i = 0; i < this.collisionMap.right.sprites.length; i++)
    if (heroTopY > 0 )
      rightX = Math.min(rightX, this.collisionMap.right.sprites[i].getLeft(true));

  if (heroRightX >= rightX) {
    attrs.velocity = velocity = 0;
    attrs.x = x = rightX - heroWidth - paddingLeft;
    for (i = 0; i < this.collisionMap.right.sprites.length; i++)
      this.collisionMap.right.sprites[i].trigger("hit", this, "left", cur.mov2);
    if (this.cancelUpdate) return true;
  }
}
</pre>
          <p>
            A collision with other sprites triggers an <code>hit</code> event on that sprite. The event hanlder will receive the colliding sprite (hero), and its relative position where the hit occured (left of the enemie sprite in this case).
          </p>
          <h4>Usage</h4>
          <p>
            This excerpt is taken from the Mario example.
          </p>
          <pre>
  Backbone.Mario = Backbone.Hero.extend({
    defaults: _.extend({}, Backbone.Hero.prototype.defaults, {
      name: "mario",
      spriteSheet: "mario"
    })
  });

  var canvas = document.getElementById("foreground");

  var spriteSheets = new Backbone.SpriteSheetCollection([{
    id: "mario",
    img: "#mario",
    tileWidth: 32,
    tileHeight: 64,
    tileColumns: 21,
    tileRows: 6
  }]).attachToSpriteClasses();

  var input = new Backbone.Input({
    drawTouchpad: true,
    drawPause: true
  });

  var mario = new Backbone.Mario({
    x: 400, y: 400
  }, {
    input: input
  });

  var world = new Backbone.World({
    width: 30, height: 18,
    tileWidth: 32, tileHeight: 32,
    backgroundColor: "rgba(66, 66, 255, 1)"
  });
  world.add(mario);

  var engine = new Backbone.Engine({}, {
    canvas: canvas,
    input: input
  });
  engine.add([
    world,
    input
  ]);
</pre>
        </div>
      </div>

      <div id="documentation-Camera" class="row">
        <div class="col-md-12">
          <h3>Backbone.Camera</h3>
          <pre>new Backbone.Camera([attributes], [options])</pre>
          <p>
            <code>Backbone.Camera</code> is a model which ensures a sprite, the subject, is always in the viewport (the canvas). It pans the <code>Backbone.World</code> when the character steps out of a window in the viewport. <code>Backbone.Camera</code> must be added to the engine (not the world).
          </p>
          <h4>Attributes</h4>
          <ul>
            <li><code>left, right, top, bottom</code>: Coordinates of the window with respect to the drawn canvas.</li>
          </ul>
          <h4>Options</h4>
          <ul>
            <li><code>subject</code>: The sprite to keep in the viewport.</li>
            <li><code>world</code>: The Backbone.World.</li>
          </ul>
          <h4>Methods</h4>
          <ul>
            <li><code>update(dt)</code>: No-op. Simply returns false for no redraw.</li>
            <li><code>draw(context)</code>: No-op.</li>
            <li><code>maybePan()</code>: Called when the <code>x</code> or <code>y</code> position of the subject changes. Ensures the subject is within the specified window, otherwise pans the world.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>attach</code>: Triggered when the sprite is attached to the engine. Starts monitoring the subject and pans the <code>Backbone.World</code> when necessary.</li>
            <li><code>detach</code>: Triggered when the sprite is detached to the engine. Stops monitoring the subject.</li>
          </ul>
          <h4>Usage</h4>
          <pre>
var spriteSheets = new Backbone.SpriteSheetCollection({
  id: "mario",
  img: "#mario",
  tileWidth: 32,
  tileHeight: 64,
  tileColumns: 21,
  tileRows: 6
});
var mario = new Backbone.Mario();
var world = new Backbone.World();
var camera = new Backbone.Camera(
  {left: 200, right: 600, top: 100, bottom: 50},
  {subject: mario, world: world}
);
world.add(mario);
var engine = new Backbone.Engine();
engine.add([world, camera]);
</pre>
        </div>
      </div>

      <div id="documentation-Clock" class="row">
        <div class="col-md-12">
          <h3>Backbone.Clock</h3>
          <p>
            <code>Backbone.Clock</code> is a model which ticks at a set time interval. Attribute <code>ticks</code> stores an integer tick value that gets incremented every interval. Useful for synchronizing sprite animations.
          </p>
          <h4>Attributes</h4>
          <ul>
            <li><code>ticks</code>: Initial tick value. An integer that gets incremented every interval.</li>
            <li><code>delay</code>: Interval between ticks.</li>
          </ul>
          <h4>Methods</h4>
          <ul>
            <li><code>update(dt)</code>: Updates the ticks.</li>
            <li><code>draw(context)</code>: No-op. Simply returns the model.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>attach</code>: Triggered when the sprite is attached to the engine. Starts ticking.</li>
            <li><code>detach</code>: Triggered when the sprite is detached to the engine. Stops ticking.</li>
          </ul>
          <h4>Usage</h4>
          <pre>
var clock = new Backbone.Clock({delay: 2000});
clock.on("change:ticks", function() {
  console.log("tick", clock.get("ticks");
});
</pre>
          <p>
            As an example, look at the Super Mario Bros example, question blocks and pennies are all synced on the same clock. These sprites are sub-classes of <code>Backbone.AnimatedTile</code>. Instances create a Backbone.Clock if one does not exist. Otherwise, they find the existing one by that name and reuse it.
          </p>
          <pre>
Backbone.AnimatedTile = Backbone.Tile.extend({
  initialize: function(attributes, options) {
    Backbone.Tile.prototype.initialize.apply(this, arguments);
    this.on("attach", this.onAttach, this);
    this.on("detach", this.onDetach, this);
  },
  onAttach: function() {
    if (!this.engine) return;
    this.onDetach();

    this.clock = this.engine.findWhere({name: "animatedTileClock"});

    if (!this.clock)
      this.clock = this.engine.add(new Backbone.Clock({name: "animatedTileClock", delay: 200}));

    this.listenTo(this.clock, "change:ticks", this.updateAnimationIndex);
  },
  onDetach: function() {
    if (this.clock) this.stopListening(this.clock);
    this.clock = undefined;
  },
  update: function(dt) {
    return true;
  },
  updateAnimationIndex: function() {
    var animation = this.getAnimation(),
        sequenceIndex = this.get("sequenceIndex") || 0;
    if (!animation) return;
    this.set("sequenceIndex", sequenceIndex < animation.sequences.length-1 ? sequenceIndex + 1 : 0);
  }
});
</pre>
        </div>
      </div>

      <div id="documentation-Element" class="row">
        <div class="col-md-12">
          <h3>Backbone.Element</h3>
          <p>
            <code>Backbone.Element</code> is a model that mimics a rudimentary DOM element.
            Currently, it supports these features:
          </p>
          <ul>
            <li>Fixed position specified by top-left <code>x</code> and <code>y</code>.</li>
            <li>Optional background color and rounded corners.</li>
            <li>Optional image.</li>
            <li>Optional text.</li>
            <li>Can be animated with easing functions. Supported animations are: translation, fade in and fade out.</li>
          </ul>
          <h4>Attributes</h4>
          <ul>
            <li><code>x, y</code>: Top left corner of button.</li>
            <li><code>width, height</code>: Size of button.</li>
            <li><code>backgroundColor</code>: Fill style of the button. Set to <code>transparent</code> to see thru.</li>
            <li><code>borderRadius</code>: Border radius in pixels for rounded corners.</li>
            <li><code>img</code>: The <code>Image</code> object or element id selector of the image to find in the DOM (i.e. <code>#icons</code>). A pointer to the Image object is then stored in property <code>img</code></li>
            <li><code>imgX, imgY, imgWidth, imgHeight</code>: Bounding box of image location in source image.</li>
            <li><code>imgMargin</code>: Offset in pixels to apply when drawing the image inside the button.</li>
            <li><code>text</code>: Text to draw. If empty, not text is drawn.</li>
            <li><code>textPadding, textLineHeight</code>: Padding around the text and line height in pixels.</li>
            <li><code>textContextAttributes</code>: Canvas text styling properties. Will be set on the canvas context before calling <code>fillText</code>. Consult <a href="http://www.html5canvastutorials.com/tutorials/html5-canvas-text-font-size/" target="_blank">HTML5 fillText documentation</a> for details.</li>
            <li><code>easing</code>: Easing function to use as defined in <code>Backbone.EasingFunctions</code> (see below).</li>
            <li><code>easingTime</code>: Duration of the animation in ms. Defaults to 1000ms.</li>
            <li><code>opacity</code>: Opacity of the element. 1 for fully visible, 0 for invisible and in-between for translucent. This value is changed by <code>fadeIn</code> and <code>fadeOut</code> animations.</li>
            <li><code>scale</code>: Zoom-in, zoom-out scale to apply to the element. Default is 1. Can be used to defined your own animation (see Backbone.Button's <code>pressed</code> animation below).</li>
          </ul>
          <h4>Methods</h4>
          <ul>
            <li><code>update(dt)</code>: Draws the element and handles animations.</li>
            <li><code>onUpdate(dt)</code>: Not defined by default. If deinfed, called at the end of <code>update</code>. It must return <code>true</code> or <code>false</code> to determine whether to draw the element or not.</li>
            <li><code>draw(context, options)</code>: Draws the element.</li>
            <li><code>onDraw(context, options)</code>: Not defined by default. If deinfed, called at the end of <code>draw</code>.</li>
            <li><code>drawText(b, context, options)</code>: Called by <code>draw</code> to draw text. Argument <code>b</code> is the JSONized model (<code>this.toJSON()</code>) defining the context. You can call this to draw extra text if you implemented method <code>onDraw</code>.</li>
            <li><code>overlaps(x, y):</code>: Checks to see if the sprite overlaps with the passed coordinates. Returns a Boolean.</li>
            <li><code>moveTo(x, y, callback)</code>: Translation animation. Will move the element from the current position to the specified <code>x</code> and <code>y</code> position using the <code>easing</code> function and <code>easingTime</code> duration.</li>
            <li><code>fadeIn(callback)</code>: Animates a fade in. Starts with an opacity of 0 going up to 1.</li>
            <li><code>fadeOut(callback)</code>: Animates a fade out. Starts with an opacity of 1 going down to 0.</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li><code>attach</code>: Triggered when the sprite is attached to the engine. Starts listening to user input.</li>
            <li><code>detach</code>: Triggered when the sprite is detached to the engine. Stops listening to user input.</li>
          </ul>
          <h4>Animations</h4>
          <p>
            Animations are driven by attributes <code>easing</code> and <code>easingTime</code>. The first defines the easing function to use and the second the duration in ms. These functions are found in <code>Backbone.EasingFunctions</code> and are:
            <ul>
              <li><code>linear</code></li>
              <li><code>easeInQuad</code></li>
              <li><code>easeOutQuad</code></li>
              <li><code>easeInOutQuad</code></li>
              <li><code>easeInCubic</code></li>
              <li><code>easeOutCubic</code></li>
              <li><code>easeInOutCubic</code></li>
              <li><code>easeInQuart</code></li>
              <li><code>easeOutQuart</code></li>
              <li><code>easeInOutQuart</code></li>
              <li><code>easeInQuint</code></li>
              <li><code>easeOutQuint</code></li>
              <li><code>easeInOutQuint</code></li>
            </ul>
            Easing functions return a value between 0 and 1.
          </p>
          <p>
            You can create your own animations pretty easily. Look at the code for examples.
          </p>
          <h4>Usage</h4>
          <pre>
TO DO...
</pre>
        </div>
      </div>

      <div id="documentation-Button" class="row">
        <div class="col-md-12">
          <h3>Backbone.Button</h3>
          <p>
            <code>Backbone.Button</code> is a <code>Backbone.Element</code> which listens to tap/click events and triggers a <code>tap</code> event when pressed. When pressed there is a grow-shrink animation to give the user feedback.
          </p>
          <h4>Usage</h4>
          <pre>
var button = new Backbone.Button({
  x: 4, y: 4, width: 52, height: 52, borderRadius: 5,
  img: "#icons", imgX: 0, imgY: 0, imgWidth: 32, imgHeight: 32, imgMargin: 10
});
button.on("tap", function() {
  console.log("button tapped!");
});
</pre>
        </div>
      </div>

      <div id="documentation-DebugPanel" class="row">
        <div class="col-md-12">
          <h3>Backbone.DebugPanel</h3>
          <p>
            <code>Backbone.DebugPanel</code> is a Backbone model on which you set attributes to be dumped on screen. Upon draw, it will <code>JSON.stringify</code> attributes.
          </p>
          <h4>Events</h4>
          <ul>
            <li><code>update(dt)</code>: No-op. Simply returns true.</li>
            <li><code>draw(context)</code>: Draws the debug information on screen.</li>
            <li><code>attach</code>: Triggered when the sprite is attached to the engine.</li>
            <li><code>detach</code>: Triggered when the sprite is detached to the engine.</li>
          </ul>
          <h4>Usage</h4>
          <pre>
var debugPanel = new Backbone.DebugPanel();
var engine = new Backbone.Engine({}, {
  debugPanel: debugPanel
});
engine.add(debugPanel);

debugPanel.set({hello: "Word"});
// Draws this on screen
// {"fps": 58, "ct": 7, "hello": "World"}

debugPanel.set({hello: "Dolly"});
// {"fps": 58, "ct": 7, "hello": "Dolly"}

debugPanel.unset("hello");
// {"fps": 58, "ct": 7}
</pre>
          <p>
            In the above example, the debug panel is created. It is added to the engine as a model to draw. It is also passed as an option to the engine so it can output <code>fps</code> and <code>ct</code> (cycle time).
          </p>
          <p>
            We manually add attribute <code>hello</code> to be tracked. Whenever it changes, so does the print out on screen. Use <code>unset</code> to remove a tracked attribute.
          </p>
          <h4>Conditional Usage</h4>
          <p>
            It is recommended that you support the non-existence of the debug panel with an <code>if (this.debugPanel)</code> statement before setting. For example, when you extend a class, pass in the debug panel as an option. Then, in your code, check to see if it exists. For example, this is done in the <code>Backbone.Engine.draw</code> method:
          </p>
          <pre>if (this.debugPanel) this.debugPanel.set({fps: this.fps, ct: this.cycleTime});</pre>
          <p>
            This supports the case where the debug panel is never created (<code>debugPanel</code> = <code>undefined</code>), such as in production.
          </p>
        </div>
      </div>

      <div id="documentation-Shapes" class="row">
        <div class="col-md-12">
          <h3>Shape functions</h3>
          <p>
            File <code>shapes.js</code> contains helper functions to draw elementary shapes in the 2d drawing context of a canvas. You are free to use direct methods on the context to draw. These are provided as convenience. The functions are added to the global scope, under <code>window</code>. Supported functions are:
          </p>
          <pre>
drawRect(ctx, x, y, width, height, fill, stroke)
drawCircle(ctx, x, y, radius, fill, stroke)
drawRoundRect(ctx, x, y, width, height, radius, fill, stroke)
</pre>
          <p>
            I encourage you to add your own. If you do, respect these recommendations:
          </p>
          <ul>
            <li>Functions take as first argument <code>ctx</code> the drawing context.</li>
            <li>Second and third arguments should be <code>x</code> and <code>y</code> coordinates.</li>
            <li>Last arguments should be <code>fill</code> the fill style, and <code>stroke</code> the stroke style. They should be optional if possible.</li>
          </ul>
        </div>
      </div>

      <div id="mobile-devices" class="row">
        <div class="col-md-12">
          <h1>Mobile Devices</h1>
          <p>
            Backbone Game Engine was built for mobile first.
          </p>
          <h3>Touch Events</h3>
          <p>
            <a href="#documentation-Engine">Backbone.Engine</a>, <a href="#documentation-Input">Backbone.Input</a>, <a href="#documentation-Button">Backbone.Button</a> and <a href="#documentation-WorldEditor">Backbone.WorldEditor</a> support touch and mouse events transparently. Works on Android, iOS and Windows.
          </p>
          <h3>Viewport resizing and canvas centering</h3>
          <p>
            On mobile devices, the <code>meta</code> tag <code>viewport</code> is set to 960 pixels wide.
            On iOS, Android and Windows mobile devices, this will ensure the canvas is full width.
            The HTML file contains the necessary header tags to ensure everything works.
            You can change the viewport width value to whatever you want.
          </p>
<pre>
&lt;meta name="viewport" content="width=960, user-scalable=no"/&gt;
&lt;meta name="mobileoptimized" content="0" /&gt;
</pre>
          <p>
            Not all screens have the same aspec ratio.
            To take care of the height, you can change the height of the canvas upon start by calling the global function <code>adjustViewport()</code> (see file <code>adjust-viewport.js</code> for details).
          </p>
<pre>
var canvas = document.getElementById("foreground");
adjustViewport(canvas);
</pre>
          <p>
            If you want to maintain the aspect ratio, pass true. The canvas will be centered on screen.
          </p>
<pre>
var canvas = document.getElementById("foreground");
adjustViewport(canvas, true);
</pre>
        <p>
          On desktop the <code>viewport</code> meta tag is ignored.
          <code>adjustViewport</code> will center the canvas, even handling resizes.
          It will try to reduce the height of the canvas if too tall unless you omit the <code>keepRatio</code> argument.
        </p>
        <h3>Web App</h3>
        <p>
          These meta tags are set to enable Web App support:
        </p>
<pre>
&lt;meta name="apple-mobile-web-app-capable" content="yes" /&gt;
&lt;meta name="mobile-web-app-capable" content="yes" /&gt;
&lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/&gt;
</pre>
        <p>
          To suggest users to put add the home page to the home screen, checkout this great plugin:
          <a href="https://github.com/cubiq/add-to-homescreen" target="_blank">Cubiq's Add To Homescreen</a>.
        </p>
        </div>
      </div>

      <div id="going-offline" class="row">
        <div class="col-md-12">
          <h1>Going Offline</h1>
          <p>
            With <a href="https://developer.apple.com/library/safari/documentation/iphone/conceptual/safarijsdatabaseguide/offlineapplicationcache/offlineapplicationcache.html" target="_blank">HTML Application Cache</a>, you can go offline with your game. <a href="super-mario-bros/index.html" target="_blank">Super Mario Bros level 1-1</a> uses the application cache. The first time your browser loads that page, it will save the web page, along with all assets in its application cache. Subsequent visits will load these from the application cache instead of the server.
          </p>
          <div class="alert alert-info">
            Note: Application Cache only works when loaded from a server. It will not if you have forked the repo, and are loading the file from your disk (<code>file:///</code>). That's good because under development, we want to load the new code every refresh.
          </div>
          <p>
            If you have Google Chrome, open the console and you will see this:
          </p>
          <pre>
Creating Application Cache with manifest http://martindrapeau.github.io/backbone-game-engine/super-mario-bros/offline.appcache
Application Cache Checking event martindrapeau.github.io/:1
Application Cache Downloading event martindrapeau.github.io/:1
Application Cache Progress event (0 of 23) http://martindrapeau.github.io/backbone-game-engine/3rd/qtree.js
Application Cache Progress event (1 of 23) http://martindrapeau.github.io/backbone-game-engine/src/input.js
...
Application Cache Progress event (22 of 23) http://martindrapeau.github.io/backbone-game-engine/super-mario-bros/super-mario-enemies-2x.png
Application Cache Progress event (23 of 23)
Application Cache Cached event 
</pre>
          <p>
            Subsequent times, you will see this:
          </p>
          <pre>
Document was loaded from Application Cache with manifest http://martindrapeau.github.io/backbone-game-engine/super-mario-bros/offline.appcache
Application Cache Checking event
Application Cache NoUpdate event
</pre>
        <h3>Manifest File</h3>
        <p>
          Using an Application Cache is dead simple. First you must add the <code>manifest</code> attribute to your HTML tag. It points to the manifest file:
        </p>
        <pre>
&lt;!doctype html&gt;
&lt;html manifest="offline.appcache"&gt;
    &lt;head&gt;
</pre>
          Second, create the <code>manifest</code> file. It contains files that must be cached. For example here is the <code>offline.appcache</code>:
        </p>
        <pre>
CACHE MANIFEST
# Version 0.11 (c) 2014-2015 Martin Drapeau

../3rd/qtree.js
../3rd/underscore.js
../3rd/backbone.native.js
../3rd/backbone.js

../src/input.js
../src/shapes.js
../src/core.js
../src/world.js
../src/local-storage.js
../src/camera.js
../src/editor.js
../src/hero.js

mario.js
tiles.js
artifacts.js
enemies.js
display.js
level_1-1.js
main.js

super-mario-2x.png
super-mario-tiles-2x.png
super-mario-enemies-2x.png
icons.png
</pre>
          <p>
            If you have server requests, you can add a <code>NETWORK</code> section. Consult the docs for details.
          </p>
          <p>
            Fianally, the comment with <code>Version 0.11</code> is important. When a new version of Super Mario Bros level 1-1 is released, the version number is increased to force the browser to reload the files. It will also trigger an <code>updateready</code> event which gets captured to show a download button. That informs the user a new version is ready to be downloaded. Clicking on that button simply refreshes the browser to reload the new version.
          </p>
        </div>
      </div>

      <div id="persistence" class="row">
        <div class="col-md-12">
          <h1>Persistence</h1>
          <p>
            Backbone offers RESTful persistence via <a href="http://backbonejs.org/#Sync" target="_blank">Backbone.sync</a>. Models have methods <code>fetch</code> and <code>save</code> to retrieve/send the model/collection JSONified data to/from the server. As such, you can easily implement server-side persistence using well established RESTful standards.
          </p>
          <p>
            In our Super Mario Bros example, we use <a href="https://developer.apple.com/library/safari/documentation/iPhone/Conceptual/SafariJSDatabaseGuide/Name-ValueStorage/Name-ValueStorage.html" target="_blank">local storage</a> instead. This is done by overriding <code>Backbone.World</code> methods <code>save</code> and <code>fetch</code>. See file <code>src/local-storage.js</code> for details.
          </p>
        </div>
      </div>

      <div id="performance" class="row">
        <div class="col-md-12">
          <h1>Performance and Debugging</h1>
          <p>
            HTML5 canvas has come a long way in terms on performance. Browser implementations of canvas now offer impressive performance. On mobile, Apple leads the pack being able to sustain a 60fps for the Super Mario Bros example. However on Android, frame rates drop fast to the 30s when the background needs to be redrawn. On Surface performance seems good on newer models, however on first generation RT models, as slow as on Android tablets.
          </p>
          <p>
            This being said, there are things you can do to ensure the best performance.
          </p>
          <h4>Keep cycle time below 16ms</h4>
          <p>
            That is the time you have between redraws, 60 times a second. The <code>Backbone.Engine</code> will report the frame rate (fps), and cycle time (ct) if you add and attach a <code>Backbone.DebugPanel</code>. Make sure to use it. If you see <code>fps</code> go down while <code>ct</code> goes up, then your <code>update</code> and <code>draw</code> times must be too long. You can time the <code>update</code> time to pinpoint the issue.
          </p>
          <h4>Play well with Javascript Garbage Collection</h4>
          <p>
            You can't avoid it. You will leak memory. Every call made by <code>requestAnimationFrame</code> creates a function scope. It does so 60 times a second and it will need to be garbage collected. The browser will pause to collect garbage.
          </p>
          <p>
            You can however control the leakage rate. Try to create objects upfront, and pool resources as much as possible. That's why sprite sheets are shared among sprites. If you ever see that your game jerks, at an even interval (i.e. every 30s), then you are probably being hit by the garbage collector recuperating large amounts of memory (>10MB).
          </p>
          <p>
            You can use the Timeline tool in Chrome/Safari Developer Tools to identify this. Record a session and once done, you can apply a filter <code>gc</code> to filter on garbage collection events. You will notice they are at evenly spaced intervals. On my machine, for Super Mario Bros, 3.5MB is collected every 4s on average. There is no jerk. No jerk on a tablet means healthy memory management.
          </p>
          <p>
            Some further references and good resources on performance:
          </p>
          <ul>
            <li><a href="http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html" target="_blank">Browser Garbage Collection and Frame Rate</a></li>
            <li><a href="https://www.scirra.com/blog/76/how-to-write-low-garbage-real-time-javascript" target="_blank">How to write low garbage real-time Javascript</a></li>
            <li><a href="http://www.html5rocks.com/en/tutorials/canvas/performance/" target="_blank">Improving HTML5 Canvas Performance</a></li>
          </ul>
        </div>
      </div>

      <div id="publishing" class="row">
        <div class="col-md-12">
          <h1>Publishing your Game</h1>
          <h2>On the Web</h2>
          <p>
            If you forked this repo, your game is already published on the web on your Github page under <code>[username].github.io/backbone-game-engine</code>.
          </p>
          <p>
            If you own an iPad or iPhone, you can add it to the home screen as a Web app. It will open in full-screen and if you've implemented an Application Cache, it will work offline too.
          </p>
          <h2>On iOS and Android</h2>
          <p>
            Backbone Game Engine was built to run in <a href="https://www.ludei.com/cocoonjs/" target="_blank">CocoonJS</a> canvas+. You can try out Super Mario Bros level 1-1 in the <a href="http://support.ludei.com/hc/en-us/articles/201048463-CocoonJS-launcher-user-guide" target="_blank">CocoonJS launcher</a> by pointing to the zip file at this URL: http://martindrapeau.github.io/cocoon-mario/cocoon-mario.zip.
            </p>
<pre>
http://martindrapeau.github.io/cocoon-mario/cocoon-mario.zip
</pre>
          <p>
            Checkout the Github repo <a href="" target="_blank">cocoon-mario</a>.
            It can be used as the basis for your own native game on iOS or Android.
          </p>
        </div>
      </div>

      <div id="change-log" class="row">
        <div class="col-md-12">
          <h1>Change Log</h1>
          <h4>0.40 - TBD</h4>
          <ul>
            <li>Upcoming release to include bug fixes, improvements and new features to come following the release to iOS of Ludo's Quest.</li>
          </ul>
          <h4>0.30 - 2015-03-22</h4>
          <ul>
            <li>Backbone.Element - a rudimentary DOM element with image, text and animations.</li>
            <li>Backbone.World now uses a QuadTree for collision detection.</li>
            <li>Removed dependence on hammer.js. Backbone.Engine now triggers tap and key events.</li>
            <li>Complete rewrite of Backbone.Input. Removed its pause button.</li>
            <li>Complete rewrite of Backbone.Character.</li>
            <li>Complete rewrite of Backbone.Hero.</li>
            <li>Backbone.Editor now resizes sprites to fit in the specified tileWidth and tileHeight.</li>
            <li>Rewrite of adjustViewport global function to work cross-device.</li>
            <li>Official support of CocoonJS canvas+.</li>
          </ul>
          <h4>0.21 - 2015-02-06</h4>
          <ul>
            <li>Sprite padding</li>
            <li>More efficient gamepad drawing</li>
            <li>Editor: paging, shrink large sprites, highlight tiles</li>
            <li>World: z-index, tap event,key event, fixed background image, improved sprite lookup, bug fixes</li>
          </ul>
          <h4>0.20 - 2014-12-31</h4>
          <p>
            Major improvements including:
            <ul>
              <li>Performance improvements.</li>
              <li>Fast sprite lookup.</li>
              <li>Faster dynamic and static drawing.</li>
              <li>Efficient collision detection.</li>
              <li>Character and hero knockout and dying.</li>
              <li>Bug fixes.</li>
            </ul>
          </p>
          <h4>0.11 - 2014-11-12</h4>
          <p>
            Adjust viewport on orientation change, and center canvas.
          </p>
          <h4>0.10 - 2014-05-19</h4>
          <p>
            Initial release.
          </p>
        </div>
      </div>

    </div>

    <div class="col-md-3">
      <div id="sidebar" class="bs-sidebar affix">
        <ul class="nav bs-sidenav">
          <li class="active"><a href="#introduction">Introduction</a></li>
          <li><a href="#getting-started">Getting Started</a></li>
          <li><a href="#documentation">Reference</a></li>
          <li><a href="#documentation-Engine">&nbsp;&nbsp;Backbone.Engine</a></li>
          <li><a href="#documentation-SpriteSheet">&nbsp;&nbsp;Backbone.SpriteSheet</a></li>
          <li><a href="#documentation-SpriteSheetCollection">&nbsp;&nbsp;Backbone.SpriteSheetCollection</a></li>
          <li><a href="#documentation-Sprite">&nbsp;&nbsp;Backbone.Sprite</a></li>
          <li><a href="#documentation-Input">&nbsp;&nbsp;Backbone.Input</a></li>
          <li><a href="#documentation-World">&nbsp;&nbsp;Backbone.World</a></li>
          <li><a href="#documentation-WorldEditor">&nbsp;&nbsp;Backbone.WorldEditor</a></li>
          <li><a href="#documentation-Character">&nbsp;&nbsp;Backbone.Character</a></li>
          <li><a href="#documentation-Hero">&nbsp;&nbsp;Backbone.Hero</a></li>
          <li><a href="#documentation-Camera">&nbsp;&nbsp;Backbone.Camera</a></li>
          <li><a href="#documentation-Clock">&nbsp;&nbsp;Backbone.Clock</a></li>
          <li><a href="#documentation-Element">&nbsp;&nbsp;Backbone.Element</a></li>
          <li><a href="#documentation-Button">&nbsp;&nbsp;Backbone.Button</a></li>
          <li><a href="#documentation-DebugPanel">&nbsp;&nbsp;Backbone.DebugPanel</a></li>
          <li><a href="#documentation-Shapes">&nbsp;&nbsp;Shape functions</a></li>
          <li><a href="#mobile-devices">Mobile Devices</a></li>
          <li><a href="#going-offline">Going Offline</a></li>
          <li><a href="#persistence">Persistence</a></li>
          <li><a href="#performance">Performance</a></li>
          <li><a href="#publishing">Publishing</a></li>
          <li><a href="#change-log">Change Log</a></li>
        </ul>
      </div>
    </div>

    </div>
    </div>
    <br/>

    <footer class="navbar navbar-default">
        <p class="navbar-text navbar-left">
          &copy; 2014 <a href="http://martindrapeau.tumblr.com/">Martin Drapeau.</a>
          <a href="https://github.com/martindrapeau/backbone-game-engine/blob/gh-pages/LICENSE">Licensed under MIT.</a>
        </p>
        <p class="navbar-text navbar-right">Written in Montréal, Canada.</p>
        <p class="navbar-text navbar-right">&nbsp;</p>
    </footer>
  </body>
</html>


```

### 源码下载


获取源码，公众号回复【超级马利奥】，即可。更多最新Java面试题加群、见群公告。~

不会还有人没 **点赞 + 关注 + 收藏** 吧!



![5](https://tva3.sinaimg.cn/large/007F3CC8ly1h1opc56ys2j30t80lrwhn.jpg)





## 系列推荐：

[Java 实现 捕鱼达人 小游戏【附源码】](http://javapub.net.cn/)

[Java 实现 贪吃蛇 小游戏【附源码】](http://javapub.net.cn/)

[Java 实现 1024 小游戏【附源码】](http://javapub.net.cn/)

[Java实现一个坦克大战的小游戏【附源码】](http://javapub.net.cn/project/game)

[Java实现一个打飞机的小游戏【附源码】](http://javapub.net.cn/project/game)

[Java 实现 植物大战僵尸 小游戏【附源码】](http://javapub.net.cn/project/game)


## [查看更多博主首页更多实战项目 >>>](https://blog.csdn.net/qq_40374604/category_11788364.html)


**项目源码获取方法**

点赞本文，然后私信我，我免费分享给你哈~


![image](https://tvax4.sinaimg.cn/large/007F3CC8ly1h1opl93q9wj30ri0hd4ek.jpg)



公众号二维码

![](http://javapub.net.cn/accounts/wechat.jpg)

个人微信

![](http://javapub.net.cn/accounts/QRcode.jpg)
