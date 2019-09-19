// 给定一个非负整数数组 A， A 中一半整数是奇数， 一半整数是偶数。

// 对数组进行排序， 以便当 A[i] 为奇数时， i 也是奇数； 当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。



// 示例：

// 输入：[4, 2, 5, 7]
// 输出：[4, 5, 2, 7]
// 解释：[4, 7, 2, 5]，[2, 5, 4, 7]，[2, 7, 4, 5] 也会被接受。

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (arr) {
  var arr1 = [];
  odd = 1;
  even = 0;
  arr.forEach(item => {
    if (item % 2 === 1) {
      arr1[odd] = item;
      odd += 2;
    } else {
      arr1[even] = item;
      even += 2
    }
  })
  return arr1;

};