// 方法一：利用JSON.stringify和JSON.parse
let swr = {
  name: "邵威儒",
  age: 28,
  pets: ['小黄']
}

let swrcopy = JSON.parse(JSON.stringify(swr))
console.log(swrcopy) // { name: '邵威儒', age: 28, pets: [ '小黄' ] }
// 此时我们新增swr的属性
swr.pets.push('旺财')
console.log(swr) // { name: '邵威儒', age: 28, pets: [ '小黄', '旺财' ] }
// 但是swrcopy却不会受swr影响
console.log(swrcopy) // { name: '邵威儒', age: 28, pets: [ '小黄' ] }
// 这种方式进行深拷贝，只针对json数据这样的键值对有效
// 对于函数等等反而无效，不好用，接着继续看方法二、三。

// 方法二：
function deepCopy(fromObj, toObj) { // 深拷贝函数
  // 容错
  if (fromObj === null) return null // 当fromObj为null
  if (fromObj instanceof RegExp) return new RegExp(fromObj) // 当fromObj为正则
  if (fromObj instanceof Date) return new Date(fromObj) // 当fromObj为Date

  toObj = toObj || {}

  for (let key in fromObj) { // 遍历
    if (typeof fromObj[key] !== 'object') { // 是否为对象
      toObj[key] = fromObj[key] // 如果为普通值，则直接赋值
    } else {
      if (fromObj[key] === null) {
        toObj[key] = null
      } else {
        toObj[key] = new fromObj[key].constructor // 如果为object，则new这个object指向的构造函数
        deepCopy(fromObj[key], toObj[key]) // 递归          
      }
    }
  }
  return toObj
}

function deepCopy(fromObj, toObj) { // 深拷贝函数
  // 容错
  if (fromObj === null) return null // 当fromObj为null
  if (fromObj instanceof RegExp) return new RegExp(fromObj) // 当fromObj为正则
  if (fromObj instanceof Date) return new Date(fromObj) // 当fromObj为Date

  toObj = toObj || {}

  for (let key in fromObj) { // 遍历
    if (typeof fromObj[key] !== 'object') { // 是否为对象
      toObj[key] = fromObj[key] // 如果为普通值，则直接赋值
    } else {
      if (fromObj[key] === null) {
        toObj[key] = null
      } else {
        toObj[key] = new fromObj[key].constructor // 如果为object，则new这个object指向的构造函数
        deepCopy(fromObj[key], toObj[key]) // 递归          
      }
    }
  }
  return toObj
}

let dog = {
  name: "小白",
  sex: "公",
  firends: [{
    name: "小黄",
    sex: "母"
  }]
}

let dogcopy = deepCopy(dog)


// 方法三：
let dog = {
  name: "小白",
  sex: "公",
  firends: [{
    name: "小黄",
    sex: "母"
  }]
}

function deepCopy(obj) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  let newObj = new obj.constructor
  for (let key in obj) {
    newObj[key] = deepCopy(obj[key])
  }
  return newObj
}

let dogcopy = deepCopy(dog)
dog.firends.push({
  name: "小红",
  sex: "母"
})
console.log(dogcopy)