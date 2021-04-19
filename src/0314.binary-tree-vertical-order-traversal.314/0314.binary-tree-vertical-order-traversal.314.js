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
 * @return {number[][]}
 */
var verticalOrder = function (root) {
    if (!root) {
        return [];
    }
    let leftMost = 0;
    function getLeftMost (root, index) {
        leftMost = Math.min(index, leftMost);
        root.left && getLeftMost(root.left, index - 1);
        root.right && getLeftMost(root.right, index + 1);
    }
    getLeftMost(root, 0);

    function levelOrder (nodes, indexs, result) {
        const nNodes = [];
        const nIndexs = [];
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            const index = indexs[i];
            if (!result[index]) {
                result[index] = [];
            }
            result[index].push(node.val);
            node.left && nNodes.push(node.left) && nIndexs.push(index - 1);
            node.right && nNodes.push(node.right) && nIndexs.push(index + 1);
        }
        nNodes.length && levelOrder(nNodes, nIndexs, result);
    }
    const result = [];
    levelOrder([root, ], [-leftMost, ], result);
    return result;
};
