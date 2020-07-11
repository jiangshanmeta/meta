/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// 先序遍历的一般形式
function preOrder(node,array){
    array.push(node.val);
    node.children.forEach((node)=>preOrder(node,array))
}

var preorder = function(root) {
    const result = [];
    root !== null && preOrder(root,result);
    return result;
};