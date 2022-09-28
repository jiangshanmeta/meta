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

function lowestCommonAncestor (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root || !p || !q) {
        return root;
    }
    if (p.val > q.val) {
        const tmp = q;
        q = p;
        p = tmp;
    }
    return helper(root, p.val, q.val);
}

function helper (root:TreeNode|null, p:number, q:number):TreeNode|null {
    if (root === null || root.val === p || root.val === q) {
        return root;
    }
    if (root.val > p && root.val < q) {
        return root;
    } else if (root.val > q) {
        return helper(root.left, p, q);
    } else {
        return helper(root.right, p, q);
    }
}
