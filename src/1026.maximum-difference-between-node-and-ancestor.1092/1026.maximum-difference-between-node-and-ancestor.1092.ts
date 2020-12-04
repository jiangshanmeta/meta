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

function maxAncestorDiff(root: TreeNode,minVal:number=root.val,maxVal:number=root.val): number {
    let maxDiff = Math.max(
        Math.abs(root.val-minVal),
        Math.abs(root.val-maxVal)
    );
    minVal = Math.min(root.val,minVal);
    maxVal = Math.max(root.val,maxVal);
    if(root.left !== null){
        maxDiff = Math.max(
            maxDiff,
            maxAncestorDiff(root.left,minVal,maxVal)
        )
    }
    if(root.right !== null){
        maxDiff = Math.max(
            maxDiff,
            maxAncestorDiff(root.right,minVal,maxVal)
        );
    }
    return maxDiff;
};