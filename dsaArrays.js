// let arr = [5, 10, 15, 20];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
//!  Find the maximum and minimum element
// let arr = [7, 2, 9, 4, 1];
// let min = arr[0];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(min, max);
//!🔹 Reverse the array (without using reverse())

// let arr = [1, 2, 3, 4, 5];
// let j = arr.length - 1;
// let i = 0;
// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

//!🔹 Find second largest element..
// let arr = [12, 35, 1, 10, 34, 1];
// let max = arr[0];
// let secMax = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < max && arr[i] > secMax) {
//     secMax = arr[i];
//   }
// }
// console.log(secMax);

//!🔹 Move all zeros to the end (without sorting)
// let arr = [0, 1, 0, 3, 12];
// let j = arr.length-1

// let i =0
// while (i < j) {
//      if (arr[i]===0) {
//         temp = arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j--
//     }
//     i++;
// }

//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]===0) {
//         temp = arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp
//         j--
//     }

// }

// console.log(arr);
//!🔹 Merge two sorted arrays into one sorted array
// let a = [1, 3, 5];
// let b = [2, 4, 6];
// let arr = [];

// let i = 0;
// let j = 0;
// while (i < a.length && j < b.length) {
//   if (a[i] < b[j]) {
//     arr.push(a[i]);
//     i++;
//   } else {
//     arr.push(b[j]);
//     j++;
//   }
// }
// while (i < a.length) {
//   arr.push(a[i++]);
// }
// while (j < b.length) {
//   arr.push(b[j++]);
// }

// console.log(arr);

//! Array sorting...
// let Array = [1, 1, 2, 3, 3, 4];

// // Bubble Sort
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

//! 🔹 Remove duplicates from array (without Set)
// let arr = [1,1,2,3,3,4,0];
// let newArr=[];   // output: [1,2,3,4]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]!==arr[i+1]) {
//         newArr[newArr.length]=arr[i];
//     }

// }
// console.log(newArr);

//!Remove duplicates in-place — matlab naya array use nahi karna,
// let arr = [1, 1, 2, 3, 3, 4, 4];

// let i = 0; // slow pointer

// for (let j = 1; j < arr.length; j++) {
//   if (arr[i] !== arr[j]) {
//     i++;                // move slow pointer forward
//     arr[i] = arr[j];    // overwrite next unique position
//   }
// }

// console.log(arr.slice(0, i + 1));

let arr = [3, 6, 4, 9, 1, 0];
let index = 0;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      index++;
    }
  }
}
console.log(arr, index);

//! container with most water
function containerWithMostWater() {
  let container = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  let i = 0;
  let j = container.length - 1;
  let max = 0;
  while (i < j) {
    let width = j - i;
    let height = Math.min(container[i], container[j]);
    let area = width * height;
    max = Math.max(area, max);
    container[i] < container[j] ? i++ : j--;
  }
  return max
}
console.log(containerWithMostWater());

//! Painter's Partition

function partition(arr , k ){
let st = Math.max(...arr)
let end = arr.reduce((a ,b) => a+ b , 0)
let n = arr.length
let ans = -1
while(st<= end){
    let mid = Math.floor(st + (end - st) / 2)
    if(isValid( arr , n  , k , mid)){
        ans = mid
        end = mid-1
    }else{
        st  = mid+1
    }
}
return ans
}
function isValid(arr , n , k , mid){
    let painter = 1
    let  paint = 0
    for(let i = 0 ; i < n ; i++){
        if(arr[i] > mid) return false
        else if (arr[i] + paint <= mid){
            paint+= arr[i]
            
        }else{
            painter ++
            paint=arr[i]
        }
    }
    return painter <= k

}