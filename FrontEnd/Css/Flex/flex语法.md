# Flex布局语法

## 一、Flex布局是什么？
  Flex: 弹性布局，为盒状模型提供最大的灵活性。

  块状元素及行内元素都可以使用Flex布局
  ```css
  //块状元素
  .box {
    display: -webkit-flex; //Webkit内核的浏览器
    display: flex;
  }

  //行内元素
  .box {
    display: inline-flex;
  }
  ```

## 二、基本概念
  采用Flex布局的元素，称为Flex容器(flex container)，简称"容器"。它的所有子元素自动成为容器成员，称为Flex子项(flex item)，简称"子项"。
  ![](\images\bg2015071004.png)

  + main axis: 默认水平主轴
  + main start: 主轴起始位置
  + main end: 主轴结束位置
  + main size: 单个子项占据主轴空间大小
  + cross axis: 默认垂直交叉轴
  + cross start: 交叉轴起始位置
  + cross end: 交叉轴结束位置
  + cross size: 单个子项占据交叉轴空间大小

## 三、容器的属性
  容器有6个设置属性
  + flex-direction
  + flex-wrap
  + flex-flow
  + justify-content
  + align-items
  + align-content

### 3.1 flex-direction属性
  flex-direction决定主轴的方向
  ```css
    .box {
      flex-direction: row | row-reverse | column | column-reverse
    }
  ```
  
![](\images\bg2015071005.png)

属性的4个值：
+ row(默认值): 主轴为水平方向，起点在左端
+ row-reverse: 主轴为水平方向，起点在右端
+ column: 主轴为垂直方向，起点在上沿
+ column: 主轴为垂直方向，起点在下沿

### 3.2 flex-wrap属性
  默认情况下，子项都排在一条轴线上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
  ![](\images\bg2015071006.png)

  ```css
    .box {
      flex-wrap: nowrap | wrap | wrap-reverse
    }
  ```

  该属性的三个值：
  + nowrap(默认): 不换行
  ![](\images\bg2015071007.png)
  + wrap: 换行，第一行在上方
  ![](\images\bg2015071008.jpg)
  + wrap-reverse: 换行，第一行在下方
  ![](\images\bg2015071009.jpg)

### 3.3 flex-flow
  flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

  ```css
    .box {
      flex-flow: <flex-direction> || <flex-wrap>
    }
  ```

### 3.4 justify-content
  justify-content属性定义了子项在主轴上的对齐方式。

  ```css
    .box {
      justify-content: flex-start | flex-end | center | space- between | space-around;
    }
  ```

  ![](\images\bg2015071010.png)

  该属性有5个值:
  + flex-start(默认值): 左对齐
  + flex-end: 右对齐
  + center: 居中
  + space-between: 两端对其，子项之间的间隔都相等
  + space-around: 每个子项两侧的间隔相等，子项与边框的间隔是子项间隔的一半

### 3.5 align-items属性
  align-items属性定义项目在交叉轴上的对齐方式。

  ```css
    .box {
      align-items: flex-start | flex-end | center | baseline | stretch;
    }
  ```
  ![](\images\bg2015071011.png)
  
  该属性有5个值:
  + flex-start: 交叉轴的起点对齐
  + flex-end: 交叉轴的终点对齐
  + center: 交叉轴的中点对齐
  + baseline: 子项的第一行文字的基线对齐
  + stretch(默认值): 如果子项未设置高度或设为auto，将占满整个容器的高度

### 3.6 align-content属性
  align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  
  ```css
    .box {
      align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    }
  ```
  ![](\images\bg2015071012.png)

  该属性有6个值：
  + flex-start: 与交叉轴的起点对齐。
  + flex-end: 与交叉轴的终点对齐。
  + center: 与交叉轴的中点对齐。
  + space-between: 与交叉轴两端对齐，轴线之间的间隔平均分布。
  + space-around: 每根轴线两侧的间隔都相等。所以，轴线之间的间隔是轴线与边框的间隔的两倍。
  + stretch(默认值): 轴线占满整个交叉轴。

## 四、子项的属性
  子项有6个属性。
  + order
  + flex-grow
  + flex-shrink
  + flex-basis
  + flex
  + align-self

  ### 4.1 order属性
  order属性定义子项的排列顺序。数值越小，排列越靠前，默认为0。
  ```css
    .item {
      order: <integer>;
    }
  ```
  ![](\images\bg2015071013.png)

  ### 4.2 flex-grow属性
  flex属性定义子项的放大比例，默认为0，即如果存在剩余空间，也不放大。
  ```css
  .item {
    flex-grow: <number>;/* default 0 */
  }
  ```
  ![](\images\bg2015071014.png)

  ### 4.3 flex-shrink属性
  flex-shrink属性定义子项的缩小比例，默认为1，即如果空间不足，子项将缩小。
  ```css
    .item {
      flex-shrink: <number>; /*default 1*/
    }
  ```
  ![](\images\bg2015071015.jpg)
  如果一个子项flex-shrink属性为0，则不缩小

  ### 4.4 flex-basis属性
  flex-basis属性定义了在分配多余空间之前，子项占据的主轴的空间(main size)。它的默认值为auto，即项目的本来的大小
  ```css
    .item {
      flex-basis: <length> | auto; /*default auto*/
    }
  ```

  ### 4.5 flex属性
    flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。
    ```css
      .item {
        flex: none | [<'flex-grow'><'flex-shrink'> ? || <'flex-basis'>]
      }
    ```
    两个快捷值：auto(1 1 auto) 和 none (0 0 auto)，建议优先使用这个属性。

  ### 4.6 align-self属性
    align-self属性允许单个子项有与其他子项不一样的对齐方式，可覆盖algin-items属性。
    ```css
      .item {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
      }
    ```
  ![](\images\bg2015071016.png)







