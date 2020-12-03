class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isValidBST(root: TreeNode | null,low=-Infinity,high=Infinity): boolean {
    if(root === null){
        return true;
    }
    return root.val>low && root.val<high && isValidBST(root.left,low,root.val) && isValidBST(root.right,root.val,high)
};