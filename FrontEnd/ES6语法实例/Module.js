//export用于规定模块的对外接口
//import用于规定输入其他模块的功能
//export可以输出变量、函数或类
//if profile.js
var firstName = 'Michael'
var lastName = 'Jackson'
var year = 1958

export { firstName, lastName, year }

export function multiply(x, y) {
  return x * y;
}

function v1() {}
function v2() {}

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
}

//输出变量
//写法一
export var m = 1;

//写法二
var m = 1;
export {m};

//写法三
var n = 1;
export { n as m};

//import命令
//从profile.js中导出相应的变量
import { firstName, lastName, year } from './profile.js';
function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}

//为输入变量重新命名,输入变量都是只读的
import { lastName as surname } from './profile.js';

//import命令具有提升效果，会提升到整个模块的头部，首先执行
foo();

import { foo } from 'my_module';


//模块的整体加载
//circle.js
export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}

//main.js
import { area, circumference } from './circle';
console.log('原面积：' + area(4));
console.log('圆周长：' + circumference(14));

import * as circle from './circle';
console.log('原面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

// export default命令
// 默认输出
// export-default.js
export default function() {
  console.log('foo')
}

//import-default.js
import customName from './export-default';
customName(); // 'foo'

// export-default.js
export default function foo() {
  console.log('foo');
}

//或者写成
function foo() {
  console.log('foo');
}

export default foo;