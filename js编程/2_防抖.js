const debounce = function (fn, delay = 500) {
  const timer = null;
  return (...args) => {
    clearTimeout(timer);
    setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}