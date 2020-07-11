/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 时间复杂度 O(logN)
var lowestCommonAncestor = function(root, p, q) {
    p = p.val;
    q = q.val;
    // 保证 p<=q
    if(p>q){
        let tmp = p;
        p = q;
        q = tmp;
    }
    
    while(root){
        if(p>root.val){
            root = root.right;
        }else if(q<root.val){
            root = root.left;
        }else{
            // p<=root<=q
            return root;
        }
    }
};