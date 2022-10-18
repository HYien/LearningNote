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
  + 对象原型连接到构造函数原型上，并绑定this
  + 执行构造函数代码
  + 如果构造函数不返回对象，则返回新对象

+ 实现new
~~~javascript
  // 第一种实现方式
  // 第一个参数为构造函数
  function _new1() {
    var obj = {}
    var constructorFunc = [].shift.call(arguments)
    if (typeof constructorFunc !== 'function') {
      throw 'new funcction the first param must be a function.'
    }
    obj.__proto__ = constructorFunc.prototype
    var params = arguments
    var res = constructorFunc.apply(obj,params)
    return res instanceof Object ? res : obj
  }

  function _new2(ctor) {
    if (typeof ctor !== 'function') {
      return throw 'new funcction the first param must be a function.'
    }
    // 1.创建新对象将对象链接到构造函数原型
    var obj = Object.create(ctor.prototype)
    // 2.获取构造函数的传入的参数
    var argsArr = [].slice.call(arguments,1)
    // 3.执行构造函数并绑定this
    var ctorRes = ctor.apply(obj,argsArr)
    var isObject = typeof ctorRes === 'object' && ctorRes !== null
    var isFunction = typeof ctorRes === 'function'
    // 4.如果执行构造函数返回值为对象,则返回对象,否则返回新创建的对象
    return (isObject || isFunction) ? ctorRes : obj
  }
~~~

## 作用域

+ 概念：变量的可访问性

+ 全局作用域
+ 函数作用域
+ 块级作用域，ES6中的let、const就可以产生作用域

## 原型

+ 所有对象都有属性__proto__指向一个对象，也就是原型
+ 每个对象的原型都可以通过constructor找到构造函数，构造函数也可以通过prototype找到原型
+ 所有函数都可以通过__proto__找到Function对象
+ 所有对象都可以通过__proto__找到Object对象
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
    //浅拷贝
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
+ 使用all实现并行请求
+ Promise all 错误处理
+ 手写all

+ 问题
页面上有三个按钮，分别为 A、B、C，点击各个按钮都会发送异步请求且互不影响，每次请求回来的数据都为按钮的名字。 请实现当用户依次点击 A、B、C、A、C、B 的时候，最终获取的数据为 ABCACB。

~~~javascript
//队列
    class Queue {
      promise = Promise.resolve()

      excute(promise) {
        this.promise = this.promise.then(() => promise)
        return this.promise
      }
    }

    const queue = new Queue()
    const delay = (params) => {
      const time = Math.floor(Math.random()*5)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(params)
        },time*500)
      })
    }

    const handleClick = async (name) => {
      const res = await queue.excute(delay(name))
      console.log(res)
    }

    handleClick('A');
    handleClick('B');
    handleClick('C');
    handleClick('A');
    handleClick('C');
    handleClick('B');
~~~

+ async\await
  await与直接使用Promise在于处理then调用链的问题，但滥用await可能会导致性能问题
  + 容易做错的笔试题
~~~javascript
  var a = 0
  var b = async () => {
    a = a + await 10
    console.log('2',a)
  }
  b()
  a++
  console.log('1',a)

  // '1' 1 , '2' 10
  // 其实 a 为 0 是因为加法运算法，先算左边再算右边，所以会把 0 固定下来

  //如果改成如下,则b()输出11
  var a = 0
  var b = async () => {
    a = await 10 + a 
    console.log('2',a)
  }
  b()
  a++
  console.log('1',a)
~~~
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
+ 代码模拟事件Event Loop做了什么？
~~~javascript
  console.log('script start')

  setTimeout(() => {
    console.log('setTimeout')
  },0)

  Promise.resolve().then(() => {
    queueMicrotask(() => console.log('queueMicrotask'))
    console.log('promise')
  })

  console.log('script end')

  //1.遇到console.log执行并打印
  //2.遇到setTimeout,将回调加入宏任务队列
  //3.Promise.resolve(),此时状态已经改变,因此将then回调加入微任务队列
  //4.console.log执行并打印
  //5.微任务队列存在任务，开始执行then回调函数
  //6.遇到queueMicrotask，将其加入微任务队列
  //7.遇到console.log执行并打印
  //8.检查发现微任务队列存在任务，执行queueMicrotask
  //9.遇到console.log执行并打印
  //10.执行宏任务，开始执行setTimeout回调
  //11.遇到console.log执行并打印
~~~
  + 什么是事件循环？
  + JS 的执行原理？
  + 哪些是微宏任务？
  + 定时器是准时的嘛？
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

## 防抖
+ 作用：解决按钮防二次点击的操作或者滚动事件种做复杂计算
+ 防抖实现核心思路：每次触发函数的间隔小于阈值，防抖情况下只会调用一次
+ 区别于节流：节流情况会每隔一定时间调用函数

+ 简单防抖例子
~~~javascript
  //func 用户传入需要防抖的函数
  //wait 设置时间阈值
  const debounce = (func,wait = 50) => {
    let timer = 0
    return function(...args) {
      if (timer) clearTimeout(timer)
      timer = serTimeout(() => {
        func.apply(this,args)
      },wait)
    }
  }
~~~

+ 带有立即执行选项的防抖函数
~~~javascript
  /**
  * @param {function} func 回调函数
  * @param {number} wait 表示时间窗口的间隔
  * @param {number} immediate 设置为true，立即调用函数
  * @return {funcition}
  **/
  function debounce (func, wait = 50, immediate = true) {
    let timer, context, args

    //延迟执行函数
    const later = () => setTimeout(() => {
      timer = null //及时清除timer
      if (!immediate) {
        func.apply(context,args)
        context = args = null
      }
    },wait)

    return function(...params) {
      if (!timer) {
        timer = later()

        if (immediate) {
          func.apply(this,params)
        } else {
          context = this
          args = params
        }
      } else {
        clearTimeout(timer)
        timer = later()
      }
    }
  }
~~~

## 节流
+ 节流核心：多次执行变成每隔一段时间执行
+ 应用核心： 现在的需求是这样的，用户在输入框内疯狂输入字符串，每经过1s就向后台发起请求查询数据库

+ 节流的简单实现
~~~javascript
  function throttle (func,wait) {
    let timeout 
    return function() {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.call(this,...arguments)
        },wait)
      }
    }
  }
~~~

~~~javascript
  //获取当前时间时间戳
  function now() {
    return +new Date()
  }

/**
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      回调函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return {function}             返回客户调用函数   
 */
throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    // 之前的时间戳
    var previous = 0;
    // 如果 options 没传则设为空对象
    if (!options) options = {};
    // 定时器回调函数
    var later = function() {
      // 如果设置了 leading，就将 previous 设为 0
      // 用于下面函数的第一个 if 判断
      previous = options.leading === false ? 0 : now();
      // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      // 获得当前时间戳
      var now = now();
      // 首次进入前者肯定为 true
      // 如果需要第一次不执行函数
      // 就将上次时间戳设为当前的
      // 这样在接下来计算 remaining 的值时会大于0
      if (!previous && options.leading === false) previous = now;
      // 计算剩余时间
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      // 如果当前调用已经大于上次调用时间 + wait
      // 或者用户手动调了时间
 	    // 如果设置了 trailing，只会进入这个条件
      // 如果没有设置 leading，那么第一次会进入这个条件
      // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
      // 其实还是会进入的，因为定时器的延时
      // 并不是准确的时间，很可能你设置了2秒
      // 但是他需要2.2秒才触发，这时候就会进入这个条件
      if (remaining <= 0 || remaining > wait) {
        // 如果存在定时器就清理掉否则会调用二次回调
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        // 判断是否设置了定时器和 trailing
	      // 没有的话就开启一个定时器
        // 并且不能不能同时设置 leading 和 trailing
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
~~~

## Event Bus
~~~javascript
class Events {
  constructor() {
    this.events = new Map();
  }

  addEvent(key, fn, isOnce, ...args) {
    const value = this.events.get(key) ? this.events.get(key) : this.events.set(key, new Map()).get(key)
    value.set(fn, (...args1) => {
        fn(...args, ...args1)
        isOnce && this.off(key, fn)
    })
  }

  on(key, fn, ...args) {
    if (!fn) {
      console.error(`没有传入回调函数`);
      return
    }
    this.addEvent(key, fn, false, ...args)
  }

  fire(key, ...args) {
    if (!this.events.get(key)) {
      console.warn(`没有 ${key} 事件`);
      return;
    }
    for (let [, cb] of this.events.get(key).entries()) {
      cb(...args);
    }
  }

  off(key, fn) {
    if (this.events.get(key)) {
      this.events.get(key).delete(fn);
    }
  }

  once(key, fn, ...args) {
    this.addEvent(key, fn, true, ...args)
  }
}
~~~

## instanceof
~~~javascript
function instanceof(left,right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null) {
      return false 
    }

    if (prototype === left) {
      return true
    }
    left = left.__proto__
  }
}
~~~

## call
~~~javascript
Function.prototype.myCall = function(context,...args) {
  context = context || window
  let fn = Symbol()
  context[fn] = this //妙啊
  let result = context[fn](...args)
  delete context[fn]
  return result
}
~~~

## apply
~~~javascript
Function.prototype.myApply = function(context) {
  context = context || window
  let fn = Symbol()
  context[fn] = this //妙啊
  let result 
  if (arguments[1]) {
    result = context[fn](...arguments[1])
  } else {
    result = context[fn]()
  }
  delete context[fn]
  return result
}
~~~

## bind
~~~javascript
Function.prototype.myBind = function(context) {
  var _this = this
  var args = [...arguments].slice(1)

  return funtion Fn() {
    if (this instanceof F) {
      return new _this(...args,...arguments)
    } 

    return _this.apply(context,args.concat(...arguments))
  }
}
~~~

## curry(高级柯里化实现)
~~~javascript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this,args)
    } else {
      return function(...args2) {
        return curried.apply(this,args.concat(args2))
      }
    }
  }
}
~~~