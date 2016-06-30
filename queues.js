// Queues are used for organizing data in a way that 
// allows for the first item in the queue to be the first
// item out of the queue. Think of it as just like a line
// at the movie theater.

var Queue = function () {
  this.newSize = 0;
  this.oldSize = 0;
  this.storage = {};
}

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.newSize] = value;
  this.newSize++
}

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    var removed = this.storage[this.oldSize];
    delete this.storage[this.oldSize];
    this.oldSize++
    return removed;
  } else {
    return 'Cannot dequeue from an empty queue'
  }
};
module.exports = Queue

