// Object.defineProperty这个并不是es6的语法， 这个是给一个对象， 添加属性， 但是目前框架很多实用这个方法， 来实现数据劫持， 也就是数据双向绑定
// let obj = {
//   str: "hello swr"
// }
// obj.str = 'goodbye swr'
// console.log(obj.str) // 'goodbye swr'

let str = "swr"
let obj1 = {};
Object.defineProperty(obj1, 'name', {
  enumerable: true,
  configurable: true,
  get() {
    return str;
  },
  set(newValue) {
    str = newValue;
  }

})

console.log(obj1.name);