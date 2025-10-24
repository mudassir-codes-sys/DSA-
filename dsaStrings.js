// let a = "Levels";
// let rev = "";
// for (let i = a.length - 1; i >= 0; i--) {
//   rev += a[i];
// }
// console.log(rev);
// if (rev === a) {
//   console.log("palindrome");
// } else {
//   console.log("not a palindrome");
// }
// //! checking using an algorithm......
// let b = "madam";
// let j = b.length - 1;
// let isPalindrome = true;
// for (let i = 0; i < j; i++) {
//   if (b[i].toLocaleLowerCase !== b[j].toLocaleLowerCase) {
//     isPalindrome = false;
//     break;
//   } else {
//     j--;
//   }
// }
// if (isPalindrome) {
//   console.log("palindrome");
// } else {
//   console.log(" not a palindrome");
// }

// let sum = n+1/2
// for (let i = 0; i <= n.length-1; i++) {
//   sum+=n[i];

// }

// console.log(sum);

let n = [1, 2, 3, 4, 5];
let j = n.length - 1;
for (let i = 0; i <= j; i++) {
  [n[i], n[j]] = [n[j], n[i]];
  i++;
  j--;
}
console.log(n);

let a = 10;
let b = 20;
[a,b] = [b,a]
console.log(a,b);

