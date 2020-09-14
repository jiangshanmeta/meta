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
// 层序遍历找树的最大宽度
function levelTravel (nodes, indexs, sequences) {
    const newIndexs = [];
    const newNodes = [];

    nodes.forEach((node, index) => {
        if (node.left) {
            newNodes.push(node.left);
            newIndexs.push(2 * indexs[index] + 1);
        }
        if (node.right) {
            newNodes.push(node.right);
            newIndexs.push(2 * indexs[index] + 2);
        }
    });

    if (newNodes.length) {
        sequences.push(newNodes.length === 1 ? 0 : newIndexs[newIndexs.length - 1] - newIndexs[0]);
        levelTravel(newNodes, newIndexs, sequences);
    }
}

var widthOfBinaryTree = function (root) {
    if (!root) {
        return 0;
    }

    const sequence = [
        0, ];

    levelTravel([
        root, ], [
        0, ], sequence);

    return Math.max(...sequence) + 1;
};
