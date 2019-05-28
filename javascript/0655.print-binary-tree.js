/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
// 后序遍历求树高
function getHeight(node){
    if(node === null){
        return 0;
    }
    const left = getHeight(node.left);
    const right = getHeight(node.right);
    return Math.max(left,right)+1;
}
function connect(node,arr,row,column){
    arr[row][column] = node.val+'';
    // 计算出左右两节点的位置
    let diff = 2 ** (arr.length-row-2)
    node.left && connect(node.left,arr,row+1,column-diff);
    node.right && connect(node.right,arr,row+1,column+diff);
}

var printTree = function(root) {
    // 根据树的高度求出每一层的数量 初始化
    const height = getHeight(root);
    const count = (2 ** height) -1;
    const result = [];
    for(let i=0;i<height;i++){
        result.push(new Array(count).fill(""))
    }
    connect(root,result,0,count/2 | 0);
    return result;    
};