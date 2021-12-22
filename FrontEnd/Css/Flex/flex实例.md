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


## 二、网格布局

## 三、圣杯布局

## 四、输入框布局

## 五、悬挂式布局

## 六、固定的底栏

## 七、流式布局







