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
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const nodeList = [
        root, ];
    const result = [];
    let index = 0;
    while (index < nodeList.length) {
        const node = nodeList[index++];
        result.push(node.val);
        node.left && nodeList.push(node.left);
        node.right && nodeList.push(node.right);
    }
    return result;
};
