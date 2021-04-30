/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var diameter = function (root) {
    if (!root) {
        return 0;
    }
    let result = 1;
    function postOrder (root) {
        if (root.children.length === 0) {
            return 1;
        }
        const sub = root.children.map(item => postOrder(item)).sort((a, b) => b - a);
        if (sub.length === 1) {
            result = Math.max(result, sub[0] + 1);
            return sub[0] + 1;
        } else {
            result = Math.max(result, sub[0] + sub[1] + 1);
            return sub[0] + 1;
        }
    }
    postOrder(root);
    return result - 1;
};
