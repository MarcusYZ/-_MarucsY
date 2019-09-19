// 实例很少的时候把输入变长

var canPlaceFlowers = function (flowerbed, n) {
  let result = 0,
    count = 0;
  flowerbed.push(0);
  flowerbed.unshift(0);
  for (let i = 1, len = flowerbed.length; i < len; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      result++;
    }
  }
  return result >= n ? true : false;
};