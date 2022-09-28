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

function isSameTree (p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true;
    } else if (p !== null && q !== null) {
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else {
        return false;
    }
}
