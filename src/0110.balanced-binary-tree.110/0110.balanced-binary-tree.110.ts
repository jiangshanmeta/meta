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

function isBalanced (root: TreeNode | null): boolean {
    return helper(root)[0];
}

function helper (root:TreeNode|null):[boolean, number] {
    if (root === null) {
        return [true, 0, ];
    }
    const [LB, LH, ] = helper(root.left);
    if (!LB) {
        return [false, 0, ];
    }
    const [RB, RH, ] = helper(root.right);
    if (!RB) {
        return [false, 0, ];
    }
    const diff = Math.abs(LH - RH);
    if (diff > 1) {
        return [false, 0, ];
    }
    return [
        true,
        Math.max(LH, RH) + 1,
    ];
}
