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

function findTilt(root: TreeNode | null): number {
    let result = 0;
    function postOrder(root:TreeNode|null){
        if(root === null){
            return 0;
        }
        const left = postOrder(root.left);
        const right = postOrder(root.right);
        result += Math.abs(left-right);
        return left+right+root.val;
    }
    postOrder(root);
    return result;
};