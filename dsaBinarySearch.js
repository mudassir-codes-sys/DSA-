let array = [
  1, 3, 7, 9, 12, 15, 18, 21, 23, 25, 27, 30, 33, 37, 40, 44, 47, 50, 53, 57,
];
let start = 0;
let end = array.length - 1;
function binary(array, target, start, end) {
  let mid = Math.floor(start + (end - start) / 2);
  if (start > end) return -1;
  if (array[mid] == target) {
    return mid;
  } else if (array[mid] < target) {
    return binary(array, target, mid + 1, end);
  } else {
    return binary(array, target, start, mid - 1);
  }
}
console.log(binary(array, 21, start, end));
