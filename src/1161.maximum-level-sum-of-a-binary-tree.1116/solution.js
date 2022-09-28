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
var maxLevelSum = function (root) {
    // 层序遍历
    let maxLevel = 0;
    let maxSum = -Infinity;
    let level = 1;
    let nodes = [
        root, ];
    while (nodes.length) {
        let sum = 0;
        const nextLevel = [];
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].left && nextLevel.push(nodes[i].left);
            nodes[i].right && nextLevel.push(nodes[i].right);
            sum += nodes[i].val;
        }
        if (sum > maxSum) {
            maxLevel = level;
            maxSum = sum;
        }
        level++;
        nodes = nextLevel;
    }
    return maxLevel;
};
