// proxy代理也可以数据劫持

// 跟Object.defineProperty不同，Proxy在数据外层套了一个壳然后通过这层壳访问内部的数据

let dog = {
  name: "小黄",
  friends: [{
    name: "小红",
  }]
}

let proxy = new Proxy(dog, {
  get(target, property) {
    console.log('get被检测到了');
    return target[property];
  },
  set(target, property, value) {
    console.log("set被检测到了"),
      Reflect.set(target, property, value);
    // target[propery]=value 可以用上面的语法代替
  }
})
proxy.name = "小明"


// 那么我们该怎样实现深度的数据劫持呢？
let dog = {
  name: "小黄",
  firend: {
    name: "小红"
  }
}

// 我们首先写一个set方法，希望是通过这样来调用
// set(dog.firend, funtion(obj) {
//   console.log(obj) // { name:"小红" }  回调函数中的obj代表的是dog.firend的对象
// })
// 实现
// let dog = {
//   name: "小黄",
//   firend: {
//     name: "小红"
//   }
// }

function set(obj, callback) {
  let proxy = new Proxy(obj, {
    set(target, property, value) {
      target[property] = value
    }
  })
  // 最后把proxy传给我们的回调函数
  callback(proxy)
}

set(dog.firend, function (obj) {
  console.log(obj) // { name:"小红" } 实际就是从set函数中传出来的proxy对象
})