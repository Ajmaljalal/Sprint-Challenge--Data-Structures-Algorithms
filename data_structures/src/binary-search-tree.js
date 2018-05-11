function minDepth(node) {
  if (typeof node === 'undefined') {
    return 0;
  }
  return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}

function maxDepth(node) {
  if (typeof node === 'null') {
    return 0;
  }
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}



const checkBalanced = (rootNode) => {
  /* Your code here */
  if (typeof rootNode === 'null') {
    return null;
  }
  return maxDepth(rootNode) - minDepth(rootNode) <= 1;

};

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }

  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }
}

module.exports = {
  BinarySearchTree,
  checkBalanced,
};