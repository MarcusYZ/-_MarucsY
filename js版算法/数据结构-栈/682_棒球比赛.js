var calPoints = function (ops) {
  var sum = []
  let pre1;
  let pre2;
  ops.forEach((item) => {
    console.log(item, "item")
    switch (item) {
      case 'C':
        if (sum.length) {
          sum.pop()
        }
        break
      case 'D':
        pre1 = sum.pop();
        sum.push(pre1, pre1 * 2);
        break
      case '+':
        pre1 = sum.pop();
        pre2 = sum.pop();
        sum.push(pre2, pre1, pre1 + pre2);
        break;
      default:
        item = parseInt(item)
        sum.push(item * 1);
    }
  })
  console.log(sum, "sum")
  return sum.reduce((total, num) => {
    return total + num
  })
};