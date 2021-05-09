/**
 * Universal Graph class
 */
class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.list[v1].push(v2);
  }
}

export { Graph as default, Graph}