let likeArr = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};

console.log(Array.from(likeArr));

//1.  Array.from  可以把伪数组变成数组；
// 2. reduce 第一次参数是前一个值， 第二个参数是后一个值， 第三个参数是index，第四个参数是数组
var a = [1, 2, 3];
a.reduce(function (pre, next, currentIndex, arr) {
  console.log(currentIndex, arr);
  pre + next;
})
// 3. forEach 直接拿数组的值
// 4. map映射 可以把数组返回成一个映射后的数组
// 5. find 查找，查找到后不再唏嘘寻找，找不到就undefined，找到就返回并且停止。
// 6. 判断是否满足条件
var arr6 = [1, 2, 3];
var a6 = arr6.every(item => {
  return typeof item === "number"
});
console.log(a6);
// 7. some 判断是否有一个满足条件
// 8. filter 如果返回为false就过滤。
var arr8 = [1, 2, 3, "你好"];
var a8 = arr8.filter(item => typeof item === "number");
console.log(a8)
// 9. include 基本和 some一样
var arr9 = [1, 2, 3, "string"];
var a9 = arr9.includes("string");
console.log(a9);