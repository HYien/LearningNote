// 闭包：绑定了执行环境的函数
// 执行上下文在ES3
// scope：作用域，也常常被叫做作用域链
// variable object：变量对象，用于存储变量的对象
// this value: this值

// 执行上下文在ES5
// lexical environment：词法环境
// variable environment：变量环境
// this value: this值

// 执行上下文在ES2018
// lexical enviroment 词法环境，当获取变量或this值时使用
// variable environment 变量环境，当声明变量时使用
// code evaluation state 用于恢复代码执行位置
// Function 执行的任务是函数时使用，表示正在被执行的函数
// ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码
// Realm: 使用的基础库和内置对象实例
// Generator: 仅生成器上下文有这个属性，表示当前生成器


// 立即执行函数表达式(IIFE)，通过创建一个函数，并且立即执行，来构造一个新的域，从而控制var的范围
(function(){
  var a;
}());

(function(){
  var a;
})();

;(function(){
  var a;
}())

;(function(){
  var a;
})()

void function() {
  var a;
}()

var b;
void function() {
  var env = { b: 1};
  b = 2;
  console.log("In function b:", b);
  // 2
  with(env) {
    var b = 3;
    console.log("In with b:", b)
    // 3
  }
}()

console.log("Global b:", b) // undefined

// ES6引入let新的变量声明模式
// let 引入了块级作用域
