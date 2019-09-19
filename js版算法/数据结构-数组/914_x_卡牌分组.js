// 给定一副牌， 每张牌上都写着一个整数。

// 此时， 你需要选定一个数字 X， 使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (arr) {
  if (arr.length === 1) return false
  arr.sort();
  console.log(arr, "arr");
  let min = Number.MAX_SAFE_INTEGER;
  let dst = [];
  let result = true;
  //循环遍历输入数组第一个数字到临时数组里
  // 然后临时数组下一个数如果和它相同就继续输入临时数组
  // 如果不同，那么就要计算临时数组的长度，如果比 最小值小就把最小值替换
  // 并且把零食数组放到dist中。清除临时数组继续进行比较，并且让下一个数从没有遍历到的数字开始。
  // 遍历dst数组，要求每一个数组的长度都是最小值的倍数。
  for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
    tmp.push(arr[i]);
    for (let j = i + 1; i < len - 1; j++) {
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
      } else {
        if (min > tmp.length && tmp.length >= 2) {
          min = tmp.length;
        }
        dst.push([].concat(tmp));
        tmp.length = 0; //清除数组
        i = j;
        break;
      }
    }
  }
  console.log(min, "1");
  console.log(dst, "2");
  dst.every(item => {

    if (item.length % min !== 0 || item.length == 1) {
      result = false;
      return false
    }
  })
  return result
};