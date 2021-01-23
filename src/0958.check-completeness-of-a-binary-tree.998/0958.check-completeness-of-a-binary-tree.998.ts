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

function isCompleteTree(root: TreeNode | null): boolean {
    if(!root){
        return true;
    }
    let levelNodes:TreeNode[] = [root];
    while(levelNodes.length){
        const nextLevel:TreeNode[] = [];
        let isLast = false;
        for(let node of levelNodes){
            if(!node.left && node.right){
                return false;
            }
            if(isLast){
                if(node.left || node.right){
                    return false;
                }
            }else{
                if(!node.left || !node.right){
                    isLast = true;
                }
                node.left && nextLevel.push(node.left);
                node.right && nextLevel.push(node.right);
            }
        }
        if(isLast){
            return nextLevel.every((node)=>{
                return !node.left && !node.right;
            });
        }
        levelNodes = nextLevel;
    }
    return true
};