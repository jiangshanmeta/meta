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

function deepestLeavesSum (root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    return getLastLevelSum([root, ]);
}

function getLastLevelSum (levelNodes:TreeNode[]):number {
    let sum = 0;
    const nextLevel:TreeNode[] = [];
    for (let i = 0; i < levelNodes.length; i++) {
        const node = levelNodes[i];
        sum += node.val;
        node.left !== null && nextLevel.push(node.left);
        node.right !== null && nextLevel.push(node.right);
    }
    if (nextLevel.length === 0) {
        return sum;
    } else {
        return getLastLevelSum(nextLevel);
    }
}
