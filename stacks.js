// Stacks are a useful when you need to keep track of some organized list
// Data can be pushed and popped to the stack.
// First in last out.


var Stack = function () {
  this.items = 0;
  this.storage = {};
};

Stack.prototype.size = function () {
  return this.items;
}

Stack.prototype.push = function(value) {
  this.storage[this.items] = value;
  this.items++;
}

// Incase the user tries to pop something from the stack
// conditional prevents the stack from showing negatives
Stack.prototype.pop = function() {
  if (this.items > 0 ) {
    this.items--;
    var removed = this.storage[this.items];
    delete this.storage[this.items];
    return removed;
  }
  return 'Cannot pop from an empty stack';
}


