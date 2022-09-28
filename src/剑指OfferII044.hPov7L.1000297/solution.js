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
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) {
        return [];
    }
    const result = [];
    let nodes = [root, ];
    while (nodes.length) {
        const nNodes = [];
        let max = -Infinity;
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            max = Math.max(max, node.val);
            node.left && nNodes.push(node.left);
            node.right && nNodes.push(node.right);
        }
        result.push(max);
        nodes = nNodes;
    }

    return result;
};
