// let unit = 650;   // 400> 13  .... 300> 10 ..... 200> 8..... 100> 6
// let amount =0;
// if (unit > 400){
// let final = (unit-400)*13;
// unit = 250;
// // console.log(unit , final);
// }
// if(unit>200 && unit<300){
//      final = (unit-300)*10;
//     console.log(final);

// }

let amount = 67993;
if (amount > 5000) {
  final = Math.floor(amount / 5000);
  console.log("5000 k note :" + final);
  amount = amount % 5000;
}
if (amount > 1000) {
  final = Math.floor(amount / 1000);
  console.log("1000 k note :" + final);
  amount = amount % 1000;
}
if (amount > 500) {
  final = Math.floor(amount / 500);
  console.log("500 k note :" + final);

  amount = amount % 500;
}
if (amount > 100) {
  final = Math.floor(amount / 100);
  console.log("100 k note :" + final);

  amount = amount % 100;
}
if (amount > 50) {
  final = Math.floor(amount / 50);
  console.log("50 k note :" + final);

  amount = amount % 50;
}
if (amount > 20) {
  final = Math.floor(amount / 20);
  console.log("20 k note :" + final);

  amount = amount % 20;
}
if (amount > 10) {
  final = Math.floor(amount / 10);
  console.log("10 k note :" + final);

  amount = amount % 10;
}
console.log("Remaining amount :", amount);

let unit = 800;
let price = 0;

if (unit > 400) {
  price += (unit - 400) * 13;
  console.log(price);
  unit = 400;
}
if (unit > 300 && unit <= 400) {
  price += (unit - 300) * 11;
  console.log(price);
  unit = 300;
}
if (unit > 200 && unit <= 300) {
  price += (unit - 200) * 10;
  console.log(price);
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  price += (unit - 100) * 8;
  console.log(price);
  unit = 100;
}
if (unit <= 100) {
  price += unit * 6;
  console.log(price);
}
console.log("Total Bill =", price);

let num = -3;
num < 5 ? console.log("greater than 5 ") : console.log("less than 5");
console.log(num > 5 ? "grater than 5" : "less than 5");
console.log(num < 0 ? "negative" : num > 0 ? "Positive" : "zero");
