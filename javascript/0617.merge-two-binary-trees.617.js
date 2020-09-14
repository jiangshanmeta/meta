/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    // 为什么要返回数组呢  问leetcode去
    if (!t1 && !t2) {
        return [];
    }

    function helper (t1, t2) {
        if (!t1) {
            return t2 || null;
        }
        if (!t2) {
            return t1;
        }

        t1.val = t1.val + t2.val;
        t1.left = helper(t1.left, t2.left);
        t1.right = helper(t1.right, t2.right);

        return t1;
    }

    return helper(t1, t2);
};
