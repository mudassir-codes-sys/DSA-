let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < mat.length; i++) {
  let sum = 0;
  for (let j = 0; j < mat[i].length; j++) {
    sum += mat[i][j];
  }
  console.log(sum);
}
// Output: 6, 15, 24
let found = false;
let target = 7;
let matrix = [
  [5, 1, 9],
  [2, 7, 6],
  [3, 8, 4],
];
for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat.length; j++) {
    if (matrix[i][j] === target) {
      found = true;
      break;
    }
  }
}
// Check if 7 exists → Output: true
let board = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // cols
  [0, 4, 8],
  [2, 4, 6],
];
for (const element of board) {
    console.log(element);
    
  
    
}

console.log(found);

