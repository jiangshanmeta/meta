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

function printTree (root: TreeNode | null): string[][] {
    if (!root) {
        return [];
    }
    const result:string[][] = [];
    const height = getHeight(root);
    const N = 2 ** height - 1;
    for (let i = 0; i < height; i++) {
        result[i] = new Array(N).fill('');
    }
    result[0][N >> 1] = root.val + '';
    height > 1 && levelOrder([N >> 1, ], [root, ], result, 1, (N + 1) >> 2);

    return result;
}

function levelOrder (indexs:number[], nodes:TreeNode[], result:string[][], row:number, diff:number) {
    const nIndexs:number[] = [];
    const nNodes:TreeNode[] = [];
    for (let i = 0; i < indexs.length; i++) {
        const index = indexs[i];
        const node = nodes[i];
        if (node.left) {
            const lIndex = index - diff;
            result[row][lIndex] = node.left.val + '';
            nIndexs.push(lIndex);
            nNodes.push(node.left);
        }
        if (node.right) {
            const rIndex = index + diff;
            result[row][rIndex] = node.right.val + '';
            nIndexs.push(rIndex);
            nNodes.push(node.right);
        }
    }

    nIndexs.length && levelOrder(nIndexs, nNodes, result, row + 1, diff / 2);
}

function getHeight (root:TreeNode|null):number {
    if (!root) {
        return 0;
    }
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}
