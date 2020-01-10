class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(toInsert) {
    const topNode = this;

    function findNode(toInsert) {
      let node = topNode;
      // console.log(node.left);
      while (node.left !== null && node.right !== null) {
        if (node.left != null) {
          node = node.left;
        }
        if (node.right != null) {
          node = node.right;
        }
      }
      if (toInsert < node.value) {
        node.left = new BinarySearchTree(toInsert);
      } else if (toInsert > node.value) {
        node.right = new BinarySearchTree(toInsert);
      }
    }
    findNode(toInsert);
    console.log(this);
    return this;

    // function traverseTree(node) {
    //   // 1. does our node have children?
    //   // 2. are they both empty?
    //   // 3 if so, new tree --> check if insert is lower or higher than node.value
    //   // 4. store the null node for later eg --> if insert value is lower than top node
    //   // 5.

    //   console.log("the first node is", topNode);

    //   if (node && node.left === null && node.right === null) {
    //     if (toInsert === node.value) {
    //       return;
    //     }
    //     if (toInsert < node.value) {
    //       node.left = new BinarySearchTree(toInsert);
    //       return;
    //     } else if (toInsert > node.value) {
    //       node.right = new BinarySearchTree(toInsert);
    //       return;
    //     }
    //   }

    //   if (toInsert < topNode.value) {
    //     console.log("value is", node.value);
    //   }

    //   if (node && node.value > toInsert && topNode.value > toInsert) {
    //     console.log("node value", node.value);
    //     traverseTree(node.left);
    //   } else if (node && node.value < toInsert && topNode.value > toInsert) {
    //     console.log(node.right);
    //     traverseTree(node.right);
    //   }
    //   // else if (node && toInsert < topNode) {}
    // }

    // traverseTree(this);
    // // console.log(this);
    // // return this;
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
