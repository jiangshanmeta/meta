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
var serialize = function(root) {
    if(!root){
        return "";
    }
    const arr = [root.val];
    const queue = [root];
    while(queue.length){
        const node = queue.shift();
        if(node.left){
            queue.push(node.left);
            arr.push(node.left.val);
        }else{
            arr.push("#");
        }
        if(node.right){
            queue.push(node.right);
            arr.push(node.right.val);
        }else{
            arr.push("#");
        }
    }

    return arr.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data){
        return null;
    }
    const arr = data.split(",");
    let index = 1;
    const root = new TreeNode(arr[0]);
    const nodeList = [root];
    let nodeIndex = 0;
    while(index<arr.length){
        const left = arr[index];
        const right = arr[index+1];
        index += 2;
        if(left !== "#"){
            const leftNode = new TreeNode(left);
            nodeList[nodeIndex].left = leftNode;
            nodeList.push(leftNode);
        }
        
        if(right !== "#"){
            const rightNode = new TreeNode(right);
            nodeList[nodeIndex].right = rightNode;
            nodeList.push(rightNode);
        }
        nodeIndex++;
    }
    return root;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */