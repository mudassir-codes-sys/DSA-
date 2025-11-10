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
  printGraph() {
    for (const vertex in this.adjList) {
      console.log(vertex + "->" + this.adjList[vertex]);
    }
  }
  bfsAll() {
    let visited = {};
    let vertices = Object.keys(this.adjList);
    for (let start of vertices) {
      if (!visited[start]) {
        let q = [start];
        visited[start] = true;

        while (q.length > 0) {
          let curr = q.shift();
          console.log(curr);
          for (let neighbor of this.adjList[curr]) {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              q.push(neighbor);
            }
          }
        }
      }
    }
  }

  bfs(start) {
    let visited = {};
    let queue = [];
    visited[start] = true;
    queue.push(start);

    while (queue.length > 0) {
      let curr = queue.shift();
      console.log(curr);

      for (let neighbor of this.adjList[curr]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
  dfs(start, visited = {}) {
    if (!visited[start]) {
      visited[start] = true;
      console.log(start);
      for (let neighbor of this.adjList[start]) {
        if (!visited[neighbor]) {
          this.dfs(neighbor, visited);
        }
      }
    }
  }
  dfsAll() {
    let visited = {};

    const dfsHelper = (node) => {
      visited[node] = true;
      console.log(node);

      for (let neighbour of this.adjList[node]) {
        if (!visited[neighbour]) {
          dfsHelper(neighbour);
        }
      }
    };

    // agar start node unknown hai to har vertex check karo
    for (let vertex of Object.keys(this.adjList)) {
      if (!visited[vertex]) {
        dfsHelper(vertex);
      }
    }
  }
  isCycleDfs(start, par, visited = {}) {
    visited[start] = true;
    for (let neighbors of this.adjList[start]) {
      if (!visited[neighbors]) {
        if (this.isCycleDfs(neighbors, start, visited)) return true;
      }
      else if (neighbors !== par) return true;
    }
    return false;
  }
}

const g = new Graph();

// add some edges
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("C", "E");

// print the graph
// g.printGraph();
// g.bfsAll();
// g.bfs("A");
g.dfs("A");
g.dfsAll();
console.log(g.isCycleDfs("A" , -1));
g.printGraph()

