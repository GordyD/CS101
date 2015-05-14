

class TreeNode {

  /**
   * @constructor
   * @param  {String} key
   * @param  {String|Object} value 
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.children = [];
  }

  /**
   * Add a child node to the node
   * 
   * @param {TreeNode} node
   * @throws {Error} If node object is not of instance TreeNode
   */
  addChild(node) {
    if (! node instanceof TreeNode) {
      throw new Error('Node is not a TreeNode and cannot be added as a child');
    }

    this.children.push(node);
  }

  /**
   * Removes given child from TreeNode provided it exists and it is a TreeNode
   * 
   * @param  {TreeNode} node
   * @throws {Error} If node object is not of instance TreeNode
   */
  removeChild(node) {
    if (! node instanceof TreeNode) {
      throw new Error('Node is not a TreeNode and cannot be removed from child nodes');
    }
    for(var i  = 0; i < this.children.length; i++) {
      if (this.children[i].equals(node)) {
        this.children.splice(i, 1);
        break;
      }
    } 
  }

  /**
   * Equality function for comparing one node to another
   * 
   * @param  {TreeNode} node
   * @return {Boolean}
   */
  equals(node) {
    return (this.key === node.key && this.value === node.value);
  }

  /**
   * Print the tree
   * 
   * @param {Function} outputFn
   */
  print(outputFn) {
    outputFn = outputFn || console.log;
    outputFn(this.key, this.value);
    printChildren(this.children, '');

    function printChildren(children, depth) {
      depth += '-';
      children.forEach(row => {
        outputFn(depth, row.key, row.value);
        printChildren(row.children, depth);
      })
    }
  }
}

export default TreeNode;