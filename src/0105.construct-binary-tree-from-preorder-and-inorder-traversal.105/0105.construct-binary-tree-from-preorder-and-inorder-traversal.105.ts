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

function buildTree(
    preorder: number[], 
    inorder: number[],
    preL=0,
    preR=preorder.length-1,
    inL=0,
    inR=inorder.length-1,
): TreeNode | null {
    if(preR<preL){
        return null;
    }
    const rootVal = preorder[preL];
    const root = new TreeNode(rootVal);
    let index = -1;
    for(let i=inL;i<=inR;i++){
        if(inorder[i] === rootVal){
            index = i;
            break;
        }
    }
    root.left = buildTree(
        preorder,
        inorder,
        preL+1,
        index-inL+preL,
        inL,
        index-1,
    );
    root.right = buildTree(
        preorder,
        inorder,
        index+1-inR+preR,
        preR,
        index+1,
        inR
    );
    return root;
};