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

function balanceBST (root: TreeNode | null): TreeNode | null {
    if (!root) {
        return root;
    }
    const seq:TreeNode[] = [];
    inOrder(root, seq);

    return build(seq, 0, seq.length - 1);
}

function inOrder (root:TreeNode, sequence:TreeNode[]) {
    root.left && inOrder(root.left, sequence);
    sequence.push(root);
    root.right && inOrder(root.right, sequence);
}

function build (seq:TreeNode[], left:number, right:number):TreeNode|null {
    if (right < left) {
        return null;
    }
    const mid = left + ((right - left) >> 1);
    const root = seq[mid];
    root.left = build(seq, left, mid - 1);
    root.right = build(seq, mid + 1, right);
    return root;
}
