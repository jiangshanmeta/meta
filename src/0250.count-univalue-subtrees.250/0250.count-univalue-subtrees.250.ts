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

function countUnivalSubtrees (root: TreeNode | null): number {
    let result = 0;
    function postOrder (root:TreeNode):[boolean, number] {
        if (root.left && root.right) {
            const [leftIs, leftVal, ] = postOrder(root.left);
            const [rightIs, rightVal, ] = postOrder(root.right);
            if (!leftIs || !rightIs || root.val !== leftVal || root.val !== rightVal) {
                return [false, 0, ];
            }
            result++;
            return [true, root.val, ];
        } else if (root.left) {
            const [leftIs, leftVal, ] = postOrder(root.left);
            if (!leftIs || root.val !== leftVal) {
                return [false, 0, ];
            }
            result++;
            return [true, root.val, ];
        } else if (root.right) {
            const [rightIs, rightVal, ] = postOrder(root.right);
            if (!rightIs || root.val !== rightVal) {
                return [false, 0, ];
            }
            result++;
            return [true, root.val, ];
        } else {
            result++;
            return [true, root.val, ];
        }
    }
    root && postOrder(root);
    return result;
}
