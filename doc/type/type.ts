// Boolean 类型
let isDone: boolean = false;

// Number 类型
let count: number = 10;

// String 类型
let stringType: string = 'weisuoke';

// Array 类型
let list: number[] = [1, 2, 3]

// Enum 类型
// Enum - 1. 数字枚举
enum DirectionNumber {
  NORTH,
  SOUTH,
  EAST,
  WEST
}

let dir: DirectionNumber = DirectionNumber.NORTH;

// Enum - 2. 字符串枚举
enum DirectionString {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST'
}

// Enum - 3. 异构枚举
// 异构枚举的成员值是数字和字符串的混合
enum DirectionMix {
  A,
  B,
  C = 'C',
  D = 'D',
  E = 8,
  F
}

// Any 类型
// 在 TypeScript 中，任何类型都
let notSure: any = 666;

// Unknown 类型
// 对 value 变量的所有赋值都被认为是类型正确的，但是，当我们尝试将类型 unknown 的值赋值给其他类型会报错。
let value: unknown

// Tuple 类型
// 数组一般是由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值。这时候我们就可以使用元组。
let tupleType: [string, boolean];
tupleType = ['weisuoke', true];

// Void 类型
// void类型与any类型相反，它表示没有任何类型。当一个函数没有返回值，你通常会见到其返回值类型是void
function warnUser(): void {
  console.log("This is my warning message")
}

// Null 和 Undefined 类型
let u: undefined = undefined;
let n: null = null;
// NOTE: 默认情况下null和undefined是所有类型的子类型。
// 就是说你可以把null和undefined赋值给number类型的变量。然而，如果你指定了 --strictNullChecks 标记，null和undefined只能赋值给void和它们各自的类型

// Never 类型
// never 类型表示的是那些永不存在的值的类型
// never 类型是那些总是会抛出异常或根本就不会返回值的函数表达式或箭头函数表达式的返回值类型
function error(message: string): never {
  throw new Error(message)
}
