/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 后序遍历

var findTilt = function (root) {
    if (!root) {
        return 0;
    }

    let counter = 0;

    function dfs (node) {
        if (!node) {
            return 0;
        }

        const leftSubTreeSum = dfs(node.left);
        const rightSubTreeSum = dfs(node.right);
        counter += Math.abs(leftSubTreeSum - rightSubTreeSum);

        return leftSubTreeSum + rightSubTreeSum + node.val;
    }

    dfs(root);

    return counter;
};
