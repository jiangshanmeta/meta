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

function isSubtree (s: TreeNode | null, t: TreeNode | null): boolean {
    if (s === null || t === null) {
        return false;
    }

    return match(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
}

function match (s:TreeNode|null, t:TreeNode|null):boolean {
    if (s && t) {
        return s.val === t.val && match(s.left, t.left) && match(s.right, t.right);
    } else if (s || t) {
        return false;
    } else {
        return true;
    }
}
