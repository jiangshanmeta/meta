/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if(root === null){
        return true;
    }
    // 层序遍历的变种
    let curLevel = [root];
    let nextLevel = [];
    let meetNullChild = false;

    while(true){
        for(let i=0;i<curLevel.length;i++){
            // 遇到了空子节点，以后的节点都应该是空子节点
            if(meetNullChild){
                if(curLevel[i].left || curLevel[i].right){
                    return false;
                }
            }else{
                // 最正常的，有两个子节点
                if(curLevel[i].left && curLevel[i].right){
                    nextLevel.push(curLevel[i].left,curLevel[i].right);
                    continue;
                }
                // 遇到了空子节点
                meetNullChild = true;
                // 左边还有，目测还有下一层
                if(curLevel[i].left){
                    nextLevel.push(curLevel[i].left);
                }else if(curLevel[i].right){
                    // 没left但有right肯定不对
                    return false;
                }
                
            }
        }
        // 没有下一层了
        if(nextLevel.length === 0){
            return true;
        }
        curLevel = nextLevel;
        nextLevel = [];
    }
    
};