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