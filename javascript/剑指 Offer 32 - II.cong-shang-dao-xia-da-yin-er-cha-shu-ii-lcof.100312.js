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
    while(levelNodes.length){
        const vals = [];
        const nextNodes = [];
        for(let i=0;i<levelNodes.length;i++){
            const node = levelNodes[i];
            vals.push(node.val);
            node.left && nextNodes.push(node.left);
            node.right && nextNodes.push(node.right);
        }
        levelNodes = nextNodes;
        result.push(vals);
    }
    return result;
};