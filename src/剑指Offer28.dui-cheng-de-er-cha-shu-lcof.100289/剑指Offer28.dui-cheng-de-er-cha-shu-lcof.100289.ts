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

function isSymmetric(root: TreeNode | null): boolean {
    if(root === null){
        return true;
    }
    return isSym(root.left,root.right);
};

function isSym(p:TreeNode|null,q:TreeNode|null):boolean{
    if(p !== null && q !== null){
        return p.val === q.val && isSym(p.left,q.right) && isSym(p.right,q.left);
    }else if(p === null && q === null){
        return true;
    }
    return false;
}