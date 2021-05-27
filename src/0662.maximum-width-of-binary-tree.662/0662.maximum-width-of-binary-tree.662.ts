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

function widthOfBinaryTree (root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let result = 1;
    function levelOrder (indexs:number[], nodes:TreeNode[]) {
        let minIndex = Infinity;
        let maxIndex = -Infinity;
        const nIndexs:number[] = [];
        const nNodes:TreeNode[] = [];
        for (let i = 0; i < indexs.length; i++) {
            const index = indexs[i];
            minIndex = Math.min(minIndex, index);
            maxIndex = Math.max(maxIndex, index);
            const node = nodes[i];
            if (node.left) {
                nIndexs.push(2 * index + 1);
                nNodes.push(node.left);
            }
            if (node.right) {
                nIndexs.push(2 * index + 2);
                nNodes.push(node.right);
            }
        }
        result = Math.max(result, maxIndex - minIndex + 1);

        if (nIndexs.length) {
            if (nIndexs.length === 1) {
                nIndexs[0] = 0;
            } else if (nIndexs.length === 2 && Math.abs(nIndexs[0] - nIndexs[1]) === 1) {
                nIndexs[0] = 1;
                nIndexs[1] = 2;
            }
            levelOrder(nIndexs, nNodes);
        }
    }
    levelOrder([0, ], [root, ]);
    return result;
}
