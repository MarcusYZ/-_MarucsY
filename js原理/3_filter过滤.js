var ary = [0, 1, 2];
ary[10] = 10;
ary.filter(function (x) {
  return x === undefined;
});
// filter 会跳过空元素，所以结果是[];