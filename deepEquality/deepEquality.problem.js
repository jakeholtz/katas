/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(a, b) {

  if (a === b) {
    return true;
  } else if ((!a && !!b) || !(a instanceof Object) || !(a instanceof Object)) {
    return false;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  if(aKeys.length !== bKeys.length) {
    return false;
  } else {
    for (var i = 0; i < aKeys.length; i++) {
      if (!deepEquals(a[aKeys[i]], b[aKeys[i]])) {
        return false;
      }
    }
  }
  return true;
};
