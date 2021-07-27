## 1.在JavaScript中创建对象的可行方法有哪些？

1. 对象构造函数

   ```javascript
   var object = new Object()
   ```

   

2. 对象的创建方法

   Object的create方法通过将原型对象作为参数传递来创建一个新对象

   ```javascript
   var object = Object.creat(null)
   ```

   

3. 对象字面量

   当传递null作为参数时，对象字面量语法等效于create方法

   ```javascript
   var object = {}
   ```

   

4. 函数构造器

   创建任何函数并应用new运算符来创建对象实例

   ```javascript
   function Person(name){
   	var object = {};
   	object.name = name;
   	object.age = 21;
   	return object;
   }
   
   var object = new Person("Sudheer")
   ```

5. 带有原型的函数构造函数

   函数构造函数，使用原型作为其属性和方法

   ```javascript
   function Person(){}
   Person.prototype.name = "Sudheer"
   var object = new Person()
   ```

   

6. ES6类语法

   ES6引入类特性来创建对象

   ```javascript
   class Person {
   	constructor(name) {
   		this.name = name
   	}
   }
   
   var object = new Person("Sudheer")
   ```

   

7. 单例模式

   Singleton是一个只能实例化一次的对象。对其构造函数的重复调用返回相同的实例，这样可以确保它们不会意外创建多个实例。

   ```javascript
   var object = new function(){
   	this.name = "Sudheer"
   }
   ```

   

## 2.什么是原型链？

原型链用于基于现有对象构建新类型的对象。它类似于基于类的语言中的继承。

+ 对象实例上的原型可以通过Object.getPrototypeOf(object)或proto属性获得，而构造函数上的原型可以通过Object.prototype获得

## 3.call、apply、bind有什么区别？

call:  调用函数并绑定函数的调用对象(或是上下文),参数用','分隔传入

```javascript
var employee1 = {firstName: 'Haiyong',lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy',lastName: 'Baily'};

function invite(greeting1,greeting2) {
	console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName + ',' + 		greeting2)
}

invite.call(employee1,'Hello','How are you?')
invite.call(employee2,'Hello','How are you?')
```

apply:  调用函数并绑定函数的调用对象(或是上下文),参数数组传入

```javascript
var employee1 = {firstName: 'Haiyong',lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy',lastName: 'Baily'};

function invite(greeting1,greeting2) {
	console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName + ',' + 		greeting2)
}

invite.apply(employee1,['Hello','How are you?'])
invite.apply(employee2,['Hello','How are you?'])
```

bind: 返回一个新函数并绑定调用函数的对象(或是上下文)

```javascript
var employee1 = {firstName: 'Haiyong',lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy',lastName: 'Baily'};

function invite(greeting1,greeting2) {
	console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName + ',' + 		greeting2)
}

var inviteEmpolyee1 = invite.bind(employee1);
var inviteEmpolyee2 = invite.bind(employee2);
inviteEmpolyee1('Hello','How are you?');
inviteEmpolyee2('Hello','How are you?');
```

