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

function isSubStructure (A: TreeNode | null, B: TreeNode | null): boolean {
    if (B === null) {
        return false;
    }
    if (A === null) {
        return false;
    }

    return judge(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}

function judge (A:TreeNode|null, B:TreeNode|null) {
    if (A && B) {
        return A.val === B.val && judge(A.left, B.left) && judge(A.right, B.right);
    } else if (A) {
        return true;
    } else if (B) {
        return false;
    } else {
        return true;
    }
}
