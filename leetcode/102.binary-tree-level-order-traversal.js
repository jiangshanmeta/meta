// 拿到层序遍历结果，很容易想到的是真的一层一层向下遍历 

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

function levelOrderSequence(nodes,sequence){
    const values = [];
    const newLovelNodes = nodes.reduce((arr,node)=>{
        values.push(node.val);
        node.left && arr.push(node.left);
        node.right && arr.push(node.right);
        return arr;
    },[]);
    
    sequence.push(values);
    
    return newLovelNodes.length && levelOrderSequence(newLovelNodes,sequence);
}

var levelOrder = function(root) {
    const sequence = [];
    root && levelOrderSequence([root],sequence)
    return sequence;
};

// 另一个方法是利用DFS
// 下面的结果是利用先序遍历拿到层序遍历的结果

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
    function dfs(node,sequence,level){
        if(!sequence[level]){
            sequence[level] = [];
        }
        sequence[level].push(node.val);
        
        node.left && dfs(node.left,sequence,level+1);
        node.right && dfs(node.right,sequence,level+1);
    }
    const sequence = [];
    root && dfs(root,sequence,0);
    return sequence;
};