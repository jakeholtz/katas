/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  var storage = [];
  var length = 0;
  
  // add an item to the top of the stack
  this.push = function() {

    storage[length++] = arguments[0];
      };

  // remove an item from the top of the stack
  this.pop = function() {

    if (length) {
      var value = storage[--length];
      delete storage[length];
      return value;
    }
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
  this.enqueue = function() {

    inbox.push.apply(inbox, arguments);
        // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {

    if (outbox.size() === 0) {
      while (inbox.size() !== 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
        // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function() {

    return inbox.size() + outbox.size();
        // TODO: implement `size`
  };
};
