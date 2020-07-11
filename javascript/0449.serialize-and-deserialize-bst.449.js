/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 先序遍历实现序列化
// 与297不同 无序写入空节点信息
function preOrder(node,sequence){
    sequence.push(node.val);
    node.left && preOrder(node.left,sequence);
    node.right && preOrder(node.right,sequence);
}

var serialize = function(root) {
    if(!root){
        return "";
    }
    const sequence = [];
    preOrder(root,sequence);
    return sequence.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function buildTree(list,start,end){
    if(start === end){
        return new TreeNode(list[start]);
    }
    const rootNode = new TreeNode(list[start]);
    // 在子序列看有没有更大的 决定左右子树的划分
    // 利用二叉搜索树右比根节点大的特性
    for(let i=start+1;i<end+1;i++){
        if(+list[i]>+list[start]){
            rootNode.right = buildTree(list,i,end);
            if(i>start+1){
                rootNode.left = buildTree(list,start+1,i-1);
            }
            return rootNode;
        }
    }
    
    rootNode.left = buildTree(list,start+1,end); 
    return rootNode;
}


var deserialize = function(data) {
    if(!data){
        return null;
    }
    const list = data.split(",");
    return buildTree(list,0, list.length-1);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */