/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n) {
  var gameboard = makeBoard(n);
  var count = 0;
  (function recurse(board, c, r) {
    board.togglePiece(c, r);
    if (c === (n - 1) && r === (n - 1)) {
      count++;
      board.togglePiece(c, r);
    } else {
      // down
      if (board[c + 1] !== undefined && !board.hasBeenVisited(c + 1, r)) {
        recurse(board, c + 1, r);
      };
      // up
      if (board[c - 1] !== undefined && !board.hasBeenVisited(c - 1, r)) {
        recurse(board, c - 1, r);
      };
      // right
      if (board[c][r + 1] !== undefined && !board.hasBeenVisited(c, r + 1)) {
        recurse(board, c, r + 1);
      };
      // left
      if (board[c][r - 1] !== undefined && !board.hasBeenVisited(c, r - 1)) {
        recurse(board, c, r - 1);
      };
      board.togglePiece(c, r);
    }
  })(gameboard, 0, 0);
  return count;
};

