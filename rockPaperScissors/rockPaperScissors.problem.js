/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (turns) {
  turns = turns || 3;
  var options = ['rock', 'paper', 'scissors']
  var uniques = [];
  (function recurse (seq, turn) {
    if (seq.length === turns) {
      uniques.push(seq);
    }
    for (var i = 0; i < options.length; i++) {
      if (turn < turns) {
        recurse(seq.concat([options[i]]), turn + 1);
      }
    }
  })([], 0);
  return uniques;
};
