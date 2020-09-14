/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function inOrderTravel (node, sequence) {
    node.left && inOrderTravel(node.left, sequence);
    sequence.push(node.val);
    node.right && inOrderTravel(node.right, sequence);
}

var isValidBST = function (root) {
    if (!root) {
        return true;
    }

    const sequence = [];
    // 先中序遍历
    inOrderTravel(root, sequence);

    // 看是否是单调递增
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            return false;
        }
    }
    return true;
};
