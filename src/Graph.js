class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(num) {
    if (!this.nodes.hasOwnProperty(num)) this.nodes[num] = [];
    // O(1)
  }

  contains(num) {
    return this.nodes.hasOwnProperty(num);
    // O(1)
  }
}
module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
