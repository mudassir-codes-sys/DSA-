// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     // process.stdout.write("*")
//     console.log("*");
//   }

// const prompt = require("prompt");

// //    console.log();
// }

// for (let i = 1; i <=2;  i++){
//     // let stars="";
//     for (let j = 1; j <=i; j++) {

//   stars+="*";

// }
// console.log(stars);

// // console.log(stars);

// }

//
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j+'')

//   }
//   console.log();

// }

// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <=i; j--) {

//       console.log(i);
//   }
//   console.log();

// }
// for (let i =1; i <= 5; i++) {
//     let ch = 65;
//     for (let j = 1; j <= i; j++) {
//        process.stdout.write(String.fromCharCode(ch) + '')
//        ch++;

//     }
//     console.log();

// }

// for (let i = 1; i <= 5; i++) {
//    for (let j = 5 ; j >= i; j--) {

//           process.stdout.write('*')
//     }

//     console.log();

// }

// //! square pattern
// for (let i = 1; i <=5; i++) {
//     for (let j = 1; j <=5 ;j++) {

//          process.stdout.write("*")

//     }

//     console.log();

// }
// for (let i = 1; i <=5; i++) {
//     for (let j = 1; j <=i ;j++) {

//          process.stdout.write(j+"")

//     }

//     console.log();

// }
// for (let i = 1; i <=5; i++) {
//   for (let j = 1; j <=5-1; j++) {

//          process.stdout.write(j+"")

//   }
//     console.log();

// }

// const prompt = require("prompt-sync")();

// let input = "";

// while (input.toLowerCase() !== "exit") {
//   input = prompt("");
//   console.log("G");
// }

//! Square of stars

// for (let i = 1; i <=5; i++) {
//    for (let j = 1; j <=2; j++) {
//     process.stdout.write("*")

//    }
//    console.log();

//   }

//! Right triangle

// for (let i = 1; i <=5; i++) {
//  for (let j = 1; j <=i; j++) {
//     process.stdout.write("*")
//  }
//   console.log();

// }

//!  reverse Right triangle
// let n = 5
// for (let i = 1; i <=n; i++) {
//   for (let j = 1; j<=n-i+1; j++) {
//    process.stdout.write("*")

//   }
//  console.log();

// }

//! Numbers increasing

// for (let i = 1; i <=5 ; i++) {
//  for (let j = 1; j <=i ; j++) {
//       process.stdout.write(j+"")

//  }
//   console.log();

// }

//! Alphabet pattern

// for (let i = 1; i <=5; i++) {
//   let ch = 65;
//   for (let j = 1; j <=i; j++) {
//        process.stdout.write(String.fromCharCode(ch)+"")
//     ch++
//   }
// console.log();

// }

//! Pyramid
// let n = 5

// for (let i = 1; i <=n; i++) {
//   for (let j = 1; j <=n-i; j++) {

//         process.stdout.write(" ")

//   }
//   for (let j = 1; j <=2*i-1; j++) {

//      process.stdout.write("*")

//   }
//   console.log();

// }

// for (let i = 1; i <= 3  ; i++) {

//   for (let j = 1; j <=3-1; j++) {
//      process.stdout.write("*")
//   }
//   console.log();

// }

let user = {
  fullName: "Levels",
  Age: 18,
  City: "Multan",
};

// for (const value in user) {
//   console.log( user[value]);

// }
// let str = "hello"
// let arr =[1,2,3,4,5]
// for (const element of str) {
//   console.log(element);

// }

// let array = [5,4,3,2,1];
// array.forEach((element , idx)=> {
//   console.log(element , idx);

// });

let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum+= arr[i]
// }
// let min =arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (min>arr[i]) {
//     min=arr[i]
//   }

// }

// console.log(min);

// let arr =[150,560,550 , 29,230];
// let min1= arr[0];
// let min2=arr[1];
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i]<min1) {
//     min2=min1;
//     min1=arr[i]
//   }else if(arr[i]<min2 && arr[i]!==min1){
//     min2=arr[i]
//   }
// }

// console.log(min1 , min2);

// let array = [150, 560, 550, 29, 230, 89, 470, 33, 12, 900, 65, 28, 305, 710, 19, 88, 44, 205, 1000, 14];

// let i = 0;
// let j = array.length-1;
// while (i<j) {
//     let t = array[i];
//     array[i]=array[j];
//     array[j]=t;
//     i++;
//     j--;
// }
// console.log(array);

// let arr2 = [1,1,0,1,0,1,1,0,0]

// // let i = 0;
// let j = 0;
// for (let i = 0; i < arr2.length; i++) {
//    if (arr2[i]===0) {
//   let t = arr2[i];
//   arr2[i]=arr2[j];
//   arr2[j]=t;
//   j++;
//   }

// }

// while (i<arr2.length) {
//   if (arr2[i]===0) {
//   let t = arr2[i];
//   arr2[i]=arr2[j];
//   arr2[j]=t;
//   j++;
//   }
//   i++;
// }

// console.log(arr2);

let arr3 = [1, 2, 3, 4, 5];

let copy = arr3[0];
for (let i = 0; i < arr3.length - 1; i++) {
  arr3[i] = arr3[i + 1];
}
arr3[arr3.length - 1] = copy;
console.log(arr3);

let start = arr3[0];
let end = arr3[arr3.length - 1];
while (start < end) {
  let t = arr3[start];
  arr3[start] = arr3[end];
  arr3[end] = t;
  start++;
  end--;
}

console.log(arr3);

// let J = arr3.length-1
// let i = arr3[4]
// // console.log(i);
// while (i>arr3[0]) {
//     let t = arr3[J];
//      J=arr3 [i];
//      i=arr3[t];
//     J--;
//     i--;
// }

// console.log(arr3);

// for (let i = 0; i < arr3.length; i) {
//     let temp

// }

let arr4 = [5, 4, 3, 2, 1];

// for (let i = 0; i < arr4.length; i++) {
//   const element = array[i];

// }

//! Algorithm......
let Array = [2, 3, 4, 5, 6];
let k = 2;
let temp = [];
for (let i = 0; i< Array.length; i++) {
  temp[i] = Array[(i + k) % Array.length];
}
console.log(temp);


// //* right rotation
// let t = [];
//   for (let i = Array.length-1; i < 0; i--) {
//       t[i] = Array[(i + k) % Array.length];
    
  // }
  // console.log(t);❌//! wrong solution...


  let prices = [7,1,5,3,6,4];
  let min = prices[0];
  let max = prices[0];
  for (let i = 1; i <prices.length-1; i++) {
    if (prices[i]<min) {
      min=prices[i]
    }
    if (prices[i]>max) {
      max=prices[i]
    }
  }
  console.log(`The best day to buy is day ${min+1} and to sell day ${max+1}`);
  
  