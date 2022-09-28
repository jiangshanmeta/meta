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

function closestValue (root: TreeNode | null, target: number): number {
    if (!root) {
        return 0;
    }
    let minDiff = Infinity;
    let result = 0;
    while (root) {
        const diff = Math.abs(root.val - target);
        if (diff < minDiff) {
            minDiff = diff;
            result = root.val;
        }

        if (root.val > target) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return result;
}
