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

function generateTrees (n: number): Array<TreeNode | null> {
    const matrix:TreeNode[][][] = new Array(n + 1);
    for (let i = n; i > 0; i--) {
        matrix[i] = new Array(n + 1);
        for (let j = i; j <= n; j++) {
            matrix[i][j] = [];
            for (let k = i; k <= j; k++) {
                if (k === i && k === j) {
                    matrix[i][j].push(new TreeNode(k));
                } else if (k === i) {
                    const rightNodes = matrix[k + 1][j];
                    for (let m = 0; m < rightNodes.length; m++) {
                        const root = new TreeNode(k);
                        root.right = rightNodes[m];
                        matrix[i][j].push(root);
                    }
                } else if (k === j) {
                    const leftNodes = matrix[i][k - 1];
                    for (let m = 0; m < leftNodes.length; m++) {
                        const root = new TreeNode(k);
                        root.left = leftNodes[m];
                        matrix[i][j].push(root);
                    }
                } else {
                    const leftNodes = matrix[i][k - 1];
                    const rightNodes = matrix[k + 1][j];
                    for (let m = 0; m < leftNodes.length; m++) {
                        for (let n = 0; n < rightNodes.length; n++) {
                            const root = new TreeNode(k);
                            root.left = leftNodes[m];
                            root.right = rightNodes[n];
                            matrix[i][j].push(root);
                        }
                    }
                }
            }
        }
    }
    return matrix[1][n];
}
