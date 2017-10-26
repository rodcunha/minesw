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

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {

    let board = [];

    for(let i = 0; i < numberOfRows; i++ ) {

      let row = [];
      for(let j = 0; j < numberOfColumns; j++) {
          row.push(' ');
      }
      board.push(row);
    }
    return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  for(let i = 0; i < numberOfRows; i++ ) {

    let row = [];
    for(let j = 0; j < numberOfColumns; j++) {
        row.push(null);
    }
    board.push(row);
  }
let numberOfBombsPlaced = 0;

while (numberOfBombsPlaced <= numberOfBombs) {
  let randomRowIndex = Math.floor(Math.random() * numberOfRows);
  let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  board[randomRowIndex][randomColumnIndex] = 'B';
  numberOfBombsPlaced++;
  // this will place bombs on top of bombs, we will use control flow on the next time to fix this issue.
}

  return board;
}

const printBoard = board => {
  board.map(row => row.join(' | ') ).join('\n');
}
