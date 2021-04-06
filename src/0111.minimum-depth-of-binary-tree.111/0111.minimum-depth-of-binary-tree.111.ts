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

function minDepth (root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    if (root.left !== null && root.right !== null) {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    } else if (root.left !== null) {
        return minDepth(root.left) + 1;
    } else if (root.right !== null) {
        return minDepth(root.right) + 1;
    } else {
        return 1;
    }
}
