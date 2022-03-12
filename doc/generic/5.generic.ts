// 默认泛型类型

// 在 TypeScript 2.3 以后，我们可以为泛型中的类型指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认值就会起作用。

function createArray5<T = number>(length: number, value: T): Array<T> {
  let result: Array<T> = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let result5_1 = createArray5(3, 'x');
console.log(result5_1)
let result5_2 = createArray5(3, 3);
console.log(result5_2)