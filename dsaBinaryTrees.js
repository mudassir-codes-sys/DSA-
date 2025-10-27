let arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let idx = -1;
function binaryTree(arr) {
  idx++;
  if (idx >= arr.length || arr[idx] === -1) return null;
  let root = new Node(arr[idx]);
  root.left = binaryTree(arr);
  root.right = binaryTree(arr);
  return root;
}
let root = binaryTree(arr);
function preOrderTraversal(root) {
  if (root === null) return;
  console.log(root.val);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}
preOrderTraversal(root);

function inOrderTraversal(root) {
  if (root === null) return;
  inOrderTraversal(root.left);
  console.log(root.val);
  inOrderTraversal(root.right);
}
inOrderTraversal(root);

function postOrderTraversal(root) {
  if (root === null) return;
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
}
postOrderTraversal(root);

function level(root) {
  if (!root) return [];
  let q = [root];
  while (q.length > 0) {
    let node = q.shift();
    console.log(node.val);
    node.left && q.push(node.left);
    node.right && q.push(node.right);
  }
}
level(root);
