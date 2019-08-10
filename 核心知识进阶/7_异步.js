function red() {
    console.log('red');
}
function green() {
    console.log("green");
}
function yellow() {
    console.log("yellow");
}
// 回调方案
const task = (timer, light, callback) => {
    setTimeout(()=> {
        if (light ==="red") {
            red();
        }
        else if (light ==="yellow") {
            yellow();
        }
        else if (light === "green") {
            green();
        }
         callback()
    },timer)
}

task (3000,'red',()=> {
    task(1000,"green",()=>{
        task(3000,'yellow',Function.prototype)
    })
})

// promise方案
function red() {
    console.log('red');
}
function green() {
    console.log("green");
}
function yellow() {
    console.log("yellow");
}
const task = (timer, light) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') {
                red()
            }
            else if (light === 'green') {
                green()
            }
            else if (light === 'yellow') {
                yellow()
            }
            resolve()
        }, timer)
    })

const step = () => {
    task(3000, 'red')
        .then(() => task(1000, 'green'))
        .then(() => task(2000, 'yellow'))
        .then(step)
}

step()
// await/asynce方案
const taskRunner = async() => {
    await task(3000,'red');
    await task(3000,"green");
    await task(3000,"yellow");
}

taskRunner();
// 一个实战 方案

// 一步一步制造一个较为复杂的场景，贴近真实环境，在实战中将异步操作用到极致。

// 创建一个loadImg加载图片的函数
const loadImg = urlId => {
   const url = `http://www.image.com/${urlId}`
   
   return  new Promise ((resolve,reject) => {
       const img = new Image()
       img.onerror = function () {
          reject(urlId)          
       }
       img.onload = function() {
          resolve (urlId)
       }
       img.src = url;
   })
}
const urlIds =[1,2,3,4,5];

// urlIds.reduce((prevPromise, urlId) => {
//     return prevPromise.then(()=> loadImg(urlId))
// })

// const loadImgOneByOne = index => {
//     const length = urlIds.length 
//     loadImg(urlIds[index]).then(()=> {
//         if(index ===length-1) {
//             return
//         }
//         else {
//             loadImgOneByOne(++index);
//         }
//     } )
// }
// loadImgOneByOne(0);
const loadImgOneByOne = async () => {
    for(i of urlId) {
        await loadImg(urlIds[i])
    }
}
loadImgOneByOne();
// 如果想要一次性发出
const promiseArray =urlIds.map(urlId => loadImg(urlId))

Promise.all(promiseArray)
    .then(()=> {
        console.log('finish load all')
    })
    .catch(()=> {
        console.log('promise all catch')
    })
// 如果想要控制并发
const loadByLimit = (urlIds, loadImg, limit) => {
    const urlIdsCopy = [...urlIds]
    if(urlIdsCopy.length <=limit) {
        const promiseArray =urlIds.map(urlId => loadImg(urlId))
        return Promise.all(promiseArray)
    }
}
const promiseArray = urlIdsCopy.splice(0, limit).map(urlId => loadImg(urlId))
urlIdsCopy.reduce(
    (prevPromise, urlId) => 
    prevPromise
        .then(() => Promise.race(promiseArray))
        .catch(error => {console.log(error)})
        .then(resolvedId => {
            let resolvedIdPostion =  promiseArray.findIndex(id => resolvedId ===id)
            promiseArray.splice(resolvedIdPostion,1)
            promiseArray.push(loadImg(urlId))
        })
        ,
        Promise.resolve()
    )
    .then(()=> {
        Promise.all(promiseArray)
    })


setTimeout(() => {
    console.log('setTimeout block')
},100)

while (true) {}

console.log('end here');
// 异步解决方案
setTimeout(()=> {
    while(true) {

    }
},0)
console.log('end');
// 对于一些很庞大的行为我们把它们放到异步中先去执行同步代码

const t1 = new Date()
setTimeout(() => {
    const t3 = new Date()
    console.log('setTimeout block');
    console.log('t3 -t1 =', t3-t1)
},100)

let t2 = new Date(0)
while (t2 - t1 < 200) {
    t2 = new Date()
}
console.log('end here');
// 尽管setTimeout只会暂停100毫秒但由于while会执行200毫秒，所以异步至少也要到200毫秒执行，其实是过了100毫秒之后才会
// 把任务插入到异步队列中
setTimeout(() => {
    console.log('here 1')
}, 1)

setTimeout(() => {
    console.log('here 2')
}, 0)
// 最小延迟为4毫秒

console.log('start here');
new Promise ((resolve, reject) => {
    console.log('first promise constructor')
    resolve()
})
    .then(()=> {
        console.log('first promise then')
        return new Promise ((resolve, reject) => {
            console.log('second promise')
            resolve(0)
        })
        .then(()=> {
            console.log('second promise then')
        })
    })
    .then(()=> {
        console.log("another first promise then")
    })
console.log('end here');

// 首先是start here,然后运行promise内的代码
// 然后继续执行同步代码 end here
// 然后执行异步队列中的逻辑
// 然后会执行新生成的promise的then然后继续到外层执行第一个promise的then

console.log('start here');
const foo = () => (new Promise((resolve,reject) => {
    console.log("first Promise");
    let promise1 = new Promise((resolve, reject)=> {
        console.log('second promise');
        setTimeout (() => {
            console.log('setTimeout here');
            resolve()
        },0)
        resolve('promise1');
    })
    resolve('promise0');
    promise1.then(arg => {
        console.log(arg);
    })
}))
   foo().then(arg => {
       console.log(arg)
   }) 
console.log('end here')
