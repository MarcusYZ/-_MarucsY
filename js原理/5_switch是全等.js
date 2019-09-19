function showCase(value) {
  switch (value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}
showCase(new String('A'));

// 这里的结果是默认的， 因为switch做的匹配是全等。

// 一个是string类型一个是对象类型所以不等