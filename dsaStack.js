//*nextGreaterElement

let arr = [6, 8, 0, 1, 3];
function nextGreaterElement(arr) {
  let stack = [];
  let ans = new Array(arr.length).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      let idx = stack.pop();
      ans[idx] = arr[i];
    }
    stack.push(i);
  }
  return ans;
}

//*prevSmallerElement

function prevSmallerElement(arr) {
  let stack = [];
  let ans = new Array(arr.length).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      ans[i] = arr[stack[stack.length - 1]];
    }
    stack.push(i);
  }
  return ans;
}
console.log(prevSmallerElement(arr));

//* reverse str

let str = "hello";
let stack = [];
for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
}
let reversed = "";
while (stack.length > 0) {
  reversed += stack.pop();
}
console.log(reversed);

//* Valid Parenthesis

function validParenthesis(str) {
  if (str.length === 0) return;
  let stack = [];
  for (const char of str) {
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
    } else {
      if (stack.length == 0) return true;
      const last = stack.pop();
      if (
        (char === ")" && last !== "(") ||
        (char == "}" && last !== "{") ||
        (char == "]" && last !== "[")
      )
        return false;
    }
  }
  return stack.length === 0;
}

//* stockSpan
function stockSpan(prices) {
  let stack = [];
  let ans = new Array(prices).fill(0);
  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] >= prices[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length === 0) ans[i] = i + 1;
    else ans[i] = i - stack[stack.length - 1];
    stack.push(i);
  }
  return ans;
}
let b = [123, 34, 35, 2626, 2, 526, 73];
console.log(stockSpan(b));
