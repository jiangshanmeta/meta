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

function hasPathSum (root: TreeNode | null, sum: number): boolean {
    if (root === null) {
        return false;
    }
    sum -= root.val;
    if (root.left === null && root.right === null) {
        return sum === 0;
    }
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}
