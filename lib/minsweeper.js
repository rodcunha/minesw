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
console.log(generatePlayerBoard(5, 15));