/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    // 题目规定每个节点的值唯一 以此作为key
    // depthMap存的是每个节点及其子节点的最大深度
    const depthMap = {};
    // 获取每个节点的深度
    function getDepth(root,depth){
        let subDepth = depth;
        if(root.left){
            subDepth = getDepth(root.left,depth+1);
        }
        if(root.right){
            subDepth = Math.max(subDepth,getDepth(root.right,depth+1));
        }
        depthMap[root.val] = subDepth;
        return subDepth;
    }
    getDepth(root,0);
    function getCommonAncestor(root){
        if(root.left && root.right){
            const leftDepth = depthMap[root.left.val];
            const rightDepth = depthMap[root.right.val];
            // 左右两子树最大深度一致 最近公共祖先节点是当前节点
            if(leftDepth === rightDepth){
                return root;
            }else if(leftDepth>rightDepth){
                // 左侧更深 在左子树中找
                return getCommonAncestor(root.left);
            }else{
                // 左侧更深 在右子树中找
                return getCommonAncestor(root.right)
            }
        }else if(root.left){
            return getCommonAncestor(root.left);
        }else if(root.right){
            return getCommonAncestor(root.right);
        }
        // 叶节点
        return root;
    }
    return getCommonAncestor(root)
};