// 泛型别名

type Cart2<T> = { list: T[] } | T[];
let c1: Cart2<string> = { list: ['1'] }
let c2: Cart2<string> = ['1']