let arr = [1, 0, -1, 0, -2, 2];
function divide(arr, st = 0, end = arr.length - 1) {
  if (st >= end) return;
  let mid = Math.floor(st + (end - st) / 2);
  divide(arr, st, mid);
  divide(arr, mid + 1, end);
  conq(arr, st, end, mid);
}
function conq(arr, st, end, mid) {
  let temp = [];
  let i = st;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    arr[i] < arr[j] ? temp.push(arr[i++]) : temp.push(arr[j++]);
  }
  while (i <= mid) temp.push(arr[i++]);
  while (j <= end) temp.push(arr[j++]);
  for (let k = 0; k < temp.length; k++) {
    arr[st++] = temp[k];
  }
}
divide(arr);
console.log(arr);

let array = [5, 2, 11, 7, 15];
let target = 9;
function find(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(find(array, target));

let s = ["flower", "flow", "flight"];
console.log(s[s.length - 1]);

let words = [];
let word = "hello";
words.push(word);
words.push("hey");
words.push("how");
words.push("areuou");
console.log(words);
console.log(words[3]);

let s1 = "abs";

let freq1 = new Array(26).fill(0);
let freq2 = new Array(26).fill(0);
for (let ch of s1) {
  freq1[ch.charCodeAt() - 97]++;
}
console.log(freq1);

class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }
  addEdge(u, v) {
    this.addVertex(u);
    this.addVertex(v);
    this.adjList[u].push(v);
    this.adjList[v].push(u);
  }
  print() {
    console.log(this.adjList);
  }
  bfs() {
    let visited = {};
    let vertices = Object.keys(this.adjList);
    for (const vertex of vertices) {
      if (!visited[vertex]) {
        let q = [vertex];
        visited[vertex] = true;
        console.log(visited);

        while (q.length > 0) {
          let curr = q.shift();
          console.log(curr);
          for (const elem of this.adjList[curr]) {
            if (!visited[elem]) {
              visited[elem] = true;
              q.push(elem);
              console.log(visited);
            }
          }
        }
      }
    }
  }
  bfsAll(start, visited = {}) {
    let q = [];
    q.push(start);
    visited[start] = true;
    while (q.length > 0) {
      let curr = q.shift();
      console.log(curr);
      for (const element of this.adjList[curr]) {
        if (!visited[element]) {
          visited[element] = true;
          q.push(element);
        }
      }
    }
  }
  dfsAll(start, visited = {}) {
    visited[start] = true;
    console.log(start);

    for (const element of this.adjList[start]) {
      if (!visited[element]) {
        this.dfsAll(element, visited);
      }
    }
  }

  dfs() {
    let visited = {};
    const helper = (node) => {
      visited[node] = true;
      console.log(node);
      for (const element of this.adjList[node]) {
        if (!visited[element]) {
          visited[element] = true;
          helper(element);
        }
      }
    };
    for (const vertex of Object.keys(this.adjList)) {
      if (!visited[vertex]) {
        helper(vertex);
      }
    }
  }
  hasCycle() {
    let visited = {};
    const helper = (node, parent) => {
      visited[node] = true;
      console.log(node);
      for (const element of this.adjList[node]) {
        if (!visited[element]) {
          visited[element] = true;
          if (helper(element, node)) return true;
        } else if (element !== parent) {
          return true;
        }
      }

      return false;
    };
    for (const vertex of Object.keys(this.adjList)) {
      if (!visited[vertex]) {
        if (helper(vertex, -1)) return true;
      }
    }
    return false;
  }
}
const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("C", "E");
g.bfs();
console.log("BFS:");
g.bfsAll("A");

console.log("DFS:");
g.dfsAll("A");
g.print();
console.log("Cycle present?", g.hasCycle());
