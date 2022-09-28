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

function mirrorTree (root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    mirrorTree(root.left);
    mirrorTree(root.right);
    return root;
}
