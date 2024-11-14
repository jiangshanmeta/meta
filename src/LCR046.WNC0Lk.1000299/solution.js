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
var rightSideView = function (root) {
    const result = [];
    if (!root) {
        return result;
    }
    let nodes = [root, ];
    while (nodes.length) {
        const nNodes = [];
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].left && nNodes.push(nodes[i].left);
            nodes[i].right && nNodes.push(nodes[i].right);
        }
        result.push(nodes[nodes.length - 1].val);
        nodes = nNodes;
    }
    return result;
};
