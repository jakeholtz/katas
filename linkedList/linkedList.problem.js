var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = this.makeNode(value);
  if (!this.head) {
    this.head = newNode;
  }
  if (this.tail) {
    this.head.next = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  } else {
    var removedHead = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return removedHead.value;
  }
};

LinkedList.prototype.contains = function(targetValue) {
  var currNode = this.head;
  while(!!currNode) {
    if(currNode.value === targetValue) {
      return true;
    }
    currNode = this.head.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  var node = {value: value, next: null};
  return node;
};


var list = new LinkedList();

module.exports.list = list;
module.exports.LinkedList = LinkedList;

// jhh 10/7/17