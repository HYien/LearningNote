# Flex布局实例
  ```html
    <div class="box">
      <span class="item"></span>
    </div>
  ```
## 一、骰子的布局
### 1.1 单子项
  左上角1个点情况。Flex布局默认就是首行左对齐。
  ![](\images\bg2015071301.png)
  ```css
    .box {
      display: flex; 
    }
  ```
  设置单项的对齐方式，就能实现居中对齐及右对齐
  ![](\images\bg2015071302.png)
  ```css
    .box {
      display: flex;
      justify-content: center;
    }
  ```
  ![](\images\bg2015071303.png)
  ```css
    .box {
      display: flex;
      justify-content: flex-end;
    }
  ```
  设置交叉轴对齐方式，可以垂直移动主轴。
  ![](\images\bg2015071304.png)
  ```css
    .box {
      display: flex;
      align-items: center;
    }
  ```
  ![](\images\bg2015071305.png)
  ```css
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  ```

  ![](\images\bg2015071306.png)
  ```css
    .box {
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  ```

  ![](\images\bg2015071307.png)
  ```css
    .box {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }
  ```

### 1.2 双子项
  ![](\images\bg2015071308.png)
  ```css
    .box {
      display: flex;
      justify-content: space-between;
    }
  ```
  ![](\images\bg2015071309.png)
  ```css
    .box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  ```
  ![](\images\bg2015071310.png)
  ```css
    .box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  ```

  ![](\images\bg2015071311.png)
  ```css
    .box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
  ```

  ![](\images\bg2015071312.png)
  ```css
    .box {
      display: flex;
    }
    .item:nth-child(2) {
      align-self: center;
    }
  ```
  ![](\images\bg2015071313.png)
  ```css
    .box {
      display: flex;
      justify-content: space-between;
    }
    .item:nth-child(2) {
      align-self: flex-end;
    }
  ```

### 1.3 三子项
  ![](\images\bg2015071314.png)
  ```css
    .box {
      display: flex;
      justify-content: space-between;
    }
    .item:nth-child(2) {
      align-self: center
    }
    .item:nth-child(3) {
      align-self: flex-end
    }
  ```

### 1.4 四子项
  ![](\images\bg2015071315.png)
  ```css
    .box {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-content: space-between; 
    }
  ```
  ![](\images\bg2015071316.png)
  ```html
    <div class="box">
      <div class="column">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="column">
        <span class="item"></span>
        <span class="item"></span>
      </div>
    </div>
  ```
  ```css
    .box {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
    }
    .column {
      display: flex;
      flex-basis: 100%;
      justify-content: space-between;
    }
  ```

### 1.5 六子项
  ![](\images\bg2015071317.png)
  ```css
    .box {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
    }
  ```
  ![](\images\bg2015071318.png)
  ```css
    .box {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: space-between;
    }
  ```
  ![](\images\bg2015071319.png)
  ```html
    <div class="box">
      <div class="row">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="row">
         <span class="item"></span>
      </div>
      <div class="row">
        <span class="item"></span>
        <span class="item"></span>
      </div>
    </div>
  ```
  ```css
    .box {
      display: flex;
      flex-wrap: wrap;
    }

    .row {
      flex-basis: 100%;
      display: flex;
    }

    .row:nth-child(2) {
      justify-content: center;
    }

    .row:nth-child(3) {
      justify-content: space-between;
    }

  ```
### 1.6 九子项
  ![](\images\bg2015071320.png)
  ```css
    .box {
      display: flex;
      flex-wrap: wrap;
    }
  ```


## 二、网格布局
### 2.1 基本网络布局
  基本的网络布局就是平均分配，但子项根据容器大小可以自动缩放。
  ![](\images\bg2015071321.png)
  ```html
    <div class="Grid">
      <div class="Grid-cell">...</div>
      <div class="Grid-cell">...</div>
      <div class="Grid-cell">...</div>
    </div>
  ```
  ```css
    .Grid {
      display: flex;
    }

    .Grid-cell {
      flex: 1;
    }
  ```
### 2.2 百分比布局
  某个网格的宽度为固定百分比，其余网格平均分配剩余空间。
  ![](\images\bg2015071322.png)
  ```html
    <div class="Grid">
      <div class="Grid-cell u-lof1">...</div>
      <div class="Grid-cell"></div>
      <div class="Grid-cell u-lof3"></div>
      <div class="Grid-cell u-lof4"></div>
    </div>
  ```
  ```css
    .Grid {
      display: flex;
    }
    .Grid-cell {
      flex: 1;
    }

    .u-full {
      flex: 0 0 100%;
    }

    .u-lof1 {
      flex: 0 0 50%;
    }

    .u-lof3 {
      flex: 0 0 33.3333%
    }

    .u-lof4 {
      flex: 0 0 25%
    }
  ```


## 三、圣杯布局
  圣杯布局(Holy Grail Layout)指的是一种常见的网站布局。页面从上到下，分为三部分：头部(header)，躯干(body)，尾部(footer)。躯干又分三栏，从左到右为：导航、主栏、副栏。
  ![](\images\bg2015071323.png)
  ```html
    <body class="HolyGrail">
      <header>...</header>
      <div class="HolyGrail-body">
        <main class="HolyGrail-content">...</main>
        <nav class="HolyGrail-nav">...</nav>
        <aside class="HolyGrail-ads">...</aside>
      </div>
      <footer>...</footer>
    </body>
  ```
  ```css
    .HolyGrail {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }
    header,
    footer {
      flex: 1;
    } 
    .HolyGrail-body {
      display: flex;
      flex: 1; /*自适应 1,1,auto */
    }

    .HolyGrail-content {
      flex: 1;
    }
    .HolyGrail-nav, .HolyGrail-ads{
      flex: 0 0 12em;
    }
    .HolyGrail-nav {
      order: -1; /*最左边 */
    }
    /* 如果是小屏幕，躯干的三栏自动变为垂直叠加 */
    @media (max-width: 768px) {
      .HolyGrail-body {
        flex-direction: column;
        flex: 1;
      }
      .HolyGrail-nav,
      .HolyGrail-ads,
      .HolyGrail-content {
        flex: auto;
      }
    }
  ```
  
## 四、输入框布局
  输入框前后方有按钮
  ![](\images\bg2015071324.png)
  ```html
    <div class="inputAddOn">
      <span class="InputAddOn-item">...</span>
      <input class="InputAddOn-field">
      <button class="InputAddOn-item">...</button>
    </div>
  ```
  ```css
    .inputAddOn {
      display: flex;
    }
    .InputAddOn-field {
      flex: 1;
    }
  ```
## 五、悬挂式布局
  主栏的左侧或右侧，需要添加一个图片栏
  ![](\images\bg2015071325.png)
  ```html
    <div class="Media">
      <img class="Media-figure" src="" alt="">
      <p class="Media-body">...</p>
    </div>
  ```
  ```css
    .Media {
      display: flex;
      align-items: flex-start;
    }

    .Media-figure {
      margin-right: 1em;
    }

    .media-body {
      flex: 1;
    }


  ```

## 六、固定的底栏 
  可以采用flex布局，让底栏总是出现在页面的底部。
  ![](\images\bg2015071326.png)
  ```html
    <body class="Site">
      <header>...</header>
      <main class="Side-content"></main>
      <footer>...</footer>
    </body>
  ```

  ```css
    .Site {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    .Side-content {
      flex: 1;
    }
  ```

## 七、流式布局
  每行的项目数固定，会自动分行。
  ![](\images\bg2015071330.png)
  ```css
    .parent {
      width: 200px;
      height: 150px;
      background-color: black;
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
    }
    .child {
      box-sizing: border-box;
      background-color: white;
      flex: 0 0 25%;
      height: 50px;
      border: 1px solid red;
    }
  ```






