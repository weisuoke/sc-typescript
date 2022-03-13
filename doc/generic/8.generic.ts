// 泛型的工具类型
interface Person {
  name: string,
  age: number
}

const sem: Person = { name: 'semlinker', age: 30 };

console.log(typeof sem)

type Sem = typeof sem