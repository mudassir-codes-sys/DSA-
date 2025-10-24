function temp(n) {
  if (n == 0) return;
  console.log("Hello World");
  temp(--n);
}
temp(5);

function number(n) {
  if (n == 0) return;
  number(n - 1);
  console.log(n);
}
number(10);

// function sum(n) {
//     if (n == 1)  return  n ;
//     return n+sum(n-1)
// }
// console.log(sum(5));
// function fibo(n) {
//     if (n==0 || n==1) return n
//     return fibo(n-1) + fibo(n-2)
// }

// console.log(fibo(6));

let n = 5;
function print(n) {
  if (n == 0) {
    return;
  }
  print(n - 1);
  console.log(n);
}
print(n);

function fact(n) {
  if (n == 0) {
    return 1;
  }
  return n*fact(n-1)
}
console.log(
fact(4));


function sum(n) {
  if (n==1 )    return 1;
 

  return n+sum(n-1)
}
console.log(sum(4));


function fibonacci(n) {
  if (n==0 || n==1)return n;
  return fibonacci(n-1)+ fibonacci(n-2)
}
console.log(fibonacci(4));
let arr = [1,2,3,4,5]



function isSorted(arr , n) {
  if (n==1 || n==0 ) return true;
return arr[n-1]>= arr[n-2] && isSorted(arr , n-1)
}
console.log(isSorted(arr, n));

let array = [4, 6, 7, 44, 256, 432, 543, 773]
let tar = 543
let st = 0;
let end = array.length-1;

function find(array , tar , st , end) {
  if (st<=end) {
    let mid = Math.floor((st+end)/2);
    if (array[mid]==tar) {
      return mid;
    }else if(array[mid]<tar){
       return find(array, tar , mid +1 , end)
    }else{
      return find(array , tar , st , mid -1)
    }
  }  
  return -1;
}
console.log(find(array , tar , st , end));


 arr = [1,2,3];

 let ans = [];
 let i = 0; 
 function print(arr, ans , i ) {
    if (i==arr.length) {
        console.log(ans);
      return;
    }
    ans.push(arr[i]);
    print(arr, ans , i + 1 );
    ans.pop();
    print(arr , ans , i+1)
 
 }
print(arr , ans , i);

let a = [1, 2, 3];
 let count = 0;
function perm(a, idx) {
  if (idx === a.length - 1) {
    console.log(a );
    return;
  }

 
  for (let i = idx; i < a.length; i++) {
    
    [a[idx], a[i]] = [a[i], a[idx]];   // swap
    perm(a, idx + 1);                  // recursive call
    [a[idx], a[i]] = [a[i], a[idx]]; 
  }
}

perm(a, 0);
console.log(count);




