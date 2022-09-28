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

function addOneRow (root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if (!root) {
        return new TreeNode(val);
    }
    if (depth === 1) {
        const node = new TreeNode(val);
        node.left = root;
        return node;
    }

    if (depth === 2) {
        const left = new TreeNode(val);
        left.left = root.left;
        root.left = left;
        const right = new TreeNode(val);
        right.right = root.right;
        root.right = right;
        return root;
    }

    depth--;
    addOneRow(root.left, val, depth);
    addOneRow(root.right, val, depth);
    return root;
}
