let maopao = (arr) => {
  for (let i = arr.length - 1; i > 0; i++) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j];
      if (tmp < arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}