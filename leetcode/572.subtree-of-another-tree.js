/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

// 判断两棵树是否相同
function isSame(t1,t2){
    if(!t1 && !t2){
        return true;
    }
    
    if(t1 && t2){
        return t1.val === t2.val && isSame(t1.left,t2.left) && isSame(t1.right,t2.right);
    }
    
    return false;
}



var isSubtree = function(s, t) {
    const sequence = [];
    getNode(s,t.val);
    
    // 先筛出可能的节点作为根节点
    function getNode(node,val){
        if(node.val === val){
            sequence.push(node);
        }

        node.left && getNode(node.left,val)
        node.right && getNode(node.right,val);
    }
    
    
    return sequence.some((node)=>{
        return isSame(node,t);
    });
};