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

function checkSubTree (t1: TreeNode | null, t2: TreeNode | null): boolean {
    if (!t1 || !t2) {
        return false;
    }
    return match(t1, t2) || checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2);
}

function match (t1:TreeNode|null, t2:TreeNode|null) {
    if (t1 && t2) {
        return t1.val === t2.val && match(t1.left, t2.left) && match(t1.right, t2.right);
    } else if (!t1 && !t2) {
        return true;
    }
    return false;
}
