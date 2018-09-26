// 大体思路：
// 完全二叉树的子树也是完全二叉树
// 完全二叉树最左侧节点对应索引(leftIndex)如果大于最右侧节点坐标(rightIndex)
// 说明在最左侧节点在最右侧节点下一层
// 找到他们最近祖先节点(root)
// 看root.right最左侧节点对应索引(tmpIndex)
// 如果tmpIndex>leftIndex，则最后一个元素在以root.right为根节点的子树上
// 否则最后一个元素在以root.left为根节点的子树上
// 一个技巧是最右侧节点，如果它有left，则这个left就是最后一个节点

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
var countNodes = function(root) {
    if(!root){
        return 0;
    }
    
    let rootIndex = 1;
    
    // 最左侧元素
    let leftNode = root;
    let leftIndex = 1;
    while(leftNode.left !== null){
        leftNode = leftNode.left;
        leftIndex *= 2;
    }
    
    // 最右侧元素
    let rightNode = root;
    let rightIndex = 1;
    while(rightNode.right !== null){
        rightNode = rightNode.right;
        rightIndex = rightIndex*2 + 1;
    }
    
    if(rightNode.left){
        return 2*rightIndex;
    }
    

    while(leftIndex > rightIndex){
        let tmpNode = root.right;
        let tmpIndex = 2*rootIndex + 1;
        while(tmpNode.left !== null){
            tmpNode = tmpNode.left;
            tmpIndex *= 2;
        }
        
        if(tmpIndex > leftIndex){
            // 最后一个节点在以root.right为根节点的子树上
            root = root.right;
            rootIndex = 2*rootIndex + 1;
            // 更新leftNode相关信息
            leftNode = tmpNode;
            leftIndex = tmpIndex;
        }else{
            // 最后一个节点在以root.left为根节点的子树上
            root = rightNode = root.left;
            rootIndex = rightIndex =2*rootIndex;
            
            // 更新rightNode相关信息
            while(rightNode.right !== null){
                rightNode = rightNode.right;
                rightIndex = 2*rightIndex + 1;
            }
            
            if(rightNode.left){
                return 2*rightIndex;
            }
        }
        
    }
    
    return rightIndex;
};