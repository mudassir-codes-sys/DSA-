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
console.log(nextGreaterElement(arr));

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

let b = [100, 80, 60, 70, 60, 75, 85];

function stockSpan(arr) {
  let ans = new Array(arr.length).fill(0);
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length == 0) ans[i] = i + 1;
    else ans[i] = i - stack[stack.length - 1];
    stack.push(i);
  }
  return ans;
}
console.log(stockSpan(b));

//*prevSmallerElement

function prevSmallerElement(arr) {
  let stack = [];
  let ans = new Array(arr.length - 1);
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) ans[i] = -1;
    else ans[i] = stack[stack.length - 1];
    stack.push(arr[i]);
  }
  return ans;
}
let array = [4, 10, 5, 8, 20, 15, 3, 12];
console.log(prevSmallerElement(array));

//* MinStack

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    if (this.stack.length === 0) return null;
    let removed = this.stack.pop();
    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  }
}

//*Largest rectangle in Histogram

let ar = [2, 1, 5, 6, 2, 3];
function rectangle(a) {
  let left = [];
  let leftStack = [];
  let right = [];
  let rightStack = [];
  for (let i = a.length - 1; i >= 0; i--) {
    while (
      rightStack.length > 0 &&
      a[rightStack[rightStack.length - 1]] >= a[i]
    ) {
      rightStack.pop();
    }
    if (rightStack.length === 0) right[i] = a.length;
    else right[i] = rightStack[rightStack.length - 1];
    rightStack.push(i);
  }

  //* left smaller values

  for (let i = 0; i < a.length; i++) {
    while (leftStack.length > 0 && a[leftStack[leftStack.length - 1]] >= a[i]) {
      leftStack.pop();
    }
    if (leftStack.length === 0) left[i] = -1;
    else left[i] = leftStack[leftStack.length - 1];
    leftStack.push(i);
  }
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    let area = a[i] * (right[i] - left[i] - 1);
    max = Math.max(max, area);
  }
  return max;
}
console.log(rectangle(ar));

//* Trapping rain water..

var trap = function (height) {
  let maxLeft = 0;
  let maxRight = 0;
  let ans = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    maxLeft = Math.max(maxLeft, height[i]);
    maxRight = Math.max(maxRight, height[j]);
    if (maxLeft < maxRight) {
      ans += maxLeft - height[i];
      i++;
    } else {
      ans += maxRight - height[j];
      j--;
    }
  }
  return ans;
};

let newarr =[1,2,3 ,[2,3,4 , [2,3,2,4]] , [3,35,2,5]]
console.log(newarr);
