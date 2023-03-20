# JavaScript设计模式
## 1、面向对象编程

### 1.1 JavaScript——灵活的语言
+ 对象的另一种形式——函数对象
```javascript
    var CheckObject = function() {};
    CheckObject.checkName = funcition() {
        //验证姓名
    }
    CheckObject.checkEmail = funcition() {
        //验证邮箱
    }
    CheckObject.checkPassword = function() {
        //验证密码
    }
```
+ 方法返回新对象——真假对象
```javascript
    var CheckObject = function() {
        return {
            checkName: function() {},
            checkEmail: function() {},
            checkPassword: function() {}
        }
    }
```
+ 构造函数创建对象——类
```javascript
    var CheckObject = function() {
        this.checkName = function() {}
        this.checkEmail = function() {}
        this.checkPassword = function() {}
    }
    var checkObj = new CheckObject()
    checkObj.checkName()
```
注意：每个对象都有自己的一套方法，这样可能会造成很大的开销。
+ 检测类——将共享的方法绑定在原型上(prototype)
```javascript
   //第一种方式 
   var CheckObject = function() {}
   CheckObject.prototype.checkName = function() {}
   CheckObject.prototype.checkEmail = function() {}
   CheckObject.prototype.checkPassword = function() {}

   //第二种方式
   var CheckObject = function() {}
   CheckObject.prototype = {
       checkName: function() {},
       checkEmail: function() {},
       checkPassword: function() {}
   }

   //创建实例调用原型对象上共享方法
   var a = new CheckObject()
   a.checkName()
```
+ 想不到的方法使用方法
```javascript
    //第一种方式
    var CheckObject = {
        checkName: function() {
            return this
        },
        checkEmail: function() {
            return this
        },
        checkPassword: function() {
            return this
        }
    }
    //调用时 可以链式调用
    CheckObject.checkName().checkEmail().checkPassword()

    //第二种方式
    var CheckObject = function() {}
    CheckObject.prototype = {
        checkName: function() {
            return this
        },
        checkEmail: function() {
            return this
        },
        checkPassword: function() {
            return this
        }
    }

    //调用时 需要创建实例
    var a = new CheckObject()
    a.checkName().checkEmail().checkPassword()
```
+ 函数的祖先——Function类
建议这样给原生对象Function添加方法
```javascript
    //抽象出统一添加方法的函数
    Function.prototype.addMethod = function(name,fn) {
        this[name] = fn
    }

    var methods = function ();
    //or
    var methods = new Function ();

    methods.addMethod('checkName',function() {

    })
    methods.addMethod('checkEmail',function() {

    })
    methods.addMethod('checkPassword',function() {

    })
    methods.checkName()
```
+ 链式添加方法
```javascript
    Function.prototype.addMethod = function(name,fn)  {
        this[name] = fn
        return this
    }
    //链式调用添加函数
    var methods = function() {}
    methods.addMethod('checkName',function() {}).addMethod('checkEmail',    function() {})

    //如果方法继续链式调用可以这样
    methods.addMethod('checkName',function() {
        return this
    }).addMethod('checkEmail',function() {
        return this
    })

    methods.checkName().checkEmail()
```
+ 类式调用方法
习惯使用类式调用方法的同学，可以这样改造
```javascript
    Function.prototype.addMethod = function(name,fn) {
        this.prototype.[name] = fn
        return this
    }

    //使用
    var Methods = function() {}
    Methods.addMethod('checkName',function() {
        return this
    }).addMethod('checkEmail',function() {
        return this
    })

    //需创建实例调用
    var m = new Methods() 
    m.checkName().checkEmail()
```

### 1.2 所写即所见——面向对象编程
+ 类的封装
```javascript
    var Book = function(id, bookname, price) {
        this.id = id;
        this.bookname = bookname;
        this.price = price
    }
    //为原型对象添加属性和方法
    //第一种方式
    Book.prototype.display = function() {

    }

    //或者第二种方式
    Book.prototype.display = function() {

    }

    //使用：创建类的实例对象
    var book = new Book(10,'JavaScript设计模式',50)
    console.log(book.bookname) //JavaScript设计模式
```

+ 属性和方法的封装
```javascript
    var Book = function(id, name, price) {
        //私有属性
        var num = 1;
        //私有方法
        function checkId() {

        }
        //特权方法:访问对象的私有属性和方法 权力较大
        this.getName = function() {}
        this.getPrice = function() {}
        this.setName = function() {}
        this.setPrice = function() {}

        //对象的公有属性
        this.id = id
        this.copy = function() {}；
        //构造器
        this.setName(name)
        this.setPrice(price)
    }

    //类静态公有属性和公有方法
    Book.isChinese = true
    Book.resetTime = function() {
        console.log('new Time')
    }
    //公有属性和方法
    Book.prototype = {
        //公有属性
        isJSBook: false,
        //公有方法
        display: function() {}
    }

    var b = new Book(11,'JavaScript设计模式',50)
    console.log(b.num) //undefined
    console.log(b.isJSBook) //false
    console.log(b.id) //11
    console.log(b.isChinese) //undefined
    console.log(Book.isChinese) //true
    Book.resetTime() // new Time
```