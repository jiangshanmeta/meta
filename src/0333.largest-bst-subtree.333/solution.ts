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

function largestBSTSubtree (root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let result = 0;
    function postOrder (root:TreeNode):[boolean, number, number, number] {
        if (root.left && root.right) {
            const [leftIs, leftMin, leftMax, leftCount, ] = postOrder(root.left);
            const [rightIs, rightMin, rightMax, rightCount, ] = postOrder(root.right);
            if (!leftIs || !rightIs || root.val <= leftMax || root.val >= rightMin) {
                return [false, 0, 0, 0, ];
            }
            const count = leftCount + rightCount + 1;
            result = Math.max(result, count);
            return [true, leftMin, rightMax, count, ];
        } else if (root.left) {
            const [leftIs, leftMin, leftMax, leftCount, ] = postOrder(root.left);
            if (!leftIs || root.val <= leftMax) {
                return [false, 0, 0, 0, ];
            }
            const count = leftCount + 1;
            result = Math.max(result, count);
            return [true, leftMin, root.val, count, ];
        } else if (root.right) {
            const [rightIs, rightMin, rightMax, rightCount, ] = postOrder(root.right);
            if (!rightIs || root.val >= rightMin) {
                return [false, 0, 0, 0, ];
            }
            const count = rightCount + 1;
            result = Math.max(result, count);
            return [true, root.val, rightMax, count, ];
        } else {
            result = Math.max(1, result);
            return [true, root.val, root.val, 1, ];
        }
    }
    postOrder(root);
    return result;
}
