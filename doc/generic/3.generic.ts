// 泛型接口

// 使用泛型接口来定义对象的形状
interface Cart<T> {
  list: T[]
}

let cart: Cart<number> = {
  list: [1, 2, 3]
}

// 使用含有泛型的接口来定义函数的形状
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc<string>;
createArray3 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let result3_1 = createArray3(3, 'x');
console.log(result3_1);  // ['x', 'x', 'x']