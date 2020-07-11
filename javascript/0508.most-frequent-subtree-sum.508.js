/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 后序遍历
var findFrequentTreeSum = function(root) {
    if(root === null){
        return [];
    }
    
    let map = {};
    
    function divideConquer(node){

        
        let left = ( node.left && divideConquer(node.left) ) || 0;
        let right = ( node.right && divideConquer(node.right) ) || 0;
        
        let sum = left + right + node.val;
        
        if(map[sum] === undefined){
            map[sum] = 0;
        }
        map[sum]++;
        return sum;
    }
    
    divideConquer(root);
    
    let map2 = {};
    let counts = [];
    
    Object.keys(map).forEach((num)=>{
        let count = map[num];
        counts.push(count);
        if(map2[count] === undefined){
            map2[count] = [];
        }
        map2[count].push(+num);
    });
    
    return map2[Math.max.apply(null,counts)]
};