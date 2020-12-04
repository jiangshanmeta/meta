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

function bstFromPreorder(preorder: number[],left:number=0,right:number=preorder.length-1): TreeNode | null {
    if(right<left){
        return null;
    }
    const maxVal = preorder[left];
    let greaterIndex = right+1;
    for(let i=left+1;i<right+1;i++){
        if(preorder[i]>maxVal){
            greaterIndex = i;
            break;
        }
    }
    return new TreeNode(
        maxVal,
        bstFromPreorder(preorder,left+1,greaterIndex-1),
        bstFromPreorder(preorder,greaterIndex,right)
    );
};