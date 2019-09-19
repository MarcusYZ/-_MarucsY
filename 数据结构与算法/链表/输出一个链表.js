  var obj1 = {
    name: 'obj1',
    next: obj2
  }
  var obj2 = {
    name: 'obj2',
    next: obj3
  }

  var obj3 = {
    name: 'obj3',
    next: null
  }

  function print(node) {
    var p = node;
    while (p) {
      console.log(p.name);
      p = p.next;
    }
  }
  print(obj1)

  function reverse(node) {
    var pNode = node;
    var pPre = null;
    var pNext;
    while (pNode) {
      pNext = pNode.next;
      pNode.next = pPre;
      pPre = pNode;
      pNode = pNext;
    }
    return pPre;
  }
  print(reverse(obj1))