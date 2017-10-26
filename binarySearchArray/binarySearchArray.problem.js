/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

 // ITERATIVE

var binarySearch = function (array, target) {
  var start = 0;
  var mid = Math.floor(array.length / 2);
  var end = array.length - 1;
  var count = 0;

  while (count < array.length) {

    if (target === array[mid]) {
      return mid;
    } else if (low === high - 1) {
      return null;
    } else if (target === array[start]) {
      return start;
    }

    if (target > array[mid]) {
      start = mid;
      mid = Math.floor((end - mid) / 2) + mid;
      count++;
    }
    if (target < array[mid]) {
      end = mid;
      mid = Math.floor((mid - start) / 2);
      count++;
    }
  }
  return null;
};

// RECURSIVE

var binarySearch = function (array, target) {
  function searchBetweenPoints(start, end) {
    if (start === end) {
      return null;
    }
    var mid = Math.floor((end - start) / 2) + start;
    if (array[mid] === target) {
      return mid;
    } else if (start === end - 1) {
      return null;
    } else if (array[mid] > target) {
      return searchBetweenPoints(start, mid);
    } else if (array[mid] < target) {
      return searchBetweenPoints(mid, end);
    }
  }
  return searchBetweenPoints(0, array.length);
};