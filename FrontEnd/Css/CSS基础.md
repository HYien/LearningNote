## CSS基础及高级
### 什么是CSS？
+ CSS是一种描述HTML文档样式的语言
+ CSS指的是层叠样式表(Cascading Style Sheets)
+ CSS可以修饰HTML在浏览器的显示的样式
+ HTML文档三种引入CSS的方法
  - 外部CSS
  ```html
    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>
  ```
  - 内部CSS
  ```html
  <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          background-color: lightblue;
        }

        h1 {
          color: navy;
          margin-left: 20px;
        }
      </style>
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>
  ```
  - 行内CSS
  ```html
    <!DOCTYPE html>
    <html>
    <body>

    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>

    </body>
    </html>
  ```

### CSS语法
+ CSS规则集(rule-set)由选择器和声明块组成
![](\images\selector.gif)
+ 声明块包含多条声明
+ 每条声明包含一对键值对

### CSS选择器
CSS选择器用于“查找”要设置样式的HTML元素
选择器的种类：
+ 简单选择器(根据名称、id、类来选取元素）
  - CSS元素选择器
  ```css
    p {
      text-align: center;
      color: red;
    }
  ```
  - CSSId选择器
  ```css
    #para1 {
      text-align: center;
      color: red;
    }
  ```
  - CSS类选择器
  ```css
    .center {
      text-align: center;
      color: red;
    }
  ```
  - CSS通用选择器
  作用于HTML所有元素
  ```css
    * {
      text-align: center;
      color: blue;
    }
  ```
  - CSS分组选择器
  ```css
    h1, h2, p {
      text-align: center;
      color: red;
    }
  ```
+ 组合器选择器（根据它们之间的特定关系来选取元素）
+ 伪类选择器（根据特定状态选取元素）
+ 伪元素选择器（选取元素的一部分并设置其样式）
+ 属性选择器（根据属性或属性值来选取元素）

### CSS注释
CSS注释
```css
  /* 这是一条单行注释 */
  p {
    color: red;
  }
```

### CSS颜色
+ 使用预定义颜色名称
+ RGB
  rgb(red,green,blue),每个参数 (red、green 以及 blue) 定义了 0 到 255 之间的颜色强度。
  显示黑色：rgb(0,0,0);显示红色：rgb(255,255,255)。
+ HEX
  十六进制值指定颜色(#rrggbb),其中 rr（红色）、gg（绿色）和 bb（蓝色）是介于 00 和 ff 之间的十六进制值（与十进制 0-255 相同）。
+ HSL
  使用色相、饱和度和明度（HSL）来指定颜色：
  色相（hue）是色轮上从 0 到 360 的度数。0 是红色，120 是绿色，240 是蓝色。
  饱和度（saturation）是一个百分比值，0％ 表示灰色阴影，而 100％ 是全色。
  亮度（lightness）也是百分比，0％ 是黑色，50％ 是既不明也不暗，100％是白色。
+ RGBA
  rgba(red, green, blue, alpha)，alpha 参数是介于 0.0（完全透明）和 1.0（完全不透明）之间的数字。
+ HSLA
  hsla(hue, saturation, lightness, alpha)，alpha 参数是介于 0.0（完全透明）和 1.0（完全不透明）之间的数字。

### CSS背景
+ background
+ background-color
+ background-image
+ background-repeat
+ background-attachment
+ background-position
```css
  div {
    background: rgba(0, 128, 0, 0.3) url("tree.png") no-repeat right top;
    /* background-image: url("bgdesert.jpg");
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: fixed; */
  }
```

### CSS边框
+ border
+ border-style
+ border-width
+ border-color
+ border-radius
+ border-top
+ border-right
+ border-bottom
+ border-left
```css
  p {
    border: 2px solid red;
    border-radius: 5px;
  }
```

### CSS外边距
+ margin
+ margin-top
+ margin-right
+ margin-bottom
+ margin-left
```css
  p {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
  }

  p {
    margin: 25px 50px 75px 100px;
  }
  
  /* 右和左外边距50px */
  p {
    margin: 25px 50px 75px;
  }

  /* 上下外边距为25px,左右外边距50px */
  p {
    margin: 25px 50px;
  }

  /* 四个外边距25px */
  p {
    margin: 25px;
  }

  p {
    /* 水平居中 */
    margin: auto; 
  }
  
```
+ 外边距合并
当两个垂直外边距相遇时，它们将形成一个外边距。合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。

### CSS内边距
+ padding
+ padding-top
+ padding-right
+ padding-bottom
+ padding-left
```css
  div {
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
  }

  div {
    padding: 25px 50px 75px 100px;
  }

  div {
    padding: 25px 50px 75px;
  }

  div {
    padding: 25px 50px;
  }

  div {
    padding: 25px;
  }

  /* 默认值为content-box */
  div {
    width: 300px;
    padding: 25px;
  }

  /* box-sizing设置为border-box */
  /* 宽度等于内边距+内容宽度 */
  div {
    width: 300px;
    padding: 25px;
    box-sizing: border-box;
  }
```

### CSS高度和宽度
+ height
+ width
```css
  div {
    height: 200px;
    width: 50%;
    background-color: powderblue;
  }
```
+ max-width
max-width 属性的值将覆盖 width（宽度）。
+ min-width
设置元素最小宽度
+ max-height
设置元素的最大高度
+ min-height
设置元素的最小高度

### CSS盒模型
![](\images\boxmodel.gif)
+ 元素内容
+ 内边距
+ 边框
+ 外边距
```css
  div {
    width: 300px;
    border: 15px solid green;
    padding: 50px;
    margin: 20px;
  }
```
元素的总宽度 = 宽度 + 左内边距 + 右内边距 + 左边框 + 右边框 + 左外边距 + 右外边距
元素的总高度 = 高度 + 上内边距 + 下内边距 + 上边框 + 下边框 + 上外边距 + 下外边距

### CSS轮廓
+ outline
```css
  p.ex1 { outline: dashed; }
  p.ex2 { outline: dotted red; }
  p.ex3 { outline: 5px solid yellow; }
  p.ex4 { outline: thick ridge pink; }
```
+ outline-style
```css
  p.dotted {
    /* 点状轮廓。 */
    outline-style: dotted;
  }

  p.dashed {
    /* 虚线轮廓。 */
    outline-style: dashed;
  }

  p.solid {
    /* 实线轮廓。 */
    outline-style: solid;
  }

  p.double {
    /* 双线轮廓。 */
    outline-style: double;
  }

  p.groove {
    /* 3D 凹槽轮廓。此效果取决于 outline-color 值。 */
    outline-style: groove;
  }

  p.ridge { 
    /* 3D 凸槽轮廓。此效果取决于 outline-color 值。 */
    outline-style: ridge;
  }

  p.inset {
    /* 3D 凹边轮廓。此效果取决于 outline-color 值。 */
    outline-style: inset;
  }

  p.outset {
    /* 3D 凸边轮廓。此效果取决于 outline-color 值。 */
    outline-style: outset;
  }
```
+ outline-color
```css
  p.ex1 {
    border: 2px solid black;
    outline-style: solid;
    outline-color: red;
  }

  p.ex2 {
    border: 2px solid black;
    outline-style: dotted;
    outline-color: blue;
  }

  p.ex3 {
    border: 2px solid black;
    outline-style: outset;
    outline-color: grey;
  }
```
+ outline-width
```css
  p.ex1 {
    border: 1px solid black;
    outline-style: solid;
    outline-color: red;
    outline-width: thin;
  }

  p.ex2 {
    border: 1px solid black;
    outline-style: solid;
    outline-color: red;
    outline-width: medium;
  }

  p.ex3 {
    border: 1px solid black;
    outline-style: solid;
    outline-color: red;
    outline-width: thick;
  }

  p.ex4 {
    border: 1px solid black;
    outline-style: solid;
    outline-color: red;
    outline-width: 4px;
  }
```
+ outline-offset
元素的轮廓与边框之间添加空间。
```css
  p {
    margin: 30px;
    background: yellow;
    border: 1px solid black;
    outline: 1px solid red;
    outline-offset: 25px;
  }
```

### CSS文本
+ color
```css
  h1 {
    color: green;
  }
```
+ text-align
```css
  h1 {
    text-align: center;
  }

  h2 {
    text-align: left;
  }

  h3 {
    text-align: right;
  }

  div {
    text-align: justify;
  }
```
+ direction
```css
  p {
    direction: rtl;
    unicode-bidi: bidi-override;
  }
```

+ vertical-align
```css 
  img.top {
    vertical-align: top;
  }

  img.middle {
    vertical-align: middle;
  }

  img.bottom {
    vertical-align: bottom;
  }
```

+ text-decoration
```css
  a {
    text-decoration: none;
  }
  h1 {
    text-decoration: overline;
  }
  h2 {
    text-decoration: line-through;
  }
  h3 {
    text-decoration: underline;
  }
```

+ text-transform
```css 
  p.uppercase {
    text-transform: uppercase;
  }

  p.lowercase {
    text-transform: lowercase;
  }

  p.capitalize {
    text-transform: capitalize;
  }
```
+ text-indent
```css
  p {
    /* 文字缩进 */
    text-indent: 50px;
  }
```
+ text-spacing
```css
  h1 {
    /* 指定文本中字符之间的间距 */
    letter-spacing: 3px;
  }
```
+ line-height
```css
  p.small {
    line-height: 0.8;
  }
  p.big {
    line-height: 1.8;
  }
```
+ word-spacing
```css
  /* word-spacing 属性用于指定文本中单词之间的间距。*/
  h1 {
    word-spacing: 10px;
  }
  h2 {
    word-spacing: -5px;
  }
```
+ white-space
```css
  /* 元素内部空白的处理方式 */
  p {
    white-space: nowrap;
  }
```
+ text-overflow

+ text-shadow
```css
  h1 {
    /*文字阴影 水平阴影2px 垂直阴影2px 增加模糊效果5px */
    text-shadow: 2px 2px 5px red;
  }
```

### CSS字体
+ font
字体属性简写
```css
  p.b {
    font: italic small-caps bold 12px/30px Georgia, serif;
  }
```
+ font-family
```css
  .p1 {
    font-family: "Times New Roman", Times, serif;
  }

  .p2 {
    font-family: Arial, Helvetica, sans-serif;
  }
```
+ font-style
指定斜体文本
```css
  p.normal {
    font-style: normal;
  }

  p.italic {
  font-style: italic;
}
```
+ font-weight
指定字体的粗细
```css
  p.normal {
    font-weight: normal;
  }

  p.thick {
    font-weight: bold;
  }
```
+ font-variant
指定是否以 small-caps 字体（小型大写字母）显示文本
```css
  p.normal {
    font-variant: normal;
  }

  p.small {
    font-variant: small-caps;
  }
```
+ font-size
设置文本的大小。
```css
  h1 {
    font-size: 40px;
  }
  h1 {
    font-size: 2.5em; /* 40px/16=2.5em */
  }
```

### CSS图标
+ 使用font-asesome图标
```html
  <!DOCTYPE html>
  <html>
  <head>
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  </head>
  <body>

  <i class="fas fa-cloud"></i>
  <i class="fas fa-heart"></i>
  <i class="fas fa-car"></i>
  <i class="fas fa-file"></i>
  <i class="fas fa-bars"></i>

  </body>
  </html>
```

### CSS链接
+ a:link 为访问的链接
+ a:visited 用户访问过的链接
+ a:hover 用户将鼠标悬停在链接上
+ a:active 链接被点击时
```css
  /* hover必须在link、visited后 active必须在hover后 */
  /* 未被访问的链接 */
  a:link {
    color: red;
  }

  /* 已被访问的链接 */
  a:visited {
    color: green;
  }

  /* 将鼠标悬停在链接上 */
  a:hover {
    color: hotpink;
  }

  /* 被选择的链接 */
  a:active {
    color: blue;
  }
```
+ text-decoration
```css
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:active {
    text-decoration: underline;
  }
```
+ background-color
```css
  a:link {
    background-color: yellow;
  }

  a:visited {
    background-color: cyan;
  }

  a:hover {
    background-color: lightgreen;
  }

  a:active {
    background-color: hotpink;
  } 
```

### CSS列表
+ 无序列表<ul>
+ 有序列表<ol>
+ list-style
简写属性。
```css
  ul {
    list-style: square inside url("sqpurple.gif");
  }
```
+ list-style-type
```css
  ul.a {
    list-style-type: circle;
  }

  ul.b {
    list-style-type: square;
  }

  ol.c {
    list-style-type: upper-roman;
  }
```
+ list-style-image
```css
  ul {
    list-style-image: url('sqpurple.gif');
  }
```

+ list-style-position
```css
  ul.a {
    list-style-position: outside;
  }

  ul.b {
    list-style-position: inside;
  }
```
+ list-style-type 
```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
```

### CSS表格
+ border
```css
  table, th, td {
    border: 1px solid black;
  }
```
+ 全宽的表格
```css
  table {
    width: 100%;
  }
```
+ border-collapse
```css
  table {
    border-collapse: collapse;
  }

  table, th, td {
    border: 1px solid black;
  }
```
+ height
+ text-align
+ vertical-align
+ padding
+ :hover
+ :nth-child()
+ overflow-x

### CSS布局
+ display
  - none
```css
  h1.hidden {
    display: none;
  }
```
  - inline
  - block
  - inline-block
  ```css
    span.b {
      /* 允许在元素设置宽度和高度。 */
      display: inline-block;
      width: 100px;
      height: 100px;
      padding: 5px;
      border: 1px solid blue; 
      background-color: yellow; 
    }

    /* inline-block创建导航条 */
    .nav {
      background-color: yellow;
      list-style-type: none;
      text-align: center;
      padding: 0;
      margin: 0;
    }
    .nav li {
      display: inline-block;
      font-size: 20px;
      padding: 20px;
    }
  ```
+ block element(块级元素)
+ inline element(行内元素)
+ visibility
```css
  h1.hidden {
    visibility: hidden;
  }
```
+ width
```css
  div.ex1 {
    width: 500px;
    margin: auto;
    border: 3px solid #73AD21;
  }

  div.ex2 {
    /* 视口的最大宽度小于500 元素的width会缩小为视口的100% */
    max-width: 500px;
    margin: auto;
    border: 3px solid #73AD21;
  }
```
+ max-width
+ position
  - static
  它始终根据页面的正常流进行定位。
  ```css
    div.static {
      position: static;
      border: 3px solid #73AD21;
    }
  ```
  - relative
  元素相对于其正常位置进行定位。
  ```css
    div.relative {
      position: relative;
      left: 30px;
      border: 3px solid #73AD21;
    }
  ```
  - fixed
  元素相对于视口定位。
  ```css
    div.fixed {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 300px;
      border: 3px solid #73AD21;
    }
  ```
  - absolute
  元素相对于最近的定位祖先元素进行定位。
  ```css
    div.relative {
      position: relative;
      width: 400px;
      height: 200px;
      border: 3px solid #73AD21;
    }

    div.absolute {
      position: absolute;
      top: 80px;
      right: 0;
      width: 200px;
      height: 100px;
      border: 3px solid #73AD21;
    }
  ```
  - sticky
    元素根据用户的滚动位置进行定位。粘性元素根据滚动位置在相对（relative）和固定（fixed）之间切换。
    ```css
      div.sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: green;
        border: 2px solid #4CAF50;
      }
    ```
+ z-index
元素进行定位时，它们可以与其他元素重叠。
```css
  img {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
  }
```
+ overflow
overflow属性仅适用于具有指定高度的块元素。
  - visible
  默认。溢出没有被剪裁，内容在元素框外渲染。
  ```css
    div {
      width: 200px;
      height: 50px;
      background-color: #eee;
      overflow: visible;
    }
  ```
  - hidden
  溢出被剪裁，其余内容将不可见。
  ```css
    div {
      overflow: hidden;
    }
  ```
  - scroll
  溢出被剪裁，同时添加滚动条以查看其余内容。
  ```css
    div {
      overflow: scroll;
    }
  ```
  - auto
  仅在必要时添加滚动条。
  ```css
    div {
      overflow: auto;
    }
  ```
+ overflow-x
overflow-x 指定如何处理内容的左/右边缘。
  - visible
  - hidden
  - scroll
  - auto 

+ overflow-y
overflow-y 指定如何处理内容的上/下边缘。
  - visible
  - hidden
  - scroll
  - auto 

+ float & clear
float属性用于定位和格式化内容，例如让图像向左浮动到容器中的文本那里。
  - left
  ```css
    img {
      float: left;
    }
  ```
  - right
  ```css 
    img {
      float: right;
    }
  ```
  - none
  ```css
    img {
     /*清除浮动设置 */
      float: none;
    }
  ```
  - inherit

clear属性指定哪些元素可以浮动于被清除元素的旁边以及哪一侧。
  - none
  默认值，允许两侧都有浮动元素。
  - left
  左侧不允许浮动元素。
  ```css
    div {
      clear: left;
    }
  ```
  - right
  右侧不允许浮动元素。
  ```css
    div {
      clear: right;
    }
  ```
  - both
  ```css
    div {
      clear: both;
    }
  ```
  左侧或右侧均不允许浮动元素。
  - inherit

如果一个元素比包含它的元素高，并且它是浮动的，它将“溢出”到其容器之外：
```css
  .clearfix {
    overflow: auto;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
```
+ 浮动布局实例
```css
  * {
    box-sizing: border-box;
  }

  .box {
    float: left;
    width: 33.33%;
    padding: 50px;
  }
```
+ float布局水平导航菜单栏
```html
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
    }

    li {
      float: left;
    }

    li a {
      display: inline-block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover {
      background-color: #111;
    }

    .active {
      background-color: red;
    }
  </style>
  </head>
  <body>

  <ul>
    <li><a href="#home" class="active">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>

  </body>
  </html>
```

+ 水平和垂直对齐
  - 元素水平居中对齐
  ```css
    .center {
      margin: auto;
      width: 50%;
      border: 3px solid green;
      padding: 20px;
    }
  ```
  - 文本水平居中对齐
  ```css
    .text-center {
      text-align: center;
      border: 3px solid green;
    }
  ```
  - 图像居中对齐
  ```css
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
    }
  ```
  - 元素左和右对齐
  ```css
    /* position: absolute; */
    .right {
      position: absolute;
      right: 0px;
      width: 300px;
      border: 3px solid #73AD21;
      padding: 20px
    }
    /* position: float; */
    .right {
      float: right;
      width: 300px;
      border: 3px solid #73AD21;
      padding: 10px;
    }
  ```
  - 文本垂直居中
  ```css
    .center {
      padding: 70px 0;
      border: 3px solid green;
    }

    .center {
      line-height: 200px;
      height: 200px;
      border: 3px solid green;
      text-align: center;
    }

    /* 如果有多行文本，请添加如下代码：*/
    .center p {
      line-height: 1.5;
      display: inline-block;
      vertical-align: middle;
    }
  ```
  - 文本水平垂直居中
  ```css
    .center {
      padding: 70px 0;
      border: 3px solid green;
      text-align: center;
    }
  ```
  - 元素水平垂直居中
  ```css
    .center {
      height: 200px;
      position: relative;
      border: 3px solid green;
    }

    .center p {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  ```
  - 垂直对齐Flexbox
  ```css
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      border: 3px solid green; 
    }
  ```