let arr = [1,0,-1,0,-2,2];
function divide(arr, st = 0, end = arr.length - 1) {
  if (st >= end) return;
  let mid = Math.floor(st + (end - st) / 2);
  divide(arr, st, mid);
  divide(arr, mid + 1, end);
  conq(arr, st, end, mid);
}
function conq(arr, st, end, mid) {
  let temp = [];
  let i = st;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    arr[i] < arr[j] ? temp.push(arr[i++]) : temp.push(arr[j++]);
  }
  while (i <= mid) temp.push(arr[i++]);
  while (j <= end) temp.push(arr[j++]);
  for (let k = 0; k < temp.length; k++) {
    arr[st++] = temp[k];
  }
}
divide(arr);
console.log(arr);

let array = [5, 2, 11, 7, 15];
let target = 9;
function find(array, target) {

for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === target) {
      return [i , j];
    }
  }
}
}
console.log(find(array , target));

