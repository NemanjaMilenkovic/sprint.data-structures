class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(valueToInsert) {
    const newNodeTree = new BinarySearchTree(valueToInsert);
    function traverseTree(node) {
      if (!node) return newNodeTree;
      if (valueToInsert == node.value) return;

      if (valueToInsert < node.value) {
        if (!node.left) {
          node.left = newNodeTree;
          return;
        } else {
          traverseTree(node.left);
        }
      } else {
        if (!node.right) {
          node.right = newNodeTree;
          return;
        } else {
          traverseTree(node.right);
        }
      }
    }
    traverseTree(this);
    return this;
  }
}

module.exports = BinarySearchTree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
