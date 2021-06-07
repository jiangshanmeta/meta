/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} u
 * @return {TreeNode}
 */
function findNearestRightNode (root: TreeNode, u: TreeNode): TreeNode | null {
    let levelNodes = [root, ];
    while (levelNodes.length) {
        const nNodes:TreeNode[] = [];
        for (let i = 0; i < levelNodes.length; i++) {
            if (i + 1 < levelNodes.length && levelNodes[i] === u) {
                return levelNodes[i + 1];
            }
            levelNodes[i].left && nNodes.push(levelNodes[i].left);
            levelNodes[i].right && nNodes.push(levelNodes[i].right);
        }
        levelNodes = nNodes;
    }
    return null;
}
