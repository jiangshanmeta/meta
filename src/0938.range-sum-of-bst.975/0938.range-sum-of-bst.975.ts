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

function rangeSumBST (root: TreeNode | null, L: number, R: number): number {
    if (root === null) {
        return 0;
    }
    if (root.val > R) {
        return rangeSumBST(root.left, L, R);
    } else if (root.val < L) {
        return rangeSumBST(root.right, L, R);
    }
    let result:number = root.val;
    result += rangeSumBST(root.left, L, R);
    result += rangeSumBST(root.right, L, R);
    return result;
}
