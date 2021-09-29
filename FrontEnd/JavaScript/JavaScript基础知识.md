## 数据类型

+ 原始类型

  + boolean
  + number
  + string
  + null
  + undefined
  + symbol
  + bigint

+ 对象类型

  + Object
  + Function

  注意：原始类型存储在栈上，对象类型存储在堆上，但是它的引用地址还是存在栈上。

## 类型判断

+ typeof：判断原始类型除了null之外
+ instanceof ：判断具体的对象类型
+ .constructor
+ Object.prototype.toString
+ isXXX API

## 类型转换

+ 强制转换：转换成特定类型
+ 转布尔值规则：
  + undefined、null、false、NaN、''、0、-0都转为false
  + 其他值都转为true,包括对象
+ 转数字规则
  + true为1，false为0
  + null为0，undefined为NaN,symbol报错
  + 字符串看内容，如果是数字或者进制值正常转为数字，否则为NaN
  + 对象的规则隐式转换
+ 隐式转换
  + 对象转基本类型:
    + 调用Symbol.toPrimitive,转成功结束
    + 调用valueOf,转成功结束
    + 调用toString,转成功结束
    + 报错
  + 四则运算符
    + 只有+运算时，其中一方是字符串类型，就会把另一个也转成字符串类型
    + 其他运算只要其中一方是数字，那么另一方就转为数字
    + ==
    ~~~
    [] == ![] // true
    // [] == ![]  -> []  == false -> [] == 0 -> [].toString() == 0 -> 0 == 0 -> true
    ~~~

##  this

+ 普通函数(主要看函数被谁调用，或者利用call,apply,bind强制改变this)
+ 箭头函数(箭头函数的this只取决于定义时的环境)

## 闭包

+ 闭包的概念：假如一个函数能访问外部的变量，那么这个函数它就是一个闭包，而不是一定要返回一个函数。闭包的作用是访问私有变量。
+ 原始类型存储位置：局部变量被储存在栈上，全局变量存在静态区域上，其他存储在堆上。

## new

+ new操作符可以构建一个新实例，并且绑定上this,内部执行步骤大概可以分为以下几步
  + 新生成了一个对象
  + 对象连接到构造函数原型上，并绑定this
  + 执行构造函数代码
  + 返回新对象

## 作用域

+ 概念：变量的可访问性

+ 全局作用域
+ 函数作用域
+ 块级作用域，ES6中的let、const就可以产生作用域

## 原型

+ 所有对象都有属性__proto__指向一个对象，也就是原型
+ 每个对象的原型都可以通过constructor找到构造函数，构造函数也可以通过prototype找到原型
+ 所有函数都可以通过__proto__找到Function对象
+ 所有对象都可以通过proto找到Object对象
+ 对象之间通过__proto__链接起来，这样称之为原型链。当前对象上不存在的属性可以通过原型链一层层往上走，直到顶层Object对象，再往上就是null

## 继承

## 深浅拷贝

+ 浅拷贝：两个对象第一层的引用不相同就是浅拷贝
+ 通过assign、扩展运算符等方式来实现浅拷贝

~~~javascript
let a = {
	age:1
}
let b = Object.assign({},a)
a.age = 2
console.log(b.age) //1
b = {...a}
a.age = 3
console.log(b.age) //2
~~~

+ 深拷贝：两个对象内部所有的引用都不相同就是深拷贝的含义
+ 最简单的深拷贝方式JSON.parse(JSON.stringify(object))，但该方法存在不少缺陷

~~~javascript
let map = new WeakMap()
function deepClone(obj) {
	if(obj instanceof Object) {
		if(map.has(obj)){
			return map.get(obj)
		}
		let newObj
		if(obj instanceof Array) {
			newObj = []
		}else if (obj instanceof Function){
			newObj = function() {
				return obj.apply(this,arguments)
			}
		}else if(obj instanceof RegExp) {
			newObj = new RegExp(obj.source,obj.flags)
		}else if(obj instanceof Date) {
			newObj = new Date(obj)
		}else {
			newObj = {}
		}
		
		//克隆一份对象
		let desc = Object.getOwnPropertyDescriptors(obj)
		let clone = Object.create(Object.getPrototypeOf(obj),desc)
		map.set(obj,clone)
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				newObj[key] = deepClone(obj[key])
			}
		}
		return newObj
	}
	return obj
}
~~~



## Promise

## 事件循环

+ JS是一门单线程语言，在执行过程中永远只能同时执行一个任务，任何异步的调用都只是在模拟这个过程，或者说可以直接认为在JS中的异步就是延迟执行的同步代码。
+ Task(宏任务):同步代码、setTimeout回调、setInterval回调、IO、UI交互事件、postMessage、MessageChannel
+ MicroTask(微任务):Promise状态改变以后的回调函数(then函数执行，如果此时状态，回调只会被缓存，只有当状态改变，缓存的回调函数才会被丢到任务队列)、Mutation observer回调函数、queueMicrotask回调函数
+ 宏任务会被丢到下一次事件循环，并且宏任务队列每次只会执行一个任务
+ 微任务会被丢到本次事件循环中，并且微任务队列每次都会执行任务直到队列为空
+ Event Loop执行顺序
  + 执行同步代码
  + 执行完所有同步代码后且执行栈为空，判断是否又微任务需要执行
  + 执行所有微任务且微任务队列为空
  + 是否有必要渲染页面
  + 执行一个宏任务

## 模块化

+ CommonJS
+ ES6的ESM
+ CommonJS和ESM的两者区别是
  + 前者支持动态导入，也就是require(${path}/xx.js)，后者使用import()
  + 前者是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步到如会对渲染有很大影响。
  + 前者在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是后者采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化。

## 垃圾回收

+ 新生代使用Scaverge GC算法
+ 老生代使用标记清除和标记压缩算法

## 其他考点

+ 0.1 + 0.2 !== 0.3 ?

  因为JS采用IEEE 754双精度版本(64位)，并且只要采用IEEE 754的语言都有该问题。存在的问题难题的原因是浮点数用二进制表示的时候是无穷的，因为精度的问题，两个浮点数相加会造成截断丢失精度，因此再转换为十进制就出现了问题。

  + 解决的办法

  ~~~javascript
  export const addNum = (num1:number,num2:number) => {
      let sq1;
      let sq2;
      let m;
      try {
          sq1 = num1.toString().split('.')[1].length;
      } catch (e) {
          sq1 = 0;
      }
      
      try {
          sq2 = num2.toString().split('.')[1].length;
      } catch (e) {
          sq2 = 0;
      }
      
      m = Math.pow(10,Math.max(sq1,sq2))
      
      return (Math.round(num1*m)+Math.round(num2*m))/m
  }
  ~~~

  

  

## 手写题

+ 防抖

