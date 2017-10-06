// /*
//  * Implement a linked list using the pseudoclassical instantiation pattern.
//  *
//  * Your linked list should have methods called "addToTail", "removeHead", and "contains."
//  *
//  */
//
// // EXAMPLE USAGE:
// // var list = new LinkedList();
// // list.tail;         //yields 'null'
// // list.addToTail(4);
// // list.addToTail(5);
// // list.head.value;   //yields '4';
// // list.contains(5);  //yields 'true';
// // list.contains(6);  //yields 'false';
// // list.removeHead(); //yields '4';
// // list.tail.value;   //yields '5';
// // list.removeHead(); //yields '5';
// // list.removeHead(); //yields 'null';
//
//
// var LinkedList = function() {
//   //fill me in!
// };
//
// //write methods here!
//
// LinkedList.prototype.addToTail = function(
// ) {
// };
//
// LinkedList.prototype.removeHead = function() {
// };
//
// LinkedList.prototype.contains = function(
// ) {
// };
//
// LinkedList.prototype.makeNode = function(
// ) {
// };
//
// var LinkedList = function() {
//
// };

var LinkedList = function() {
  this.size = 0;
  this.head = null;
  this.tail = null;
};


LinkedList.prototype.addToTail = function(newVal) {
  var newNode = this.makeNode(newVal);
  if (this.size === 0) {
    this.head = this.tail = newNode;
    this.size++;
  } else if (this.size === 1) {
    this.tail = newNode;
    this.head.next = newNode;
    this.size++;
  } else if (this.size > 1) {
    var oldTail = this.tail;
    this.tail = newNode;
    this.tail.next = oldTail;
  }
};

LinkedList.prototype.removeHead = function() {
  var oldHead = this.head;
  if (this.size === 1) {
    this.head = this.tail = null;
    this.size--;
  } else if (this.size > 1) {
    this.head = this.head.next
    this.size--;
  }

  if(!!oldHead) {
    return oldHead.value;
  } else {
    return null;
  }

};

LinkedList.prototype.contains = function(target) {
  var node = this.head;
  while(!!node) {
    if(node.value === target) {
      return true;
    }
    node = node.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  var node = {value: value, next: null};
  return node;
};

var list = new LinkedList();
list.tail;         //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.head.value;   //yields '4';
list.contains(5);  //yields 'true';
list.contains(6);  //yields 'false';
list.removeHead(); //yields '4';
list.tail.value;   //yields '5';
list.removeHead(); //yields '5';
list.removeHead(); //yields 'null';

describe('LinkedList', function() {
  it('should exist', function() {
    should.exist(LinkedList);
  });

  it('should be a function', function() {
    LinkedList.should.be.a.Function;
  });

  it('should be implemented using the pseudoclassical pattern', function() {
    LinkedList.prototype.addToTail.should.be.a.Function;
    LinkedList.prototype.removeHead.should.be.a.Function;
    LinkedList.prototype.contains.should.be.a.Function;
  });

  it('should designate a new tail when new nodes are added', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.tail.value.should.equal(4);
    list.addToTail(5);
    list.tail.value.should.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.head.value.should.equal(4);
    list.removeHead();
    list.head.value.should.equal(5);
  });

  it('should remove the head and tail from the list when removeHead is called and there is only one element present', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.head.value.should.equal(4);
    list.tail.value.should.equal(4);
    list.removeHead();
    should.not.exist(list.head);
    should.not.exist(list.tail);
  });

  it('should return the value of the removed head when removeHead is called', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.head.value.should.equal(4);
    list.tail.value.should.equal(4);
    var returnValue = list.removeHead();
    returnValue.should.equal(4);
  });

  it('should return null when removeHead is called on an empty list', function() {
    var list = new LinkedList();
    var returnValue = list.removeHead();
    should.equal(returnValue, null);
  });

  it('should contain a value that was added', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.contains(4).should.be.true;
    list.contains(5).should.be.true;
    list.contains(6).should.be.false;
  });

  it('should not contain a value that was removed', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.removeHead();
    list.contains(4).should.be.false;
  });

});




// /*
//  * Implement a linked list using the pseudoclassical instantiation pattern.
//  *
//  * Your linked list should have methods called "addToTail", "removeHead", and "contains."
//  *
//  */
//
// // EXAMPLE USAGE:
// // var list = new LinkedList();
// // list.tail;         //yields 'null'
// // list.addToTail(4);
// // list.addToTail(5);
// // list.head.value;   //yields '4';
// // list.contains(5);  //yields 'true';
// // list.contains(6);  //yields 'false';
// // list.removeHead(); //yields '4';
// // list.tail.value;   //yields '5';
// // list.removeHead(); //yields '5';
// // list.removeHead(); //yields 'null';
//
//
// var LinkedList = function() {
//   //fill me in!
// };
//
// //write methods here!
//
// LinkedList.prototype.addToTail = function(
// ) {
// };
//
// LinkedList.prototype.removeHead = function() {
// };
//
// LinkedList.prototype.contains = function(
// ) {
// };
//
// LinkedList.prototype.makeNode = function(
// ) {
// };
//
// var LinkedList = function() {
//
// };

var LinkedList = function() {
  this.size = 0;
  this.head = null;
  this.tail = null;
};


LinkedList.prototype.addToTail = function(newVal) {
  var newNode = this.makeNode(newVal);
  if (this.size === 0) {
    this.head = this.tail = newNode;
    this.size++;
  } else if (this.size === 1) {
    this.tail = newNode;
    this.head.next = newNode;
    this.size++;
  } else if (this.size > 1) {
    var oldTail = this.tail;
    this.tail = newNode;
    this.tail.next = oldTail;
  }
};

LinkedList.prototype.removeHead = function() {
  var oldHead = this.head;
  if (this.size === 1) {
    this.head = this.tail = null;
    this.size--;
  } else if (this.size > 1) {
    this.head = this.head.next
    this.size--;
  }

  if(!!oldHead) {
    return oldHead.value;
  } else {
    return null;
  }

};

LinkedList.prototype.contains = function(target) {
  var node = this.head;
  while(!!node) {
    if(node.value === target) {
      return true;
    }
    node = node.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  var node = {value: value, next: null};
  return node;
};

var list = new LinkedList();
list.tail;         //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.head.value;   //yields '4';
list.contains(5);  //yields 'true';
list.contains(6);  //yields 'false';
list.removeHead(); //yields '4';
list.tail.value;   //yields '5';
list.removeHead(); //yields '5';
list.removeHead(); //yields 'null';

describe('LinkedList', function() {
  it('should exist', function() {
    should.exist(LinkedList);
  });

  it('should be a function', function() {
    LinkedList.should.be.a.Function;
  });

  it('should be implemented using the pseudoclassical pattern', function() {
    LinkedList.prototype.addToTail.should.be.a.Function;
    LinkedList.prototype.removeHead.should.be.a.Function;
    LinkedList.prototype.contains.should.be.a.Function;
  });

  it('should designate a new tail when new nodes are added', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.tail.value.should.equal(4);
    list.addToTail(5);
    list.tail.value.should.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.head.value.should.equal(4);
    list.removeHead();
    list.head.value.should.equal(5);
  });

  it('should remove the head and tail from the list when removeHead is called and there is only one element present', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.head.value.should.equal(4);
    list.tail.value.should.equal(4);
    list.removeHead();
    should.not.exist(list.head);
    should.not.exist(list.tail);
  });

  it('should return the value of the removed head when removeHead is called', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.head.value.should.equal(4);
    list.tail.value.should.equal(4);
    var returnValue = list.removeHead();
    returnValue.should.equal(4);
  });

  it('should return null when removeHead is called on an empty list', function() {
    var list = new LinkedList();
    var returnValue = list.removeHead();
    should.equal(returnValue, null);
  });

  it('should contain a value that was added', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.contains(4).should.be.true;
    list.contains(5).should.be.true;
    list.contains(6).should.be.false;
  });

  it('should not contain a value that was removed', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.removeHead();
    list.contains(4).should.be.false;
  });

});


