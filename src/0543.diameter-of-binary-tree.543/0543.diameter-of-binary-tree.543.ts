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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxNodes = 0;
    function postOrder(root:TreeNode|null){
        if(root === null){
            return 0;
        }
        const left = postOrder(root.left);
        const right = postOrder(root.right);
        maxNodes = Math.max(maxNodes,left+right+1);
        return Math.max(left,right)+1;
    }
    postOrder(root);
    return maxNodes === 0?0:maxNodes-1;
};