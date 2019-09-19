// 电话号码的字母组合 
// 重点是找规律
// 两个先组合计算 然后再用结果 递归和下一个组合计算。
var letterCombinations = function (digits) {
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  var num = digits.split('');
  var code = [];
  num.forEach(item => {
    code.push(map[item]);
  })
  if (code.length === 0) return code;
  if (code.length === 1) return code.join().split('');
  let comb = (arr) => {
    let tmp = [];
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, tmp);
    if (arr.length > 1) {
      comb(arr);
    } else {
      return tmp;
    }
    return arr[0];
  }
  return comb(code);
};