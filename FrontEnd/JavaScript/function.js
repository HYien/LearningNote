// 普通函数
function foo() {
  // code
}

// 箭头函数
const foo1 = () => {
  // code
}

// 在class中定义的函数
class C {
  foo2() {
    // code
  }
}

// 生成器函数 function*
function* foo3() {
  // code 
}

// 类
class Foo4 {
  constructor() {
  }
}

// 异步函数
async function foo5() {
  // code
}

const foo6 = async() => {
  // code
}

async function* foo7() {
  // code
}

// this关键字的行为
function showThis() {
  console.log(this)
}

var obj9 = {
  showThis: showThis
}

showThis() // global
obj9.showThis() // obj9

// 普通函数的this值由“调用它所使用的引用”
// 调用函数时使用的引用，决定了函数执行时刻的this值

// 箭头函数,定义时就确定了this值
const showThis2 = () => {
  console.log(this)
}

const obj10 = {
  showThis2: showThis2
}

showThis2() // global
obj10.showThis2() // global