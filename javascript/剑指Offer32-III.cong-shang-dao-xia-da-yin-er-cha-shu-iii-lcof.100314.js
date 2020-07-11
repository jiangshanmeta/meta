/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    if(!root){
        return result;
    }
    let levelNodes = [root];
    let level = 0;
    while(levelNodes.length){
        const vals = [];
        const nextLevelNodes = [];
        for(let i=0;i<levelNodes.length;i++){
            const node = levelNodes[i];
            vals.push(node.val);
            node.left && nextLevelNodes.push(node.left);
            node.right && nextLevelNodes.push(node.right);
        }
        if(level%2 === 1){
            vals.reverse();
        }
        result.push(vals);
        level++;
        levelNodes = nextLevelNodes;
    }
    
    return result;
};