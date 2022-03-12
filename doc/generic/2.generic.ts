// 泛型类
class MyArray<T> {
  private list: T[] = []
  add(val: T) {
    this.list.push(val);
  }
  getMax(): T {
    let result: T = this.list[0]
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] > result) {
        result = this.list[i]
      }
    }
    return result;
  }
}

let arr = new MyArray<number>();
arr.add(1);
arr.add(2);
arr.add(3);
let result3 = arr.getMax();
console.log(result3)