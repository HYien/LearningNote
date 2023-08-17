## TypeScript
### TypeScript的优点
TypeScript通过类型检查工具可以提供错误信息，还可以提供代码补全功能。

### TypeScript常见类型
> 原始类型：string，number 和 boolean
> 数组(Array)
> any
> 变量上的类型注解(Type Annotations on Variables)
通过类型注解，显示指定变量类型
```typescript
  let myName: string = "Alice"
```
> 函数
声明函数时，可以声明参数类型注解。
```typescript
  function greet(name: string) {
    connsole.log("Hello, " + name.toUpperCase() + "!!")
  }
```
返回值类型注解(Return Type Annotations)
```typescript
  function getFavoriteNumber(): number {
    return 26
  }
```
匿名函数(Anonumous Functions) 
```typescript
  const names = ["Alice", "Bob", "Eve"]

  names.forEach(name => {
    console.log(name.toUppercase())
  })
```
> 对象类型
```typescript
  function printCoord(pt: {x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }

  printCoord({ x: 3, y: 7})

  // 可选属性
  function printName(obj: { first: string; last?: string }) {
    printName({ first: "Bob" });
    printName({ first: "Alice", last: "Alisson" })
    console.log(obj.last?.toUpperCase())
  }
```

> 联合类型
```typescript
  function printId(id: number | string) {
    console.log("Your ID is: " + id)
  }

  printId(101)
  printId("202")

  printId({ myID: 22342 })

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      console.log("Hello, " + x.join(" and "))
    } else {
      console.log("Welcome lone traveler " + x)
    }
  }
```

> 类型别名 (Type Aliases)

```typescript
  type Point = {
    x: number;
    y: number;
  }

  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x)
    console.log("The coordinate's y value is " + pt.y)
  }

  printCoord({ x: 100, y: 100})

  type ID = number | string
```

> 接口
```typescript
  interface Point {
    x: number;
    y: number;
  }

  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x)
    console.log("The coordinate's y value is " + pt.y)
  }

  printCoord({ x: 100, y: 100})
```

类型别名和接口，大部分时候可以任意选择。但接口的是可以扩展的。
```typescript
  interface Animal {
    name: string
  }

  interface Bear extends Animal {
    honey: boolean
  }

  const bear = getBear()
  bear.name
  bear.honey

  // type通过交集扩展
  type Animal = {
    name: string
  }

  type Bear = Animal & {
    honey: boolean
  }

  interface Window {
    title: string
  }

  interface Window {
    ts: TypeScriptAPI
  }

  const src = 'const a = "Hello World"'
  window.ts.transpileModule(src, {})

  // Type
  type Window = {
    title: string
  }
  // Error: Duplicate identifier 'Window'.
  // 创建后不能修改
  type Window = {
    ts: TypeScriptAPI
  }
```

> 类型断言
```typescript
  const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
  
  // 尖括号语法
  const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")
```
