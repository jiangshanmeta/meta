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

function pathSum(root: TreeNode | null, sum: number): number {
    const map = new Map<number,number>();
    map.set(0,1);
    let result = 0;
    function dfs(root:TreeNode|null,curSum:number){
        if(root === null){
            return;
        }
        curSum += root.val;
        if(map.has(curSum-sum)){
            result += map.get(curSum-sum);
        }
        const count = map.has(curSum)?map.get(curSum):0;
        map.set(curSum,count+1);
        dfs(root.left,curSum);
        dfs(root.right,curSum);
        map.set(curSum,count);
    }
    dfs(root,0);
    return result;
};