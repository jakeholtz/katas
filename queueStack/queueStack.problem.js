/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  var contents = [];
  var length = 0;

  // add an item to the top of the stack
  this.push = function(item) {
    contents[length++] = item
  };

  // remove an item from the top of the stack
  this.pop = function() {
    var poppedItem = contents[--length];
    delete contents[length];
    return poppedItem;
  };

  // return the number of items in the stack
  this.size = function() {
    return length;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item) {
    inbox.push(item)
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    if (!outbox.size()) {
      for (var i = inbox.size(); i > 0; i--) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function() {
    return inbox.size() + outbox.size();
  };
};
