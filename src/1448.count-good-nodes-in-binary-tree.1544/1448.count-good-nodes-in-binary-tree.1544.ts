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

function goodNodes(root: TreeNode | null): number {
    let result = 0;
    function dfs(root:TreeNode|null,prevMax:number){
        if(root === null){
            return
        }
        if(prevMax<=root.val){
            result++;
        }
        prevMax = Math.max(prevMax,root.val);
        dfs(root.left,prevMax);
        dfs(root.right,prevMax);
    }
    dfs(root,-Infinity);
    return result
};