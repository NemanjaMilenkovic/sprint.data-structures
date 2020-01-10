class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = [];
    this.right = [];
  }
  insert(toInsert) {
    let direction = true;

    function traverseTree(node) {
      // 1. we need to get to an end of the tree (recurse untill both .left and .right are empty [])
      // 2. once we get to the end, we need to check if value is supposed to go to the .left or .right
      // 3. we need to create new node and assign toInsert to the node value
      // console.log("test1", Array.isArray(node.left) && node.left.length);

      // node.left[0].value

      if (!(node.left[0] && node.right[0])) {
        if (toInsert < node.value) {
          node.left.push(new BinarySearchTree(toInsert));
          return;
        }

        if (toInsert > node.value) {
          node.right.push(new BinarySearchTree(toInsert));
          return;
        }
      } else {
        if (node.value > toInsert) {
          traverseTree(node.left[0]);
        }

        if (node.value < toInsert) {
          traverseTree(node.right[0]);
        }
      }
    }
    let l = this;
    traverseTree(l);
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
