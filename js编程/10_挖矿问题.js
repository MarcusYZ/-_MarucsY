// 斐波那契
function feibonaqi(n) {
  if (n <= 2) {
    return n;
  }
  return feibonaqi(n - 1) + feibonaqi(n - 2);
}