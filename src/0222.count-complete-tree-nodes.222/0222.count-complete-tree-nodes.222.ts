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

function countNodes(root: TreeNode | null): number {
    if(!root){
        return 0;
    }
    let leftCount = 1;
    let left = root.left;
    while(left){
        left = left.left;
        leftCount++;
    }
    let rightCount = 1;
    let right = root.right;
    while(right){
        right = right.right;
        rightCount++;
    }
    if(leftCount === rightCount){
        return 2**leftCount-1;
    }
    return countNodes(root.left)+countNodes(root.right)+1;
};