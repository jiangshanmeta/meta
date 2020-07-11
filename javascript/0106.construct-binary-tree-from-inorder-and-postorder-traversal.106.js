/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder,inorderStartIndex=0,inorderEndIndex=inorder.length-1,postOrderStartIndex=0,postOrderEndIndex=postorder.length-1) {
    if(inorder.length === 0){
        return null;
    }
    
    
    function helper(inorder,postorder,inorderStartIndex,inorderEndIndex,postOrderStartIndex,postOrderEndIndex){
        const rootVal = postorder[postOrderEndIndex];
        const rootNode = new TreeNode(rootVal);
        if(inorderStartIndex === inorderEndIndex){
            return rootNode;
        }

        let rootInorderIndex;
        for(let i=inorderStartIndex;i<=inorderEndIndex;i++){
            if(inorder[i] === rootVal){
                rootInorderIndex = i;
                break;
            }
        }



        if(inorderStartIndex !== rootInorderIndex){
            rootNode.left = helper(
                inorder,
                postorder,
                inorderStartIndex,
                rootInorderIndex-1,
                postOrderStartIndex,
                postOrderStartIndex+rootInorderIndex-1-inorderStartIndex,
            );
        }

        if(inorderEndIndex !== rootInorderIndex){
            rootNode.right = helper(
                inorder,
                postorder,
                rootInorderIndex+1,
                inorderEndIndex,
                postOrderEndIndex+rootInorderIndex-inorderEndIndex,
                postOrderEndIndex-1,
            );
        }
        return rootNode;
    }
    

    
    
    
    
    return helper(inorder,postorder,0,inorder.length-1,0,inorder.length-1);
};