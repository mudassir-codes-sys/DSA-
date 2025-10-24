let a = 10;
let b = 20;
console.log("Sum of 10 and 20 is " + (a + b));
console.log(a + b + " is sum of 10 and 20  ");

// ! Type coercion....   js engine converts the strings into number automatically if there is no concatenation b/w number & string
console.log(typeof ("1" + 1));
console.log(typeof ("2" - 1));
console.log(typeof ("3" * 2));
console.log(typeof ("4" / 3));
//! ends here ...

// ! Type casting... converting one type into another type is called typecasting...
//* prompt takes the input in string...
//! ex of type casting...
let age = String(18);
console.log(typeof age);

let name = "Levels";
name = Number(name);
console.log(name); //* NAN
//! ends here ...

//! To get last digit of number ...
let f = 7889;
console.log(f % 10);
//* for two digits ....
console.log(f % 100); //* and so on.....

//! To remove last digit ...
let g = 7889;
console.log(Math.floor(g / 10));
//* for two digits ....
console.log(Math.floor(f / 100)); //* and so on.....

//! unary operators...

let i = 7;
console.log(i++);

console.log(++i);

let j = 9;
let k = j++;
console.log(k);
console.log(j);
let l = 10;
let m = ++l;
console.log(m);
//! ends here.....

//! pre increment / post increment

let n = 11;
let o = 22; //*n=13 .. o =24
let p = n + o + n++ + o++ + ++n + ++o; //* n+o = 33... n++= 11..   o++ 22  .... ++n 13 .... ++o= 24;;;;;;;
console.log("n=" + n); // 13
console.log("o=" + o); // 24
console.log("p=" + p); //105

let q = false;
q++;
console.log(q);

//! ends here
