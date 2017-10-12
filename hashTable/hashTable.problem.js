/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var hashTable = [];
  var hashTableLimit = 1000;
  result.insert = function(key, value) {

    var index = getIndexBelowMaxForKey(key, hashTableLimit);
    var bucketOfTuples = hashTable[index] = hashTable[index] || [];
    var replaced = false;

    for (var i = 0; i < bucketOfTuples.length; i++) {
      if (bucketOfTuples[i][0] === key) {
        bucketOfTuples[i][1] = value;
        replaced = true;
        return bucketOfTuples[i][0];
      }
    }

    if (!replaced) {
      bucketOfTuples.push([key, value]);
      return bucketOfTuples[bucketOfTuples.length - 1][1];
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, hashTableLimit);
    var bucketOfTuples = hashTable[index];
    if(!bucketOfTuples || bucketOfTuples.length === 0) {
      return;
    }
    for (var i = 0; i < bucketOfTuples.length; i++) {
      if (bucketOfTuples[i][0] === key) {
        return bucketOfTuples[i][1];
      }
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, hashTableLimit);
    var bucketOfTuples = hashTable[index];
    for (var i = 0; i < bucketOfTuples.length; i++) {
      if (bucketOfTuples[i][0] === key) {
        var removedValue = bucketOfTuples[i][1];
        bucketOfTuples[i] = [];
        return removedValue;
      }
    }
  };

  return result;
};
