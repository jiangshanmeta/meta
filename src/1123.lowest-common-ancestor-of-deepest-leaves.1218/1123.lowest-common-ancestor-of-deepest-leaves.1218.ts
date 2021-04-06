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

function lcaDeepestLeaves (root: TreeNode | null): TreeNode | null {
    return postOrder(root)[1];
}

function postOrder (root:TreeNode|null):[number, TreeNode|null] {
    if (root === null) {
        return [0, null, ];
    }
    const [LH, LN, ] = postOrder(root.left);
    const [RH, RN, ] = postOrder(root.right);
    if (LH === RH) {
        return [
            LH + 1,
            root,
        ];
    } else if (LH > RH) {
        return [
            LH + 1,
            LN,
        ];
    } else {
        return [
            RH + 1,
            RN,
        ];
    }
}
