/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 对于二茬搜索树 中序遍历的结果应该是递增的
// 正常的情况下 当前节点的值不应该小于前一个节点
// 如果发生了 则可能是前一个节点被置换为较大的节点 或者当前节点被置换为较小的节点
// 第一次遇到这种情况时 前一个节点是被置换的较大的节点
// 最后一次遇到这种情况时 当前节点是被置换的较小的节点
var recoverTree = function(root) {
    let lastNode;
    let moreNode;
    let lessNode;
    
    function inorderTravel(node){
        node.left && inorderTravel(node.left);
        
        if(lastNode && node.val<lastNode.val){
            if(!moreNode){
                moreNode = lastNode;
            }
            lessNode = node;
        }
        lastNode = node;

        node.right && inorderTravel(node.right);
    }
    
    inorderTravel(root);
    
    let tmp = moreNode.val;
    moreNode.val = lessNode.val;
    lessNode.val = tmp;
};