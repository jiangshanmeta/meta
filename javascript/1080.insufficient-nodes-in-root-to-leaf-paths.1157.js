/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
    // postOrder的返回值是新节点
    // 通过list通知父节点经过node的所有路径和的最大值
    function postOrder (node, sum, list) {
        sum += node.val;
        // 叶节点
        if (!node.left && !node.right) {
            list.push(sum);
            return sum < limit ? null : node;
        }
        // 还有子节点
        const subList = [];
        if (node.left) {
            node.left = postOrder(node.left, sum, subList);
        }
        if (node.right) {
            node.right = postOrder(node.right, sum, subList);
        }
        const max = Math.max(...subList);
        list.push(max);
        return max < limit ? null : node;
    }
    if (!root) {
        return root;
    }

    return postOrder(root, 0, []);
};
