/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneTree = function (root) {
    if (!root) {
        return root;
    }
    const copy = new Node(root.val, root.children.map(item => cloneTree(item)));
    return copy;
};
