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
    // console.log("headValue", this.logA);
    // let linkedList = new LinkedList(value);
    // linkedList.tail = new Node(value);

    if (this.next === undefined) {
      this.head = new Node(value);
      this.tail = this.head;
      return this.head;
    }

    this.tail = new Node(value);
    return this.tail;

    // console.log("wll", this.tail);

    //1- we need iterate through the list
    //2- we need to get to the end of the list
    //3- we need to add the object value to the new node
    //4- we need to return the new node
  }

  removeHead() {}

  findNode(value) {}

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
