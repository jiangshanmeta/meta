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

function levelOrderBottom (root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }
    const result:number[][] = [];
    levelorder([root, ], result);
    return result;
}

function levelorder (levelNodes:TreeNode[], result:number[][]):void {
    const levelVals:number[] = [];
    const nextLevelNodes:TreeNode[] = [];
    for (let i = 0; i < levelNodes.length; i++) {
        const node = levelNodes[i];
        levelVals.push(node.val);
        node.left !== null && nextLevelNodes.push(node.left);
        node.right !== null && nextLevelNodes.push(node.right);
    }
    nextLevelNodes.length > 0 && levelorder(nextLevelNodes, result);
    result.push(levelVals);
}
