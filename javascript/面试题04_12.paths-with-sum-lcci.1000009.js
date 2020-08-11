/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let result = 0;
    const map = {};
    map[0] = 1;
    function dfs(node,current){
        if(!node){
            return;
        }
        current += node.val;
        if(map[current-sum]){
            result += map[current-sum];
        }
        map[current] = (map[current] || 0)+1;
        dfs(node.left,current);
        dfs(node.right,current);
        map[current]--;
    }
    dfs(root,0);
    return result;
};