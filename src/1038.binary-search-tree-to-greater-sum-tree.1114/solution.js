/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
    // 遍历求和
    const sum = getSum(root);
    // BST 中序遍历 按从小到大遍历
    root && inOrder(root, sum);
    return root;
};

function inOrder (node, sum) {
    if (node.left) {
        sum = inOrder(node.left, sum);
    }
    const tmp = node.val;
    node.val = sum;
    sum -= tmp;
    if (node.right) {
        sum = inOrder(node.right, sum);
    }

    return sum;
}

function getSum (node) {
    if (!node) {
        return 0;
    }

    return node.val + getSum(node.left) + getSum(node.right);
}
