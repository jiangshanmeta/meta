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

function isEvenOddTree(root: TreeNode | null): boolean {
    if(root === null){
        return true;
    }
    let needmod = 1;
    let levelNodes:TreeNode[] = [root];
    while(levelNodes.length>0){
        if(levelNodes[0].val%2 !== needmod){
            return false;
        }
        if(needmod === 1){
            for(let i=1;i<levelNodes.length;i++){
                if(levelNodes[i].val%2 !== needmod || levelNodes[i].val<=levelNodes[i-1].val){
                    return false;
                }
            }
        }else{
            for(let i=1;i<levelNodes.length;i++){
                if(levelNodes[i].val%2 !== needmod || levelNodes[i].val>=levelNodes[i-1].val){
                    return false;
                }
            }
        }
        const nextLevelNodes:TreeNode[] = [];
        for(let i=0;i<levelNodes.length;i++){
            const node:TreeNode = levelNodes[i];
            node.left !== null && nextLevelNodes.push(node.left);
            node.right !== null && nextLevelNodes.push(node.right);
        }
        needmod ^= 1;
        levelNodes = nextLevelNodes;
    }
    return true;
};