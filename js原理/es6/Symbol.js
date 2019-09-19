var a = Symbol();

// Symbol()会生成一个独一无二的值

let s1 = Symbol.for("foo")

// 可以生成一个唯一标识，通过Symbol.keyFor 把表示找出来