/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 层序遍历 找最后一层第一个元素
function getLevelSequence(nodes){
    const nextLevelNodes = nodes.reduce((arr,node)=>{
        node.left && arr.push(node.left);
        node.right && arr.push(node.right);
        return arr;
    },[]);
    
    if(nextLevelNodes.length){
        return getLevelSequence(nextLevelNodes);
    }
    return nodes[0].val;
}

var findBottomLeftValue = function(root) {
    return getLevelSequence([root])
};