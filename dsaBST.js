class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function insert(root, val) {
  if (root === null) return new Node(val);
  if (val < root.val) root.left = insert(root.left, val);
  else root.right = insert(root.right, val);
  return root;
}
function buildBst(arr) {
  let root = null;
  for (const element of arr) {
    root = insert(root, element);
  }
  return root;
}
let arr = [5, 3, 7, 2, 4, 6, 8];
let root = buildBst(arr);

console.log(JSON.stringify(root, null, 2));

function search(root, key) {
  if (root == null) return false;
  if (root.val === key) return true;
  if (key > root.val) return search(root.right, key);
  else return search(root.left, key);
}
console.log(search(root, 8));

function del(root) {
  while (root !== null && root.left !== null) {
    root = root.left;
  }
  return root;
}

function deleteNode(root, key) {
  if (root === null) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left == null) {
      let temp = root.right;
      root = null;
      return temp;
    } else if (root.right === null) {
      let temp = root.left;
      root = null;
      return temp;
    } else {
      let IS = del(root.right);
      root.val = IS.val;
      root.right = deleteNode(root.right, IS.val);
    }
  }
  return root;
}
console.log(deleteNode(root, 8));

function inorder(root) {
  if (root === null) return;
  inorder(root.left);
  process.stdout.write(root.val + " ");
  inorder(root.right);
}




console.log("Before delete (inorder):");
inorder(root); // print sorted order

// Delete a node (for example: delete 7)
root = deleteNode(root, 7);

console.log("\nAfter delete (inorder):");
inorder(root);
console.log("\n");

