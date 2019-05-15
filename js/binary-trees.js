class BinaryNode {
  constructor(data) {
    // a node has data, left, and right pointers
    // left and right are intialized as null
    this.data = data;
    this.left = null;
    this.right = null;
  }
  setLeft(data) {
    this.left = new BinaryNode(data);
  }
  setRight(data) {
    this.right = new BinaryNode(data);
  }
  setData(data) {
    this.data = data;
  }
  addChild(data) {
    if (data != this.data) {
      //the data is valid for traversal
      //compare value
      if (data < this.data) {
        //code to go left
        if (this.left === null) {
          //left is available
          this.setLeft(data);
        } else {
          //traverse left
          this.left.addChild(data);
        }
      } else {
        //code to go right
        if (this.right === null) {
          //left is available
          this.setRight(data);
        } else {
          //traverse left
          this.right.addChild(data);
        }
      }
    }
  }
  searchNodes(data) {
    if (data === this.data) {
      console.log("node found");
      console.log(this);

      return this;
    } else {
      //return the value
      if (data < this.data) {
        console.log("at left");
        //code to go left
        if (this.left === null) {
          console.log("left null");
          //end of tree, value not found
          return false;
        } else {
          //traverse left
          console.log("entering left.searchNode");
          return this.left.searchNodes(data);
        }
      } else {
        console.log("at right");
        //code to go right
        if (this.right === null) {
          console.log("right null");
          //left is available
          return false;
        } else {
          //traverse left
          console.log("entering right.searchNode");
          return this.right.searchNodes(data);
        }
      }
    }
  }
  findSize(node) {
    let count;
    function recursion(node) {
      count++;
      if (node.left === null && node.right === null) {
        //end of tree
        return;
      } else {
        if (node.left != null) {
          recursion(node.left);
        }
        if (node.right != null) {
          recursion(node.right);
        }
      }
      return count;
    }
  }
}

class BinaryTree {
  constructor() {
    // when a new Tree is made, it has a root property
    this.root = null;
    // this.search = this.search.bind(this);
  }
  traverseTree() {}
  insert(data) {
    // add a new Node to the tree, with data as the Node's data
    //check tree for place to put node
    //start with root
    if (this.root === null) {
      this.root = new BinaryNode(data);
    } else {
      this.root.addChild(data);
    }
  }
  search(val) {
    // search the Tree for a node with the given value
    // if the node exists, return it
    // if the node doesn't exist, return false
    return this.root.searchNodes(val);
  }
  size(node) {
    // calculate the number of nodes in the tree, starting from the given node
    let count = 0;
    if (node === false) {
      return count;
    }
    function recursion(node) {
      count++;
      if (node.left === null && node.right === null) {
        //end of tree
      } else {
        if (node.left != null) {
          recursion(node.left);
        }
        if (node.right != null) {
          recursion(node.right);
        }
      }
    }
    recursion(node);
    return count;
  }
  getMax() {
    // return the maximum value stored in the tree
    let max = null;
    function recursion(node) {
      max = node.data;
      if (node.right != null) {
        recursion(node.right);
      }
    }
    if (this.root != null) {
      recursion(this.root);
    }
    return max;
  }
  height(node) {
    // calculate the maximum amount of nodes in any one path from the given node
    //have a count variable that will be initialised as 0
    function recursion(node, count) {
      count++;
      if (node.right === null && node.left === null) {
        return count;
      } else {
        let rightMax = count;
        let leftMax = count;
        if (node.right != null) {
          rightMax = recursion(node.right, rightMax);
        }
        if (node.left != null) {
          leftMax = recursion(node.left, leftMax);
        }
        if (rightMax > leftMax) {
          return rightMax;
        } else {
          return leftMax;
        }
      }
    }
    return recursion(node, 0);
  }
  isBalanced(node) {
    // return true or false based on whether the sub-tree starting at the given node is balanced
    // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
    // A tree is balanced if all branches end within one level of each other.
  }
}
let nodeTree = new BinaryTree();
nodeTree.insert(3);
nodeTree.insert(1);
nodeTree.insert(5);
nodeTree.insert(7);
nodeTree.insert(4);
nodeTree.insert(12);
nodeTree.insert(2);

console.log(nodeTree.height(nodeTree.search(5)));
