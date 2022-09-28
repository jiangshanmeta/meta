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

function preorderTraversal (root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    const result:number[] = [];
    preorder(root, result);
    return result;
}

function preorder (root:TreeNode, result:number[]) {
    result.push(root.val);
    root.left !== null && preorder(root.left, result);
    root.right !== null && preorder(root.right, result);
}
