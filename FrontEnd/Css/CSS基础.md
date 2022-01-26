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