// 调用签名 Call Signatures:
// 函数除了可以被调用，自己也是可以有属性值。然而函数表达式并不能支持声明属性，如果我们想描述一个带有属性的函数，我们可以在一个对象类型中写一个调用签名（call signature）

type DescriptionFunction = {
  description: string,
  age: number,
  (someArg: number): boolean
}

function doSomething(fn: DescriptionFunction) {
  console.log(fn.description + " returned " + fn(6))
}

// https://stackoverflow.com/questions/48967142/typescript-what-are-call-signature-of-an-object-literal-and-how-can-they-be-use
let testFn: DescriptionFunction = Object.assign(function(time: number) {
  return !!time
}, {
  description: 'description',
  age: 32
})

doSomething(testFn)