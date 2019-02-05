/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
// 多叉树的层序遍历
var levelOrder = function(root) {
    const result = [];
    if(root === null){
        return result;
    }
    let curLevel = [root];
    while(true){
        const values = [];
        const nextLevel = [];
        for(let i=0;i<curLevel.length;i++){
            const node = curLevel[i];
            values.push(node.val);
            node.children.forEach((newNode)=>{
                nextLevel.push(newNode);
            });
        }
        result.push(values);
        if(nextLevel.length === 0){
            return result;
        }
        curLevel = nextLevel;
    }
};