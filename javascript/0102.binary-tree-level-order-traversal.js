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

// 常规层序遍历
var levelOrder = function(root) {
    if(root === null){
        return [];
    }
    
    const result = [];
    let curLevel = [root];
    while(true){
        let nextLevel = [];
        const values = [];
        for(let i=0;i<curLevel.length;i++){
            values.push(curLevel[i].val);
            curLevel[i].left && nextLevel.push(curLevel[i].left);
            curLevel[i].right && nextLevel.push(curLevel[i].right);
        }
        result.push(values);
        if(nextLevel.length === 0){
            return result;
        }
        curLevel = nextLevel;
    }
};