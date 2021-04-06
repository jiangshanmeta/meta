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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten (root: TreeNode | null): void {
    if (root === null) {
        return;
    }
    flatten(root.left);
    flatten(root.right);
    if (root.left !== null) {
        if (root.right === null) {
            root.right = root.left;
            root.left = null;
        } else {
            const leftH = root.left;
            root.left = null;
            let node = leftH;
            const rightH = root.right;
            while (node.right !== null) {
                node = node.right;
            }
            node.right = rightH;
            root.right = leftH;
        }
    }
}
