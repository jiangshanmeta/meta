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
// 基于后序遍历
var longestUnivaluePath = function (root) {
    let max = 1;
    // dfs 返回的是是从node开始值为val的最长的路径含有的节点数
    function dfs (node, val) {
        if (!node) {
            return 0;
        }

        if (node.val !== val) {
            dfs(node, node.val);
            return 0;
        } else {
            const left = (node.left && dfs(node.left, val)) || 0;
            const right = (node.right && dfs(node.right, val)) || 0;
            if (left + right + 1 > max) {
                max = left + right + 1;
            }
            return Math.max(left, right) + 1;
        }
    }
    root && dfs(root, root.val);

    return max - 1;
};
