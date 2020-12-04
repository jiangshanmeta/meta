/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归总该会吧
function compareNode (node1, node2) {
    if (node1 && node2) {
        return node1.val === node2.val && compareNode(node1.left, node2.right) && compareNode(node1.right, node2.left);
    }

    if (node1 === null && node2 === null) {
        return true;
    }
    return false;
}

var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    return compareNode(root.left, root.right);
};
