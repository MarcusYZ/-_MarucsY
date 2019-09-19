// 1 使用对象代替 if 及 switch
let name = 'lisi';
let obj = {
  zhangsan: 21,
  lisi: 18,
  wangwu: 12
};

let age = obj[name] || 18;

// 以上这种技巧适用于循环判断一次赋值的情况，如果判断过后有较多处理逻辑的还需要使用 if 或 switch 等方法。

// 2. 使用 Array.from 快速生成数组

let hours = [];

for (let i = 0; i < 24; i++) {
  hours.push(i + '时');
}

let hours = Array.from({
  length: 24
})

let hourss = Array.from({
  length: 24
}, (value, index) => index + '时')

// 3. 使用 router.beforeEach 来处理跳转前逻辑
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页
const Home = (resolve => {
  require.ensure(['../views/home.vue'], () => {
    resolve(require('../views/home.vue'))
  })
})

let base = `${process.env.BASE_URL}`;

let router = new Router({
  mode: 'history',
  base: base,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  }, ]
})

router.beforeEach((to, from, next) => {
  let title = to.meta && to.meta.title;

  if (title) {
    document.title = title; // 设置页面 title
  }

  if (to.name === 'home') {

    // 拦截并跳转至 page2 单页，$openRouter 方法在第 5 节中封装
    Vue.$openRouter({
      name: 'page2'
    });
  }

  next();
})

export default router

// 4. 使用v-if优化页面

// 在vue页面中，一些模块需要用户主动触发才会显示，我们可以使用v-if来进行按需渲染
// 没必要一进入页面就渲染所有的模块。比如