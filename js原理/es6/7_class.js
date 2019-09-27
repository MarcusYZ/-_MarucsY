class Person {
  constructor() {}
  eat() {

  }
}

class Child extends Person {
  constructor() {
    super();
  }
}

// es5继承

function Parent(name) {
  this.parent = name;
}
Parent.prototype.say = function () {
  console.log(`${this.parent}`);
}

function Child(name, parent) {
  Parent.call(this, parent);
  this.child = name;
}
Child 