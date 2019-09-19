console.log(0b111110111 === 503); //二进制
console.log(0o767 === 503); //八进制

// 在严格模式下就不能
(function () {
  'use strict';
  console.log(0b11 === 2);
})()