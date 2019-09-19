const throttle = (fn, delay = 500) {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};
// 首先创建了一个flag标志位，初始值为true，进入闭包中让flag为false，
// 然后执行setTimeout中的回调函数，直到执行完毕了才能够进行下一次点击的效果从而实现节流。