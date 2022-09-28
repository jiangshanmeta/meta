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

function inorderSuccessor (root: TreeNode | null, p: TreeNode | null): TreeNode | null {
    if (!root || !p) {
        return null;
    }
    const stack:TreeNode[] = [];
    let lastIs = false;
    while (root) {
        stack.push(root);
        root = root.left;
    }
    while (stack.length) {
        let node = stack.pop();
        if (lastIs) {
            return node;
        }
        if (node === p) {
            lastIs = true;
        }
        node = node.right;
        while (node) {
            stack.push(node);
            node = node.left;
        }
    }

    return null;
}
