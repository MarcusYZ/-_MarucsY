for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
// 这里setTimeout是异步的



for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, 1000 * i)
  })(i)
}