function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    const newNode = new Node(value);
    if (this.head === undefined) {
      this.head = newNode;
      this.tail = this.head;
      return this.head;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this.tail;

    //1 - we need iterate through the list
    //2 - we need to get to the end of the list
    //3 - we need to add the object value to the new node
    //4 - we need to return the new node
  }

  removeHead() {
    const headStorage = this.head;
    const nextHead = this.head.next;
    this.head = nextHead;

    return headStorage;
  }

  findNode(value) {
    let node = this.head;
    while (node.next != null) {
      if (node.value === value) {
        return node;
      } else {
        node = node.next;
      }
    }
    return null;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
