interface LengthWidth {
  length: number;
}

// 我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束
function logger<T extends LengthWidth>(val: T) {
  console.log(val.length);  // 5
  return val;
}

logger('金色小芝麻')