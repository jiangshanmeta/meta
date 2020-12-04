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

const mod = 10**9+7;
function sumRootToLeaf(root: TreeNode | null): number {
    if(root === null){
        return 0;
    }
    const result:number[] = [];
    dfs(root,0,result);
    return result.reduce((sum,item)=>{
        return (sum+item)%mod;
    },0);
};

function dfs(root:TreeNode,num:number,result:number[]):void{
    num = num*2+root.val
    if(root.left === null && root.right === null){
        result.push(num);
        return;
    }
    root.left !== null && dfs(root.left,num,result);
    root.right !== null && dfs(root.right,num,result);
}