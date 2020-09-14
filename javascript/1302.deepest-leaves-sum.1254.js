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
// 层序遍历找最后一层
var deepestLeavesSum = function (root) {
    return levelOrder([
        root, ]);
};

function levelOrder (lastLevel) {
    const nextLevel = [];
    for (let i = 0; i < lastLevel.length; i++) {
        lastLevel[i].left && nextLevel.push(lastLevel[i].left);
        lastLevel[i].right && nextLevel.push(lastLevel[i].right);
    }
    if (nextLevel.length === 0) {
        return lastLevel.reduce((sum, node) => {
            return sum + node.val;
        }, 0);
    } else {
        return levelOrder(nextLevel);
    }
}
