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

function constructMaximumBinaryTree (nums: number[], left = 0, right = nums.length - 1): TreeNode | null {
    if (right < left) {
        return null;
    }
    let maxIndex = right;
    let maxVal = nums[right];
    for (let i = left; i < right; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
            maxIndex = i;
        }
    }
    return new TreeNode(
        maxVal,
        constructMaximumBinaryTree(nums, left, maxIndex - 1),
        constructMaximumBinaryTree(nums, maxIndex + 1, right)
    );
}
