const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    this.storage.set(index, value);
    // O(n)
  }

  retrieve(key) {
    const index = simpleHash(key, this.limit);
    return this.storage.get(index);
    // O(n)
  }

  remove(key) {
    const index = simpleHash(key, this.limit);
    if (!this.storage.get(index)) return false;

    this.storage.set(index, null);
    return true;
    // O(n)
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
