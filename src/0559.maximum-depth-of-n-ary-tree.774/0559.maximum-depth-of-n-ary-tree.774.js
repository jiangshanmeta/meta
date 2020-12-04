/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
// 多叉树的深度  利用后序遍历
var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    function postOrder (node) {
        if (node.children.length === 0) {
            return 1;
        }
        const child = node.children.map((node) => postOrder(node));
        return Math.max(...child) + 1;
    }
    return postOrder(root);
};
