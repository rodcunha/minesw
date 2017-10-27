'use strict';

// Code from Project Part 2 Below
//
// const printBoard = board => {
//   console.log('Current Board: ');
//   console.log(board[0].join(' | '));
//   console.log(board[1].join(' | '));
//   console.log(board[2].join(' | '));
// };
//
// let board = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ']
// ];
//
// printBoard(board);
//
// board[0][1] = 1;
// board[2][2] = 'B';
//
// printBoard(board);

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {

  var board = [];

  for (var i = 0; i < numberOfRows; i++) {

    var row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];

  for (var i = 0; i < numberOfRows; i++) {

    var row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }
  var numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced <= numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    // this will place bombs on top of bombs, we will use control flow on the next time to fix this issue.
  }

  return board;
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);