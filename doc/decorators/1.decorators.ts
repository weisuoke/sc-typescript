// 类装饰器在类声明之前声明，用来监视、修改或替换类定义
namespace a {
  // 当装饰器作为修饰类的时候，会把构造函数传递进去
  function addNameEat(constructor: Function) {
    constructor.prototype.name = "zhufeng";
    constructor.prototype.eat = function () {
      console.log("eat");
    }
  }

  @addNameEat
  class Person {
    name!: string;
    eat!: Function;
    constructor() {
    }
  }

  let p: Person = new Person();
  console.log(p.name);
  p.eat()
}

namespace b {
  // 还可以使用装饰器工厂
  function addNameEatFactory(name: string) {
    return function (constructor: Function) {
      constructor.prototype.name = name;
      constructor.prototype.eat = function () {
        console.log("2.eat");
      }
    }
  }

  @addNameEatFactory('2.zhufeng')
  class Person {
    name!: string;
    eat!: Function;
    constructor() {
    }
  }

  let p: Person = new Person();
  console.log(p.name);
  p.eat();
}

namespace c {
  // 还可以替换类，不过替换的类要与原结构相同
  function enhancer(constructor: Function) {
    return class {
      name: string = "jiagou";
      eat() {
        console.log("吃饭饭")
      }
    }
  }

  @enhancer
  class Person {
    name!: string;
    eat!: Function;
    constructor() {
    }
  }

  let p: Person = new Person();
  console.log(p.name);
  p.eat();
}