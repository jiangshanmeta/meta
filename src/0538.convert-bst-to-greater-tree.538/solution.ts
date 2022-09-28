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

function convertBST (root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }
    let greaterSum = 0;
    function traversal (root:TreeNode) {
        root.right !== null && traversal(root.right);
        root.val += greaterSum;
        greaterSum = root.val;
        root.left !== null && traversal(root.left);
    }
    traversal(root);
    return root;
}
