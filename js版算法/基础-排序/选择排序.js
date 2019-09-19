function charu() {


  for (let i = 0, min; i < arr.length; i++) {
    min = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < min) {
        let c = min;
        min = arr[j];
        arr[j] = c;
      }
    }
    arr[i] = min;
  }
  return arr;
}