// A linked list is a list of nodes. The list has a head 
// and a tail node. Each node has a value and a pointer to
// the next node.

var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  }

  this.tail.next = node;
  this.tail = node;
}

LinkedList.prototype.removeHead = function() {
  var removed = this.head;
  this.head = this.head.next;
  return removed;

}

LinkedList.prototype.contains = function(target) {
  var tempList = this.head;
  while(tempList.head) {
    if(tempList.head.value === target) {
      return true;
    }
    tempList.head = tempList.head.next;
  }
  return false;
}

var Node = function(value) {
  this.value = value;
  this.next = null;
};