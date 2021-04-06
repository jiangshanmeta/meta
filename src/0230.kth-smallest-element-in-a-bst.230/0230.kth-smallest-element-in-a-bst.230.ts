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

function kthSmallest (root: TreeNode | null, k: number): number {
    const stack:TreeNode[] = [];
    while (root) {
        stack.push(root);
        root = root.left;
    }
    while (stack.length) {
        let root:TreeNode|null = stack.pop()!;
        k--;
        if (k === 0) {
            return root!.val;
        }
        root = root.right;
        while (root) {
            stack.push(root);
            root = root.left;
        }
    }
    return 0;
}
