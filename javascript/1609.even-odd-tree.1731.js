/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if(root === null){
        return true;
    }
    let needmod = 1;
    let levelNodes = [root];
    while(levelNodes.length>0){
        if(levelNodes[0].val %2 !== needmod){
            return false;
        }
        if(needmod === 1){
            for(let i=1;i<levelNodes.length;i++){
                if(levelNodes[i].val%2 !== needmod || levelNodes[i].val<=levelNodes[i-1].val){
                    return false;
                }
            }
        }else{
            for(let i=1;i<levelNodes.length;i++){
                if(levelNodes[i].val%2 !== needmod || levelNodes[i].val>=levelNodes[i-1].val){
                    return false;
                }
            }
        }
        const nextLevelNodes = [];
        for(let i=0;i<levelNodes.length;i++){
            const node = levelNodes[i];
            node.left && nextLevelNodes.push(node.left);
            node.right && nextLevelNodes.push(node.right);
        }
        needmod ^= 1;
        levelNodes = nextLevelNodes;
    }
    return true;
};