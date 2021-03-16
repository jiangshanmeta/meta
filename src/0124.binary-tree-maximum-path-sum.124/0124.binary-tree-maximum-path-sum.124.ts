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


function maxPathSum(root: TreeNode | null): number {
    let result = -Infinity;
    function postOrder(root:TreeNode|null):number{
        if(root === null){
            return 0;
        }
        const left = Math.max(postOrder(root.left),0);
        const right = Math.max(postOrder(root.right),0);
        result = Math.max(
            result,
            root.val+left+right
        );
        return Math.max(left,right)+root.val;
    }
    postOrder(root);
    return result;
};