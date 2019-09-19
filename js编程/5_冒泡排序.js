function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    let complete = true;
    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[j]] = [array[j], array[i]]
        complete = false;
      }
    }
    if (complete) {
      break;
    }
  }
  return array;
}