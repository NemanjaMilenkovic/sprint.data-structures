class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    function recurse(node) {
      // let direction;

      // if (direction !== undefined && direction.length === 0) {
      //   direction.push(new Tree(value));
      // }

      //  if (node.left.length === 0 && node.right.len) {
      //   node.children[0].push(new Tree(value));
      // }
      console.log("nodeChildren", node.children !== undefined);

      console.log("ssa");
      if (
        node.children[0] !== undefined > 0 &&
        node.children[0].value !== undefined &&
        node.children[0].value > value
      ) {
        console.log(node.children[0]);
        recurse(node.children[0]);

        // node.left.value = value;
        // node.
      }

      if (
        node.children[1] !== undefined &&
        node.children[1].value !== undefined &&
        node.children[1].value < value
      ) {
        console.log(node.children[0]);
        recurse(node.children[1]);

        // node.left.value = value;
        // node.
      }
    }
    const node = this;
    recurse(node);
  }

  contains(value) {}

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

module.exports = Tree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
