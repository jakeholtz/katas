/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */



var translateRomanNumeral = function(romanNumeral) {

  var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  if (typeof romanNumeral !== 'string') {
    return null;
  } else {
    var total = 0;
    var nums = romanNumeral.split('');
    for (var i = 0; i < nums.length; i++) {
      var currValue = values[nums[i]];
      var nextValue = values[nums[i + 1]];
      if (currValue < nextValue && i !== nums.length - 1) {
        total -= currValue
      } else {
        total += currValue
      }
    }
    return total;
  }
};

