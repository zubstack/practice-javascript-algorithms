const Node = require('./Node');

class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    if (this.listHead == null) this.prepend(value);
    else {
      let temp = this.listHead;
      while (temp.nextNode != null) temp = temp.nextNode;
      temp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let temp = null;
    if (this.listHead != null) temp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = temp;
  }

  size() {
    let temp = this.listHead;
    let count = 0;
    while (temp != null) {
      count += 1;
      temp = temp.nextNode;
    }
    return count;
  }

  head() {
    return this.listHead?.value || null;
  }

  tail() {
    if (!this.listHead) return null;
    let temp = this.listHead;
    while (temp.nextNode != null) {
      temp = temp.nextNode;
    }
    return temp.value;
  }

  at(index) {
    let temp = this.listHead;
    let count = 0;
    while (count !== index && temp != null) {
      temp = temp.nextNode;
      count += 1;
    }
    if (temp?.value) {
      return temp.value;
    }
    return null;
  }

  pop() {
    if (!this.listHead) return null;
    let cur = this.listHead;
    let prev = null;
    while (cur.nextNode != null) {
      prev = cur;
      cur = cur.nextNode;
    }
    if (prev) {
      prev.nextNode = null;
    } else {
      this.listHead = null;
    }
    return cur.value;
  }

  contains(value) {
    let temp = this.listHead;
    while (temp != null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    if (!this.listHead) return null;
    let temp = this.listHead;
    let count = 0;
    while (temp != null) {
      if (temp.value === value) return count;
      temp = temp.nextNode;
      count += 1;
    }
    return null;
  }

  toString() {
    if (!this.listHead) return null;
    let temp = this.listHead;
    let str = '';
    while (temp != null) {
      str += `( ${temp.value.toString()} ) -> `;
      temp = temp.nextNode;
    }
    str += null;
    return str;
  }
}

module.exports = LinkedList;
