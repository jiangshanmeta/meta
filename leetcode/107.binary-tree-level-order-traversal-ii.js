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
var levelOrderBottom = function(root) {
    if(!root){
        return [];
    }
    const rst = [];
    var lastLevelNodes = [root];
    var lastLevelNodeValues;
    var curLevelNodes;
    
    while(lastLevelNodes.length){
        lastLevelNodeValues = [];
        curLevelNodes = [];
        for(var i=0;i<lastLevelNodes.length;i++){
            const node = lastLevelNodes[i];
            lastLevelNodeValues.push(node.val);
            node.left && curLevelNodes.push(node.left);
            node.right && curLevelNodes.push(node.right);
        }
        rst.unshift(lastLevelNodeValues);
        lastLevelNodes = curLevelNodes;
    }
    
    
    return rst;
};