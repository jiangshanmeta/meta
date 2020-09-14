/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    // 先找到所有节点
    function getNodes (node, sequence) {
        sequence.push(node);
        node.left && getNodes(node.left, sequence);
        node.right && getNodes(node.right, sequence);
    }
    const sequence = [];
    root && getNodes(root, sequence);

    // 以每个节点作为根节点 向下搜索看是否有和为sum的
    let count = 0;
    function dfs (node, cur) {
        cur += node.val;
        cur === sum && count++;
        node.left && dfs(node.left, cur);
        node.right && dfs(node.right, cur);
    }

    for (let i = 0; i < sequence.length; i++) {
        dfs(sequence[i], 0);
    }
    return count;
};
