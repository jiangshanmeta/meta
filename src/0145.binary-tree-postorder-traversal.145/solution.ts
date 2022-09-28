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

function postorderTraversal (root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    const result:number[] = [];
    postOrder(root, result);
    return result;
}

function postOrder (root:TreeNode, result:number[]):void {
    root.left !== null && postOrder(root.left, result);
    root.right !== null && postOrder(root.right, result);
    result.push(root.val);
}
