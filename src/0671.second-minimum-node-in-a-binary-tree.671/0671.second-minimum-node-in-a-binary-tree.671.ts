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

function findSecondMinimumValue(root: TreeNode | null): number {
    if(!root){
        return -1;
    }
    return helper(root,root.val);
};

function helper(root:TreeNode|null,minVal:number):number{
    if(!root){
        return -1;
    }
    if(root.val>minVal){
        return root.val;
    }
    if(root.left){
        const l = helper(root.left,minVal);
        const r = helper(root.right,minVal);
        if(l>-1 && r>-1){
            return Math.min(l,r);
        }else if(l>-1){
            return l;
        }else if(r>-1){
            return r;
        }
    }
    return -1;
}