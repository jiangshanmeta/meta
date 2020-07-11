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
// 树的后序遍历一般形式
function postOrder(node,array){
    node.children.forEach((node)=>postOrder(node,array));
    array.push(node.val);
}

var postorder = function(root) {
    const result = [];
    root !== null && postOrder(root,result);
    return result;
};