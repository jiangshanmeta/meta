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
    return postOrder(root) !== -1;
};

function postOrder(root:TreeNode|null):number{
    if(root === null){
        return 0;
    }
    const L = postOrder(root.left);
    if(L === -1){
        return -1;
    }
    const R = postOrder(root.right);
    if(R === -1){
        return -1;
    }
    const diff = Math.abs(L-R);
    if(diff>1){
        return -1;
    }
    return Math.max(L,R)+1;
}