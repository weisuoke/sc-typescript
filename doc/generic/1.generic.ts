// 泛型函数
function createArray<T>(length: number, value: T): Array<T> {
  let result: Array<T> = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let result = createArray<string>(3, 'x');
console.log(result)
let result2 = createArray<number>(3, 3);  // T 就相当于一个参数，传什么就是什么。
console.log(result2)