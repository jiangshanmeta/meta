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

function convertBiNode (root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }
    root.right = convertBiNode(root.right);
    if (root.left === null) {
        return root;
    }
    const newRoot = <TreeNode>convertBiNode(root.left);
    root.left = null;
    let node = newRoot;
    while (node.right !== null) {
        node = node.right;
    }
    node.right = root;
    return newRoot;
}
