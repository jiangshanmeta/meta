/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    const path = [];
    findPath(original,target,path);
    for(let i=1;i<path.length;i++){
        if(path[i] === path[i-1].left){
            cloned = cloned.left;
        }else{
            cloned = cloned.right;
        }
    }
    return cloned;
};

function findPath(root,target,path){
    if(!root){
        return false;
    }
    
    path.push(root);
    if(root === target){
        return true;
    }
    const lRst = findPath(root.left,target,path);
    if(lRst){
        return true;
    }
    const rRst = findPath(root.right,target,path);
    if(rRst){
        return true;
    }
    path.pop();
    return false;
}