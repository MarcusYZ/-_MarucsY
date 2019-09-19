function isOdd(num) {
  return num % 2 == 1;
}

function isEven(num) {
  return num % 2 == 0;
}

function isSane(num) {
  return isEven(num) || isOdd(num);
}
var values = [7, 4, '13', -9, Infinity];
values.map(isSane);


// Infinity 是无穷大 % 2


parseInt(3, 8)

parseInt(3, 2)

parseInt(3, 0)




// 第二个是NaN , 2进制没有3


var a = [1, 2]
var b = [3, 4]
a + b //"1,23,4"

// 如果 + 的其中一个操作数是字符串,那么就执行字符串拼接,否则就执行数字加法

true - 1 === 0;
// 强制类型转换成 1 