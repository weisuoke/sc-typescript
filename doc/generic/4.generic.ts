// 定义泛型的时候，可以一次定义多个类型参数
function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]]
}

let result4_1 = swap<string, number>(['金色小芝麻', 18]);
console.log(result4_1)