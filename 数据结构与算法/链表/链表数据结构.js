function LineList() {
 let Node = function (element) {
   this.element = element;
   this.next = null;
 }
 let length = 0;
 let head = null;
 this.append = function (element) {
   let node = new Node (element),current;
   if (head === null) { //列表中的第一个节点
     head = node;
   } else {
     current = head;
     while (current.next) {//循环列表找到最后一项
       current = current.next;
     }
     current.next = node;//找到最后一项，将其next赋值为node，建立连接。
   }
   length++;//更新列表长度。
 }
 this.insert = function (position,element) {}
 this.removeAt = function (position) {}
 this.remove = function (element) {}
 this.isEmpty = function () {}
 this.size = function () {}
 this.getHead = function () {}
 this.toString = function () {}
 this.print = function() {}
}
