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

function sumNumbers(root: TreeNode | null,par:number=0): number {
    if(root === null){
        return 0;
    }
    par = par*10+root.val;
    if(root.left === null && root.right === null){
        return par;
    }
    return sumNumbers(root.left,par)+sumNumbers(root.right,par);
};