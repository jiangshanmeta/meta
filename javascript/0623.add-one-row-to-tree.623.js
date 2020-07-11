/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if(d === 1){
        const node = new TreeNode(v);
        node.left = root;
        return node;
    }
    
    let levelCounter = 2;
    let nodeList = [root];
    
    while(levelCounter<d){
        nodeList = nodeList.reduce((arr,node)=>{
            node.left && arr.push(node.left);
            node.right && arr.push(node.right);
            return arr;
        },[]);
        levelCounter++;
    }
    
    
    nodeList.forEach((node)=>{
        const leftNewNode = new TreeNode(v);
        const rightNewNode = new TreeNode(v);
        leftNewNode.left = node.left;
        rightNewNode.right = node.right;
        node.left = leftNewNode;
        node.right = rightNewNode;
    });
    
    
    
    return root;
};