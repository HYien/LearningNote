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

> 非空断言操作符
```typescript
  function liveDangerously(x?: number | null) {
    console.log(x!.toFixed())
  }
```

> 枚举
```typescript
  enum UserResponse {
    No = 0,
    Yes = 1
  }
```

> 类型收窄
```typescript
  function padLeft(padding: number | string, input: string) {
    if (typeof padding === 'number') {
      return new Array(padding + 1).join(" ") + input
    }
    return padding + input
  }

  function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {
      for (const s of strs) {
        console.log(s)
      }
    } else if (typeof strs ==== 'string') {
      console.log(strs)
    }
  }

  // in操作符收窄
  type Fish = { swim: () => void }
  type Bird = { fly: () => void }

  function move(animal: Fish | Bird) {
    if ("swim" in animal) {
      return animal.swim()
    }

    return animal.fly()
  }

  // instanceof 收窄
  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString())
    } else {
      console.log(x.toUpperCase())
    }
  }

  interface Circle {
    kind: "circle";
    radius: number;
  }
  
  interface Square {
    kind: "square";
    sideLength: number;
  }
  
  interface Triangle {
    kind: "triangle";
    sideLength: number;
  }
  
  type Shape = Circle | Square | Triangle;
  
  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      default:
        const _exhaustiveCheck: never = shape;
        // Type 'Triangle' is not assignable to type 'never'.
        return _exhaustiveCheck;
    }
  }
```

> 函数类型表达式
```typescript
type GreetFunction = (a: string) => void
function greeter(fn: GreetFunction) {

}

// 函数签名
type DescribableFunction = {
  description: string,
  (someArg: number): boolean
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned' + fn(6))
}

// 泛型函数
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}
```

> 剩余参数
```typescript
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x)
}

const a = multiply(10, 1, 2, 3, 4)
```

> 参数解构
```typescript
type ABC = { a: number; b: number; c: number }
function sum({a, b, c}: ABC) {
  console.log(a + b + c)
}
```

> 对象类型
```typescript
interface Person {
  name: string;
  age: number
}

function greet(person: Person) {
  return "Hello" + person.name
}

// 可选属性
interface PaintOption {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOption) {

}

const shape = getShape()
paintShape({ shape })
paintShape({ shape, xPos: 100 })
paintShape({ shape, yPos: 100 })

// 只读readonly属性
interface SomeType {
  readonly prop: string
}

function doSomething(obj: SomeType) {
  obj.prop = "hello";
  // Cannot assign to 'prop' because it is a read-only property.
}
```

> 属性继承
```typescript
  interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }

  interface AddressWithUnit extends BasicAddress {
    unit: string
  }

  // 多个继承
  interface Colorful {
    color: string
  }
  interface Circle {
    radius: number
  }

  interface ColorfulCircle extends Colorful, Circle {}

  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  }

  // 交叉类型
  type ColorfulCirCle = Colorful & Circle

  // 泛型
  interface Box<Type> {
    contents: Type;
  }

  interface Apple {

  }

  type AppleBox = Box<Apple>
```

> 元组类型
```typescript
  type StringNumberPair = [string, number]
  function doSomething(pair: [string, number]) {
    // 解构
    const [inputString, hash] = pair
    console.log(inputString)
    console.log(hash)
  }

  doSomething(["hello", 42])

  type Either2dOr3d = [number, number, number]

  function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord
    const z: number | undefined
  }
```

> 泛型
```typescript
function identity<Type>(arg: Type): Type {
  return arg
}

let output = identity<string>("myString")

interface GenericIdentityFn<Type> {
  (arg: Type): Type
}

function identity<Type>(arg: Type): Type {
  return arg
}

let myIdentity: GenericIdentityFn<number> = identity
```

> 泛型约束
```typescript
interface Lengthwise {
  length: number
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length)
  return arg
}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
```

> 在泛型中使用类类型
```typescript
class BeeKeeper {
  hasMask: boolean = true
}

class ZooKeeper {
  nametag: String = "Mikle"
}

class Animal {
  numLegs: number = 4
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper()
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper()
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask
```

> keyof 类型操作符
```typescript
type Point = { x: number; y: number }
type P = keyof Point // x | y

type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish // type A = number

type Mapish = { [k: string]: boolean}
type M = keyof Mapish // type M = string | number

// 数字字面量联合类型
const NumericObject = {
  [1]: '1',
  [2]: '2',
  [3]: '2',
}

type result = keyof typeof NumericObject // type result = 1 | 2 | 3
```

> typeof 类型操作符
```typescript
console.log(typeof "Hello world")
// string
let s = "hello"
let n: typeof s

function f() {
  return { x: 10, y: 3 }
}

type P = ReturnType<typeof f>

// type P = {
    // x: number;
    // y: number;
// }

const person = {name: "kevin", age: "18"}
type Kevin = typeof person
// type Kevin = {
    // name: string;
    // age: string;
// }

// 对函数使用typeof
function identity<Type>(arg: Type): Type {
  return arg
}

type result = typeof identity
// type result = <Type>(arg: Type) => Type
```

> 索引访问类型
```typescript
  type Person = { age: number; name: string; alive: boolean }
  type Age = Person["age"]

  type I1 = Person["age" | "name"]
  // type I1 = string | number

  type I2 = Person[keyof Person]
  // type I2 = string | number | boolean

  type AliverOrName = "alive" | "name"
  type I3 = Person[AliverOrName]
  // type I3 = string | boolean

  const MyArray = [
    {
      name: "Alice",
      age: 15
    },
    {
      name: "Bob",
      age: 23
    }
  ]

  type Person = typeof MyArray[number]
  // type Person = {
  //   name: string;
  //   age: number;
  // }

  type Age = typeof MyArray[number]["age"]
  // type Age = number

  type Age2 = Person["age"]
  // type Age2 = number
```

> 条件类型(Conditional Types)
```typescript
interface Animal {
  live(): void
}

interface Dog extends Animal {
  woof(): void
}

type Example1 = Dog extends Animal ? number : string
// type Example1 = number

type Example2 = RegExp extends Animal ? number : string
// type Example2 = string

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented"
}

let a = createLabel("typescript")
let b = createLabel(2.8)
let c = createLabel(Math.random() ? "hello" : 42)

type MessageOf<T extends {message: unknown }> = T["message"]

interface Email {
  message: string
}

type EmailMessageContents = MessageOf<Email>
// type EmailMessageContents = string
```

> 映射类型
```typescript
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse
}

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
}
```

> 模板字面量类型
```typescript
type World = "world"

type Greeting = `hello ${World}`
```

> 类
```typescript
class Point {
  x: number;
  y: number;
}

const pt = new Point()
pt.x = 0
pt.y = 0

class BadGreeter {
  name: string;
  setName(): void {
    this.name = '123'
  }

  constructor() {
    this.setName()
  }
}

class OKGreeter {
  name!: string
}

class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
}

class Base {
  k = 4
}

class Derived extends Base {
  constructor() {
    console.log(this.k)
    super()
  }
}

class Greeter {
  public greet() {
    console.log("Hello," + this.getName())
  }

  protected getName() {
    return "hi"
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    console.log("Howdy, " + this.getName())
  }
}

const g = new SpecialGreeter()
g.greet()
g.getName() // is protected
```

> 类的静态成员
```typescript
class MyClass {
  static x = 0
  static printX() {
    console.log(MyClass.x)
  }
}
console.log(MyClass.x)

MyClass.printX()
```