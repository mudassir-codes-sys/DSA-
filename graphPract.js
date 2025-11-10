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
    for (const key in this.adjList) {
      console.log(key + "->" + this.adjList[key]);
    }
  }
  bfs(start, visited = {}) {
    let q = [];
    q.push(start);
    visited[start] = true;

    while (q.length > 0) {
      let curr = q.shift();
      console.log(curr);
      for (let neighbor of this.adjList[curr]) {
        if (!visited[neighbor]) {
          q.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }
  dfs(start, visited = {}) {
    if (!visited[start]) {
      visited[start] = true;
      console.log(start);
    }
    for (const neighbor of this.adjList[start]) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited);
      }
    }
  }
  dfsCycle(start, par, visited = {}) {
    if (!visited[start]) {
      visited[start] = true;
    }
    for (const neighbor of this.adjList[start]) {
      if (!visited[neighbor]) {
        if (this.dfsCycle(neighbor, start, visited)) return true;
      } else if (neighbor !== par) return true;
    }
    return false;
  }
  bfsCycle(start, par, visited = {}) {
    let q = [[start, par]];
    visited[start] = true;

    while (q.length > 0) {
      let [curr, par] = q.shift();
      for (let neighbor of this.adjList[curr]) {
        if (!visited[neighbor]) {
          q.push([neighbor, curr]);
          visited[neighbor] = true;
        } else if (neighbor !== par) {
          return true;
        }
      }
    }
    return false;
  }
}

let g = new Graph();
g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(3, 5);
g.addEdge(4, 5);
g.bfs(1);
g.print();
g.dfs(1);

