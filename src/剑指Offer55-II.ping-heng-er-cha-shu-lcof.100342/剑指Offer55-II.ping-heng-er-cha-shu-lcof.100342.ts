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

function isBalanced(root: TreeNode | null): boolean {
    return getBalanceAndHeight(root)[0]
};

function getBalanceAndHeight(root:TreeNode|null):[boolean,number]{
    if(root === null){
        return [true,0];
    }
    const [LB,LH] = getBalanceAndHeight(root.left);
    if(!LB){
        return [false,0];
    }
    const [RB,RH] = getBalanceAndHeight(root.right);
    if(!RB){
        return [false,0];
    }
    if(Math.abs(RH-LH)>1){
        return [false,0];
    }
    return [
        true,
        Math.max(LH,RH)+1,
    ]
}