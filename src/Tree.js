class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(valueToInsert) {
    this.children.push(new Tree(valueToInsert));
  }

  contains(valueToFind) {
    let found = false;
    function traverseTree(node) {
      if (!node) found = false;
      if (valueToFind === node.value) found = true;

      if (node.children.length > 0)
        for (let i = 0; i < node.children.length; i++)
          traverseTree(node.children[i]);
    }
    traverseTree(this);
    return found;
  }
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
