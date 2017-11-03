// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  if (!x || !y) {
    return 0;
  } else if (x < 0 && y < 0) {
    return multiply(Math.abs(x), Math.abs(y));
  } else if (x < 0 || y < 0) {
    return -multiply(Math.abs(x), Math.abs(y));
  }

  var total = 0;
  for (var i = 0; i < y; i++) {
    total += x;
  }
  return total;
};

function divide(x, y) {
  if (!y) {
    return NaN;
  } else if (!x) {
    return 0;
  } else if (x < 0 && y < 0) {
    return divide(Math.abs(x), Math.abs(y));
  } else if (x < 0 || y < 0) {
    return -divide(Math.abs(x), Math.abs(y));
  }

  var total = 0;
  var remainder = 0;
  while (x >= y) {
    x -= y;
    total++;
    remainder = x;
  }

  // if (remainder > 0) {
  //   total += Number('0.' + divide(multiply(remainder, 10), y));
  // }
  return total;
}


var modulo = function(x, y) {
  var aX = Math.abs(x);
  var aY = Math.abs(y);
  var output;
  if (aX < aY) {
    output = aX;
  } else if (aX >= aY) {
    while (aX >= aY) {
      aX -= aY
    }
    output = aX;
  }

  if ((x < 0 && y < 0) || (x < 0 && y >= 0)) {
    return -output
  } else {
    return output;
  }
};


