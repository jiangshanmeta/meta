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

// 后序遍历
// 该节点放camera标记为camera
// 该节点的子节点有camera 则该节点标记为watch
var minCameraCover = function(root) {
    function postOrder(node){
        let count = 0;
        // 考虑不同子节点情况
        if(node.left && node.right){
            count += postOrder(node.left);
            count += postOrder(node.right);
            // 两个子节点只要有一个未被标记(camera或者watch),则该节点需要被标记为camera
            if( (!node.left.camera && !node.left.watch) || (!node.right.camera && !node.right.watch) ){
                node.camera = true;
                count++;
            }else if(node.left.camera || node.right.camera){
                // 子节点有一个被标记为camera，该节点标记为watch
                node.watch = true;
            }
            
            return count;
        }else if(node.left){
            count += postOrder(node.left);
            if(node.left.camera){
                node.watch = true;
            }else if(!node.left.watch){
                node.camera = true;
                count++;
            }
            return count;
        }else if(node.right){
            count += postOrder(node.right);
            if(node.right.camera){
                node.watch = true;
            }else if(!node.right.watch){
                node.camera = true;
                count++;
            }
            return count;
        }
        // 叶节点不标记，减少camera数量
        return 0;
    }
    
    let count = postOrder(root);
    // 根节点可能未被标记
    if(!root.camera && !root.watch){
        count++;
    }
    return count;
};