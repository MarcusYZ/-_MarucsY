function objectFac() {
  const obj = new Object();
  const Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  const ret = Constructo.apply(obj,arguments);
  return typeof ret ==="object" ? ret: obj;
}