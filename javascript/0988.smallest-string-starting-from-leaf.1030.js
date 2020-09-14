/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let result;
    function dfs (node, str) {
        str = String.fromCharCode(node.val + 97) + str;
        if (node.left === null && node.right === null) {
            if (result === undefined) {
                result = str;
            } else if (str < result) {
                result = str;
            }
        } else {
            node.left && dfs(node.left, str);
            node.right && dfs(node.right, str);
        }
    }
    dfs(root, '');
    return result;
};
