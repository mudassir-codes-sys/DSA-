// ! Kadane’s Algorithm..
// *kisi array ke continuous (lagataar) elements me se wo subarray dhoondna jiska sum sabse zyada ho..

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let currSum = 0;
let maxSum = -Infinity;
for (let i = 0; i < arr.length; i++) {
  currSum += arr[i];
  maxSum = Math.max(currSum, maxSum);
  if (currSum < 0) currSum = 0;
}
console.log(maxSum);

let arr2 = [2, 7, 11, 15];
let target = 26;
let j = arr2.length - 1;
let i = 0;
let ans = [];
while (i < j) {
  if (arr2[i] + arr2[j] == target) {
    ans = [i, j];
    break;
  } else if (arr2[i] + arr2[j] < target) {
    i++;
  } else {
    j--;
  }
}
console.log(ans);

//! Moore's Algorithm...

let arr3 = [1, 2, 2, 1, 1];
let count = 1;
let max = arr3[0];
for (let i = 0; i < arr3.length; i++) {
  if (count == 0) {
    max = arr3[i];
  } else if (max == arr3[i]) {
    count++;
  } else {
    count--;
  }
}
console.log(max);

//! Best time to buy and sell stock....

function maxProfit(prices) {
  let bestBuy = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > bestBuy) {
      maxProfit = Math.max(maxProfit, prices[i] - bestBuy);
    }
    bestBuy = Math.min(bestBuy, prices[i]);
  }
  return maxProfit;
}
console.log(maxProfit(arr));

//! Merge Sort....

let array = [4, 2, 67, 9, 42, 5];
function divide(arr, st = 0, end = arr.length - 1) {
  if (st >= end) return;
  let mid = Math.floor(st + (end - st) / 2);
  divide(arr, st, mid); //? left call
  divide(arr, mid + 1, end); //? right call
  merge(arr, st, mid, end);
}
function merge(arr, st, mid, end) {
  let temp = [];
  let i = st;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    arr[i] < arr[j] ? temp.push(arr[i++]) : temp.push(arr[j++]);
  }
  while (i <= mid) {
    temp.push(arr[i++]);
  }
  while (j <= end) {
    temp.push(arr[j++]);
  }
  for (let k = 0; k < temp.length; k++) {
    arr[st++] = temp[k];
  }
}
divide(array);
console.log(array);

//! Quick Sort Algorithm..

let a = [4, 7, 2, 6, 8, 3];
function quickSort(arr, st = 0, end = arr.length - 1) {
  if (st >= end) {
    return;
  }
  let pivot = arr[end];
  let i = st - 1;
  for (let j = st; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  i++;
  [arr[i], arr[end]] = [arr[end], arr[i]];
  let pivIdx = i;
  quickSort(arr, st, pivIdx - 1);
  quickSort(arr, pivIdx + 1, end);
}
quickSort(a);
console.log(a);

//!DNF Algorithm..
let a2 = [2, 0, 1, 0, 2, 0, 1, 2, 0];
let low = 0;
let mid = 0;
let high = a2.length - 1;
while (mid <= high) {
  if (a2[mid] === 0) {
    [a2[low], a2[mid]] = [a2[mid], a2[low]];
    mid++;
    low++;
  } else if (a2[mid] === 1) {
    mid++;
  } else {
    [a2[mid], a2[high]] = [a2[high], a2[mid]];
    high--;
  }
}
console.log(a2);

//!Single Element in Sorted Array ..
let b = [1, 1, 2, 2, 3, 3, 4, 5, 5];
function single(arr, st = 0, end = arr.length - 1) {
  if (arr.length == 1) {
    return arr[0];
  }
  if (st > end) {
    return -1;
  }
  let mid = Math.floor(st + (end - st) / 2);
  if (
    (mid === 0 || arr[mid] !== arr[mid - 1]) &&
    (mid === arr.length - 1 || arr[mid] !== arr[mid + 1])
  ) {
    return arr[mid];
  }
  if (mid % 2 == 0) {
    if (arr[mid] === arr[mid + 1]) {
      return single(arr, mid + 2, end);
    } else {
      return single(arr, st, mid - 2);
    }
  } else {
    if (arr[mid] == arr[mid - 1]) {
      return single(arr, mid + 1, end);
    } else {
      return single(arr, st, mid - 1);
    }
  }
}
console.log(single(b));

//! Missing number in array....
var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  numsSum = 0;
  for (let i = 0; i < n; i++) {
    numsSum += nums[i];
  }
  return totalSum - numsSum;
};

//! Merge two  sorted linked list

var mergeTwoLists = function (head1, head2) {
    if (head1 == null || head2 == null) {
        return head1 == null ? head2 : head1
    }
    if (head1.val <= head2.val) {
      head1.next =  mergeTwoLists(head1.next, head2)
        return head1
    } else {
      head2.next =  mergeTwoLists(head1, head2.next)
        return head2
    }
};

var inorderTraversal = function (root) {
    let curr = root
    let ans = []
    while (curr !== null) {
        if (curr.left === null) {
            ans.push(curr.val)
            curr = curr.right
        } else {
            let iP = curr.left
            while (iP.right !== null && iP.right !== curr) {
                iP = iP.right

            }
            if (iP.right === null) {
                iP.right = curr
                curr = curr.left
            } else {
                iP.right = null
                ans.push(curr.val)
                curr = curr.right

            }
        }
    }
    return ans
  }