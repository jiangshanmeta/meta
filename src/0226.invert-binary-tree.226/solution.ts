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

function invertTree (root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return root;
    }
    const tmp:TreeNode|null = root.left;
    root.left = root.right;
    root.right = tmp;
    root.left !== null && invertTree(root.left);
    root.right !== null && invertTree(root.right);
    return root;
}
