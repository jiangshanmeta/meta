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
// 对于完全二叉树索引从1开始 当前子节点索引为index 左子节点索引为2*index 右子节点索引为2*index+1
// 对于完全二叉树 找到其最左侧子节点对应的索引和最右侧对应的索引 
// 若右>左 则说明两者在同一层上 我们仅需关心右子树即可
// 若左>右 两者在不同层上 此时需要此时需要以node.right为根节点 找到其最左侧节点对应索引 rightIndex2
// 如果 rightIndex2<=rightIndex 则只需考虑左子树即可
// 否则 只需要考虑右子树

// 节点为N个 树高为 logN
// helper函数每次调用消耗一层树高 所以调用 logN次 每次调用访问树高个节点(最多3*logN )
// 时间复杂度 O(log2N)

var countNodes = function(root) {
    if(!root){
        return 0;
    }
    
    function helper(node,index){
        if(!node.right){
            if(!node.left){
                return index;
            }else{
                return index<<1;
            }
        }
        let leftIndex = index<<1;
        let leftNode = node.left;
        while(leftNode.left){
            leftNode = leftNode.left;
            leftIndex = leftIndex<<1;
        }
        
        let rightIndex = 2*index+1;
        let rightNode = node.right;
        while(rightNode.right){
            rightNode = rightNode.right;
            rightIndex = 2*rightIndex+1;
        }
        
        if(rightIndex>leftIndex){
            return helper(node.right,2*index+1);
        }else{
            
            let rightIndex2 = 2*index+1;
            let rightNode2 = node.right;
            while(rightNode2.left){
                rightNode2 = rightNode2.left;
                rightIndex2 = rightIndex2*2;
            }
            
            if(rightIndex2<=rightIndex){
                return helper(node.left,2*index);
            }else{
                return helper(node.right,2*index+1);
            }
        }
        
    }
    
    return helper(root,1);
};


// 解法2
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
// 注意完全二叉树和满二叉树的关系
// 完全二叉树的子树也是完全二叉树 
// 看是否是满二叉树(lHeight 和 rHeight比较)的条件 把完全二叉树转化为满二叉树
// 如果是满二叉树则根据树高求出节点数
// 否则分别处理左子树和右子树
// 时间复杂度也是O(log2N)
var countNodes = function(root) {
    if(!root){
        return 0;
    }
    let lHeight = 0;
    let lNode = root;
    let rHeight = 0;
    let rNode = root;
    while(lNode){
        lHeight++;
        lNode = lNode.left;
    }
    
    while(rNode){
        rHeight++;
        rNode = rNode.right;
    }
    if(lHeight === rHeight){
        return 2**lHeight-1;
    }else{
        return countNodes(root.left)+countNodes(root.right)+1;
    }
};