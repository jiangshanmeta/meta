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

function minDiffInBST (root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    const seq:number[] = [];
    inorder(root, seq);
    let result:number = seq[1] - seq[0];
    for (let i = 2; i < seq.length; i++) {
        result = Math.min(seq[i] - seq[i - 1], result);
    }

    return result;
}

function inorder (root:TreeNode, result:number[]):void {
    root.left !== null && inorder(root.left, result);
    result.push(root.val);
    root.right !== null && inorder(root.right, result);
}
