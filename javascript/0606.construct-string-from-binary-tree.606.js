/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
// 先序遍历
var tree2str = function (t) {
    let str = '';
    function preOrderTravel (node) {
        str += node.val;

        // omit 规则：
        // 有左子树没有右子树 代表空右子树的()omit
        // 叶节点 没有下一层 ()
        if (node.left) {
            str += '(';
            preOrderTravel(node.left);
            str += ')';
        } else if (node.right) {
            str += '()';
        }

        if (node.right) {
            str += '(';
            preOrderTravel(node.right);
            str += ')';
        }
    }

    t && preOrderTravel(t);
    return str;
};
