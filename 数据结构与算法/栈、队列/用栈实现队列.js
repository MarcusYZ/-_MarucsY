var stack1 = [];
var stack2 = [];

function push(node) {
  return stack1.push(node);
}

function pop() {
  if (stack2.length !== 0) {
    return stack2.pop();
  } else {
    for (var i = 0; i < stack1.length; i++) {
      stack2.push(stack1.pop())
    }
    return stack2.pop();
  }

}