/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
    if (node.right) {
        node = node.right;
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    let parent = node.parent;
    while (parent && parent.right === node) {
        node = parent;
        parent = parent.parent;
    }
    return parent;
};
