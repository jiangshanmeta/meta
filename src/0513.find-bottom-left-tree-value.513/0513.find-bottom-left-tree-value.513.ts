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

function findBottomLeftValue (root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    return levelOrder([root, ]);
}

function levelOrder (levelNodes:TreeNode[]):number {
    const nextNodes:TreeNode[] = [];
    for (let i = 0; i < levelNodes.length; i++) {
        const node = levelNodes[i];
        node.left !== null && nextNodes.push(node.left);
        node.right !== null && nextNodes.push(node.right);
    }
    if (nextNodes.length > 0) {
        return levelOrder(nextNodes);
    } else {
        return levelNodes[0].val;
    }
}
