/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, nodes) {
    const set = new Set(nodes.map(item => item.val));

    function postOrder (root) {
        if (!root || set.has(root.val)) {
            return root;
        }
        const left = postOrder(root.left);
        const right = postOrder(root.right);
        if (left && right) {
            return root;
        }
        return left || right;
    }
    return postOrder(root);
};
