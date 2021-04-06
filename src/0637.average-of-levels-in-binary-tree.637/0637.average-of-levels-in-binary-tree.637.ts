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

function averageOfLevels (root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    const result:number[] = [];
    levelOrder([root, ], result);
    return result;
}

function levelOrder (levelNodes:TreeNode[], result:number[]):void {
    let sum = 0;
    const nextLevelNodes:TreeNode[] = [];
    for (let i = 0; i < levelNodes.length; i++) {
        const node = levelNodes[i];
        sum += node.val;
        node.left !== null && nextLevelNodes.push(node.left);
        node.right !== null && nextLevelNodes.push(node.right);
    }
    result.push(sum / levelNodes.length);
    nextLevelNodes.length > 0 && levelOrder(nextLevelNodes, result);
}
