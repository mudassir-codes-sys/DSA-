let n = 4;
if (n <= 0) {
  console.log("number should be positive and greater than zero");
} else if (isNaN(n)) {
  console.log("Invalid");
} else {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
}
//! Factors of a number..
let num = 12 ;

for (let i = 1; i <= num; i++) {
  let facts = 0;
  if (num % i === 0) {
    // console.log(i);
  }
}
let prime = true;
for (let i = 2; i <= Math.floor(num / 2); i++) {
  if (num % i === 0) {
    prime = false;
    break;
  }
}
console.log(prime);


function call(a) {
 return "G";
  
  
}
// call();
    