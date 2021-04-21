/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function (root) {
    const result = [];
    function postOrder (root) {
        if (!root) {
            return 0;
        }
        const left = postOrder(root.left);
        const right = postOrder(root.right);

        const dis = Math.max(left, right);
        if (dis === result.length) {
            result.push([]);
        }
        result[dis].push(root.val);
        return dis + 1;
    }
    postOrder(root);
    return result;
};
