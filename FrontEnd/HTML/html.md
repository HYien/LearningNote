## HTML基础

### 什么是HTML？
HTML是用来描述网页的一种标记语言。
+ HTML指的是超文本标记语言(Hyper Text Markup Language)
+ HTML不是一种编程语言，是一种标记语言(markup language)
+ 标记语言是一套标记标签(markup tag)
+ HTML使用标记标签来描述网页

### HTML标签
HTML标记标签通常被称为HTML标签(HTML tag)
+ HTML标签是由尖括号包围的关键词，如<html>
+ HTML标签通常是成对出现的，比如<b>和</b>
+ 标签对中，第一个标签是开始标签，第二个标签是结束标签
+ 开始和结束标签被称为开放标签和闭合标签

### HTML文档
+ HTML文档描述网页
+ HTML文档包含HTML标签和纯文本
+ HTML文档被称为网页

### HTML元素
HTML元素由HTML元素定义，由开始标签(start tag)到结束标签(end)的所有内容。
+ HTML元素以开始标签起始
+ HTML元素以结束标签终止
+ 元素的内容是开始标签与结束标签之间的内容
+ 某些HTML元素具有空内容
+ 空元素在开始标签进行关闭
+ HTML元素可拥有属性

### HTML头部元素
<kbd>head</kbd>元素是所有头部元素的容器。
+ title元素：
	1.定义浏览器工具栏的标题
	2.提供页面被添加到收藏夹时显示的标题
	3.显示在搜索引擎结果中的页面标题
```html
	<!DOCTYPE html>
	<html>
		<head>
		<title>Title of the document</title>
		</head>
		<body>
			The content of the document......
		</body>
	</html>
```
+ base元素
<kbd>base</kbd>标签为页面上的所有链接规定默认地址或默认目标(target)
```html
	<head>
		<base href="http://www.w3school.com.cn/images/" />
		<base target="_blank" />
	</head>
```
+ link元素
<kbd>link</kbd>标签定义文档与外部资源之间的关系。
```html
	<link rel="stylesheet" type="text/css" href="mystyle.css" />
```
+ style元素
<kbd>style</kbd>标签用于为HTML文档定义样式信息。

+ meta元素
<kbd>metadata</kbd>是关于文档的元数据信息。

+ script元素
<kbd>script</kbd>标签用于定义客户端脚本，比如 JavaScript。

### HTML标题标签
+ h1 - h6
	```html
	<h1>一级标题</h1>
	<h2>二级标题</h2>
	```

### HTML段落标签
由<p></p>标签对进行定义
	```html
		<p>这是一个段落</p>
	```

### HTML折行
br标签可以进行换行
	```html
		<p>This is <br/> a para<br />graph with line breaks</p>
	```

### HTML链接标签
html使用超级链接与网络上的另一个文档相连。由a标签对进行定义
	```html
		<a href="http://www.w3school.com.cn">This is a link.</a>
	```
超链接的两种使用方式：
+ 1. 通过使用href属性 - 创建指向另一个文档的链接
	```html
		<a href="http://www.w3school.com.cn/">Visit W3School</a>
	```
+ 2. 通过使用name属性,规定锚点的名称 - 创建文档内的书签
	```html
		<!-- 定义锚点-->
		<a name="tips">基本的注意事项 - 有用的提示</a>
		<!-- 指向锚点的链接 -->
		<a href="#tips">有用的提示</a>
	```

+ a标签的target属性，表示链接的网页在何处显示
	```html
		<a href="http://www.w3school.com.cn/" target="_blank">Visit W3School</a>
	```

### HTML表格
+ table
+ caption
+ th
+ tr
+ td
+ thead
+ tbody
+ tfoot

### HTML图像
	由<img/>标签进行定义
+ src源属性:源属性的值是图像的URL地址
+ alt替换文本属性:一串预备的可替换的文本
	```html
		<img src="w3school.jpg" width="104" height="142"/>
	```

### HTML列表
+ 无序列表
	```html
		<ul>
			<li>Coffee</li>
			<li>Milk</li>
		</ul>
	```
+ 有序列表
	```html
		<ol>
			<li>Coffee</li>
			<li>Milk</li>
		</ol>
	```
+ 自定义列表
	```html
		<dl>
			<dt>Coffee</dt>
			<dd>Black hot drink</dd>
			<dt>Milk</dt>
			<dd>White cold drink</dd>
		</dl>
	```

### HTML表单
用于搜集不同类型的用户输入。
+ form元素
表单元素
+ 不同类型的input元素
+ select元素
+ textarea元素
+ button元素
+ datalist
  
### HTML5 Canvas
canvas元素用于在网页上绘制图形。
+ 绘制矩形
```javascript
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.fillRect(0,0,150,75);
```
+ 绘制直线
```javascript
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.moveTo(10,10);
	cxt.lineTo(150,50);
	cxt.lineTo(10,50);
	cxt.stroke();
```
+ 绘制圆形
```javascript
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.beginPath();
	cxt.arc(70,18,15,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
```
+ 绘制图片
```javascript
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	var grd=cxt.createLinearGradient(0,0,175,50);
	grd.addColorStop(0,"#FF0000");
	grd.addColorStop(1,"#00FF00");
	cxt.fillStyle=grd;
	cxt.fillRect(0,0,175,50);
```

### HTML内联SVG
什么是SVG?
+ SVG指可伸缩矢量图形(Scalable Vector Graphics)
+ SVG用于定义用于网络的基于矢量的图形
+ SVG使用XML格式定义图形
+ SVG图像在放大或改变尺寸的情况下其图形质量不会又损失
+ SVG是万维网联盟的标准
```html
<!DOCTYPE html>
	<html>
	<body>

	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
		<polygon points="100,10 40,180 190,60 10,60 160,180"
		style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
	</svg>
	</body>
	</html>
```

### HTML5 Canvas vs. SVG
SVG的特点：
+ 是使用XML描述2D图形的语言
+ SVG DOM中的每个元素都是可用的
+ SVG的每个元素可以添加JavaScript事件处理器
+ SVG对象的属性发生变化，浏览器能够自动重现图形
+ 不依赖分辨率
+ 支持事件处理器
+ 最适合带有大型渲染区域的应用程序（比如谷歌地图）
+ 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
+ 不适合游戏应用

Canvas的特点：
+ 通过JavaScript来绘制2D图形
+ Canvas是逐像素进行渲染
+ 如果图形的位置发生变化，整个场景需要重新绘制
+ 依赖分辨率
+ 不支持事件处理器
+ 弱的文本渲染能力
+ 能够以 .png 或 .jpg 格式保存结果图像
+ 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

### HTML多媒体
指的是Web应用中的多媒体是音效、音乐、视频和动画。
+ 视频格式 Mpeg-4、WMV等
+ 声音格式 MP3 MIDI Wave

### HTML音频
+ 最好的HTML音频播放解决方法
```html
	<audio controls="controls" height="100" width="100">
		<source src="song.mp3" type="audio/mp3" />
		<source src="song.ogg" type="audio/ogg" />
		<embed height="100" width="100" src="song.mp3" />
	</audio>
```

### HTML视频
+ 最好的HTML视频播放解决方法
```html
	<video width="320" height="240" controls="controls">
		<source src="movie.mp4" type="video/mp4" />
		<source src="movie.ogg" type="video/ogg" />
		<source src="movie.webm" type="video/webm" />
		<object data="movie.mp4" width="320" height="240">
			<embed src="movie.swf" width="320" height="240" />
		</object>
	</video>
```

### HTML5地理定位
HTML5 Geolocation（地理定位）用于定位用户的位置。
+ 使用 getCurrentPosition() 方法来获得用户的位置

### HTML5本地储存
+ HTML本地存储：优于cookies
+ window.localStorage对象存储没有时间限制
+ window.sessionStorage对象关闭浏览器页面数据则被删除

### HTML5应用缓存
指定了manifest的页面在用户对其访问时都会被缓存

### HTML字符实体
HTML中的预留字符必须被替换为字符实体。
+ 小于符号：&lt; or &#60;
+ 不间断空格：&nbsp;

### HTML块元素及内联元素
+ HTML块元素，通常以新行开始
+ HTML块级元素
+ HTML内联元素，通常不会以新行开始
+ HTML内联元素

### HTML Iframe 
iframe 用于在网页内显示网页。 
```html
	<iframe src="URL"></iframe>
```

### HTML水平线
hr标签在HTML网页中创建水平线，用于分隔内容。
	```
		<p>This is a paragraph</p>
		<hr />
		<p>This is a paragraph</p>
		<hr />
		<p>This is a paragraph</p>
	```

### HTML文本格式化
	文本格式化标签。
+ b定义粗体文本
+ big定义大号字体
+ em定义着重文字
+ i定义斜体字
+ small定义小号字
+ sub定义下标
+ sup定义上标
+ ins定义插入字
+ del定义删除字

### HTML引用
+ q元素定义短的引用。
	```html
		<p>WWF的目标是：<q>构建人与自然和谐共存的世界。</q></p>
	```
+ blockquote元素定义长的引用。
	```html
		<p>以下内容引用自WWF的网站:</p>
		<blockquote cite="http://www.worldwildlife.org/who/index.html>
		五十年来，WWF一直致力于保护自然界的未来。
		世界领先的环保组织，WWF 工作于 100 个国家，
		并得到美国一百二十万会员及全球近五百万会员的支持。
		</blockquote>
	```
+ abbr元素用于定义缩写或者首字母缩略语。
	```html
		<p>
			<abbr title="World Health Organization">WHO</abbr>成立于1948年
		</p>
	```
+ dfn元素定义项目或缩写的定义。
	```html
		<p>
			<dfn>
				<abbr title="World Health Organization">WHO</abbr>成立于1948年
			</dfn>
		</p>
	```
+ address元素定义文档或文章的联系信息
	```html
		<address>
		Written by Donald Duck.<br/>
		Visit us at:<br/>
		Example.com<br/>
		Box 564, Disneyland<br/>
		USA
		</address>
	```
+ cite元素定义著作的标题
	```html
		<p>
			<cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>
		</p>
	```

### HTML注释
	```html
		<!-- This is a comment -->
	```

### HTML样式
	style属性用于改变HTML元素的样式。
	```html
		<html>
			<body style="background-color:yellow">
				<h2 style="background-color:red">This is a heading</h2>
				<p style="background-color:green">This is a paragraph</p>
			</body>
		</html>
	```

### HTML属性
	属性为HTML元素提供附加信息。
	HTML标签可以拥有属性。属性提供了有关HTML元素的更多的信息。

### HTML id属性
	HTMLid属性用于为HTML元素指定唯一的id。
+ 通过ID和链接实现HTML书签
	```html
		<h2 id="C4">第四章</h2>
		<!-- 跳转 -->
		<a href="#C4">跳转到第四章</a>
	```

### HTML CSS
+ 外部样式表
	```html
		<head>
			<link rel="stylesheet" type="text/css" href="mystyle.css">
		</head>
	```
+ 内部样式表
	```html
		<head>
			<style type="text/css">
				body {
					background-color: red;
				}
				p {
					margin-left: 20px;
				}
			</style>
		</head>
	```
+ 内联样式
	```html
		<p style="color:red;margin-left:20px">
			This is a paragraph.
		</p>
	```

### HTML JavaScript
<kbd>Script</kbd>元素即可包含脚本语句，也可通过 src 属性指向外部脚本文件

### HTML文件路径
文件路径描述了网站文件夹结构中某个文件的位置
+ 绝对文件路径
绝对文件路径指向因特网文件的完整URL
+ 相对路径
相对路径指向了相对于当前页面的文件。

### HTML响应式Web设计
什么是响应式Web设计?
+ RWD指的是响应式Web设计(Responsive Web Design)
+ RWD能够以可变尺寸传递网页
+ RWD对于平板和移动设备是必需的

## 页面结构语义化
### 什么是语义元素
语义元素就是清楚的向浏览器和开发者描述其意义。
+ 非语义元素：div、span等
+ 语义元素：form、table等

### 为什么需要语义化

+ 易修改、易维护
+ 无障碍阅读支持
+ 搜索引擎友好，利于SEO
+ 面向未来的HTML，浏览器在未来可能提供更丰富的支持

### 结构语义化

结构语义化：仅是语义元素在页面结构的规范化

![](images/page.png)

#### header(头部)

header元素的两种用法：

+ 标注内容的标题
+ 标注网页的页眉

#### nav(导航栏)

导航通常包含一组链接

```html
<nav>
	<ul>
		<li><a href="#" title="链接"></a></li>
		<li><a href="#" title="链接"></a></li>
		<li><a href="#" title="链接"></a></li>
	</ul>
</nav>
```

#### aside(附注)

aside元素不仅是侧栏，也可以用来说明文章的附加内容、解释某个观点等。

#### footer(页脚)

footer标签仅仅可以包含版权信息、来源信息、法律限制等之类的文本或链接信息。

#### main主要内容