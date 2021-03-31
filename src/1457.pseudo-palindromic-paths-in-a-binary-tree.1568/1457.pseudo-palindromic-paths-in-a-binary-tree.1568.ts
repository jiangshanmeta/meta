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

function pseudoPalindromicPaths (root: TreeNode | null): number {
    if(root === null){
        return 0;
    }
    let result = 0;
    function dfs(root:TreeNode,counts:number){
        counts ^= (1<<root.val);
        if(!root.left && !root.right){
            if((counts&(counts-1)) === 0){
                result++;
            }
        }
        root.left && dfs(root.left,counts);
        root.right && dfs(root.right,counts);
    }
    dfs(root,0);
    return result
};