/**
 * @param {number[]} nums
 * @return {number}
 */
// 自己写排序
var maximumGap = function (arr) {
  if (arr.length < 2) return 0;
  var max = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j];
      if (tmp < arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    if (i = arr.length - 3) {
      var maxValue = arr[arr.length - 1] - arr[arr.length - 2];
      if (maxValue > max) {
        max = maxValue;
      }
    }
  }
  return max
};