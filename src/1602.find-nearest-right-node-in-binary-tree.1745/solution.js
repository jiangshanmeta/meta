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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function (root, u) {
    if (!root) {
        return null;
    }
    let levelNodes = [root, ];
    while (levelNodes.length) {
        const nextLevel = [];
        for (let i = 0; i < levelNodes.length; i++) {
            const node = levelNodes[i];
            if (node === u) {
                if (i + 1 < levelNodes.length) {
                    return levelNodes[i + 1];
                } else {
                    return null;
                }
            }
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
        }
        levelNodes = nextLevel;
    }
    return null;
};
