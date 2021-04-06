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

function leafSimilar (root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaves1:number[] = [];
    const leaves2:number[] = [];
    root1 !== null && getLeaves(root1, leaves1);
    root2 !== null && getLeaves(root2, leaves2);
    if (leaves1.length !== leaves2.length) {
        return false;
    }
    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }
    return true;
}

function getLeaves (root:TreeNode, result:number[]) {
    if (root.left === null && root.right === null) {
        result.push(root.val);
        return;
    }
    root.left !== null && getLeaves(root.left, result);
    root.right !== null && getLeaves(root.right, result);
}
