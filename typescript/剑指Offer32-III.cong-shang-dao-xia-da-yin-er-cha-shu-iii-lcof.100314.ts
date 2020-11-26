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

function levelOrder(root: TreeNode | null): number[][] {
    if(root === null){
        return [];
    }
    const result:number[][] = [];
    bfs([root],result,false);
    return result;
};

function bfs(levelNodes:TreeNode[],result:number[][],reverse:boolean):void{
    const vals:number[] = [];
    const nextNodes:TreeNode[] = [];
    for(let i=0;i<levelNodes.length;i++){
        const node = levelNodes[i];
        vals.push(node.val);
        node.left !== null && nextNodes.push(node.left);
        node.right !== null && nextNodes.push(node.right);
    }
    reverse && vals.reverse();
    result.push(vals);
    nextNodes.length>0 && bfs(nextNodes,result,!reverse);
}