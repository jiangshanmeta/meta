/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
// 第一题two sum总该会做吧 O(n)时间复杂度的没难度吧
var findTarget = function (root, k) {
    const set = new Set();
    let flag = false;
    function inorder (node) {
        node.left && inorder(node.left);

        if (set.has(k - node.val)) {
            flag = true;
            return;
        }
        set.add(node.val);

        node.right && inorder(node.right);
    }
    inorder(root);
    return flag;
};
