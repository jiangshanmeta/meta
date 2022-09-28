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
var maxProduct = function (root) {
    // 所有节点的和
    const total = getTotal(root);
    let result = 0;
    function postOrder (root) {
        if (!root) {
            return 0;
        }
        const left = postOrder(root.left);
        const right = postOrder(root.right);
        // 切断和左子树连接 或者 切断和右子树连接
        result = Math.max(result, left * (total - left), right * (total - right));
        return left + right + root.val;
    }
    postOrder(root);
    return result % (10 ** 9 + 7);
};

function getTotal (root) {
    if (!root) {
        return 0;
    }
    return root.val + getTotal(root.left) + getTotal(root.right);
}
