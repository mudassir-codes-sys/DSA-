// function printNumbers(n) {
//   if (n == 0) return;

//   console.log(n);
//   printNumbers(n - 1);
// }
// printNumbers(5);

// let printArray = [10, 20, 30, 40];
// function printElements(array, index) {
//   if (index == array.length) return;
//   printElements(array, index + 1);
//   console.log(array[index]);
// }
// printElements(printArray, 0);

// let arraySum = [2, 4, 6, 8];
// function sumOfArray(array, index) {
//   if (index === array.length) {
//     return 0;
//   }
//   return arraySum[index] + sumOfArray(arraySum, index + 1);
// }
// console.log(sumOfArray(arraySum, 0));

// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(4));

// let arr = [1, 2, 3];
// let ans = [];
// let i = 0;
// function subsequences(array, ans, i) {
//   if (i == array.length) {
//     console.log(ans);

//     return;
//   }
//   ans.push(arr[i]);
//   subsequences(arr, ans, i + 1);
//   ans.pop();
//   subsequences(arr, ans, i + 1);
// }
// subsequences(arr, ans, i);

// let a = 1234;
// console.log(a % 10);

// function sumOfDigits(n) {
//   if (n == 0) {
//     return 0;
//   }
//   let lastDigit = n % 10;
//   let remaining = Math.floor(n / 10);
//   return lastDigit + sumOfDigits(remaining);
// }
// console.log(sumOfDigits(a));

// let b = 4321;
// function reverse(n, rev = 0) {
//   if (n == 0) return rev;
//   let lastDigit = n % 10;
//   let remaining = Math.floor(n / 10);
//   return reverse(remaining, rev * 10 + lastDigit);
// }
// console.log(reverse(b));

let s = "madam";
let start = 0;
let end = s.length - 1;
function isPalindrome(string, start, end) {
  if (start >= end) return true;
  if (string[start] !== string[end]) {
    return false;
  }
  return isPalindrome(string, start + 1, end - 1);
}
console.log(isPalindrome(s, start, end));

let a = 123321;

function number(num, rev = 0) {
  if (num == 0) return rev;
  let lastDigit = num % 10;
  let remainder = Math.floor(num / 10);
  process.stdout.write(lastDigit + "");
  return number(remainder, rev * 10 + lastDigit);
}
number(a);

function check(original, rev) {
  return original === rev;
}
console.log(check(a, number(a)));

function pow(x, n) {
  if (n === 0) return 1;
  return x * pow(x, n - 1);
}
console.log(pow(2, 5));

function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

let p = 234;
function product(n) {
  if (n === 0) return 1;
  return (n % 10) * product(Math.floor(n / 10));
}

console.log(product(p));

function count(n) {
  if (n == 0) return 0;
  return 1 + count(Math.floor(n / 10));
}

console.log(count(234));

let array = [2, 4, 7, 68, 8];
function maxElem(array, index) {
  if (index == array.length - 1) return array[index];
  let max = maxElem(array, index + 1);
  return Math.max(array[index], max);
}
console.log(maxElem(array, 0));

function isSorted(array, index) {
  if (index === array.length - 1) return true;
  if (array[index] > array[index + 1]) return false;
  return isSorted(array, index + 1);
}
console.log(isSorted(array, 0));

array = [2, 4, 7, 68, 8];
let target = 69;
function find(array, target, index) {
  if (index === array.length) return -1;
  if (array[index] === target) return index;
  return find(array, target, index + 1);
}
console.log(find(array, target, 0));

//! HCF

function HCF(a, b) {
  if (a == b) return a;
  if (a > b) return HCF(a - b, b);
  return HCF(b - a, a);
}

console.log(HCF(1, 7));

//! Better approach for HCF..

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}
console.log(gcd(1, 7));

//! Factors

function factors(n, i = 1) {  
  if (i > Math.sqrt(n)) return;
  if (n % i == 0) {
    console.log(i);
    if (n / i !== i) {
      console.log(n / i);
    }
  }
  factors(n, i + 1);
}

factors(30);

//! Sieve of Eratosthenes Algorithm...

let n = 1 ;
let arr = new Array(n+1).fill(true);
for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
  if (arr[i]) {
    for (let j = i*i; j < arr.length; j+=i) {
    arr[j]=false;
    }
  }
}
for (let i = 2; i < arr.length; i++) {
if (arr[i]) {
   process.stdout.write(i+'')

}  
}