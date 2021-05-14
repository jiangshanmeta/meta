
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function verticalOrder (root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    let leftMost = 0;

    function getLeftMost (root:TreeNode, index:number) {
        leftMost = Math.min(leftMost, index);
        root.left && getLeftMost(root.left, index - 1);
        root.right && getLeftMost(root.right, index + 1);
    }
    getLeftMost(root, 0);
    const result:number[][] = [];
    function levelOrder (nodes:TreeNode[], indexs:number[]) {
        const nNodes:TreeNode[] = [];
        const nIndexs:number[] = [];
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            const index = indexs[i];
            if (!result[index]) {
                result[index] = [];
            }
            result[index].push(node.val);
            if (node.left) {
                nNodes.push(node.left);
                nIndexs.push(index - 1);
            }
            if (node.right) {
                nNodes.push(node.right);
                nIndexs.push(index + 1);
            }
        }
        nNodes.length && levelOrder(nNodes, nIndexs);
    }
    levelOrder([root, ], [-leftMost, ]);
    return result;
}
