  //! BUbble Sort...
let n = [5, 3, 4, 2, 1, 7];

// for (let i = 0; i < n.length - 1; i++) {
//     for (let j = 0; j < n.length - i - 1; j++) {
//         if (n[j] > n[j + 1]) {
//             [n[j], n[j + 1]] = [n[j + 1], n[j]];
//           }
//         }
//       }
//       console.log(n);
      
//! Selection Sort..
// for (let i = 0; i < n.length - 1; i++) {
//   for (let j = i + 1; j < n.length; j++) {
//     if (n[j] < n[i]) {
//       [n[j], n[i]] = [n[i], n[j]];
//     }
//   }
// }
// console.log(n);

// //! Insertion Sort...
// //? Don't forget to dry run this code.....
// //? Don't forget to dry run this code.....

// for (let i = 1; i < a.length; i++) {
  //     let current = a[i];
  //   let j = i - 1;
  //   while (j >= 0 && a[j] > current) {
    //       a[j + 1] = a[j];
    //       j--;
    //     }
    //     a[j + 1] = current;
    //   }
    
    // console.log(a); //? Don't forget to dry run this code.....
    //? Don't forget to dry run this code.....
    
    
    
    let array = [1, 5, 2, 4, 3];
    // for (let i = 0; i < array.length-1; i++) {
    //   for (let j = 0; j < array.length-i-1; j++) {
   
    //     if (array[j]>array[j+1]) {
    //    [  array[j] , array[j+1]]= [array[j+1] , array[j]]
    //     }
    //   }
      
    // }
    
    // for (let i = 0; i < array.length-1; i++) {
    //   for (let j = i+1; j < array.length; j++) {
    //     if (array[j]<array[i]) {
    //       [  array[j] , array[i]]= [array[i] , array[j]]
    //     }
    //   }
      
    // }


    for (let i = 0; i < array.length; i++) {
    let current= array[i];
    let j = i-1;
    while (j>=0 && array[j]>current) {
      array[j+1]=array[j];
      j--
    }
      array[j+1] = current
    }
    
    console.log(array);