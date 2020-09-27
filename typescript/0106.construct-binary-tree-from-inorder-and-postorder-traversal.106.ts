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
    inorder: number[], 
    postorder: number[],
    inL=0,
    inR=inorder.length-1,
    postL=0,
    postR=postorder.length-1,
): TreeNode | null {
    if(inR<inL){
        return null;
    }
    const rootVal = postorder[postR];
    const root = new TreeNode(rootVal);
    let index = -1;
    for(let i=inL;i<=inR;i++){
        if(inorder[i] === rootVal){
            index = i;
            break;
        }
    }
    root.left = buildTree(
        inorder,
        postorder,
        inL,
        index-1,
        postL,
        postL+index-1-inL
    );
    root.right = buildTree(
        inorder,
        postorder,
        index+1,
        inR,
        postR+index-inR,
        postR-1,
    );
    return root;
};