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
  contains(valueToFind) {
    function traverseTree(node) {
      if (!node) return false;
      if (valueToFind === node.value) return true;
      if (node.left === null && node.right === null) return false;
      if (valueToFind < node.valueToFind) return traverseTree(node.left);
      else return traverseTree(node.right);
    }
    return traverseTree(this);
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
