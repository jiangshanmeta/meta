/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// 这题最直接的方法是层序遍历 一层一层处理next指针
// 用了dfs 因为明确直到next对应的节点可到达

var connect = function (root) {
    if (root === null) {
        return root;
    }
    function dfs (node) {
        if (node.left === null) {
            return;
        }
        node.left.next = node.right;
        if (node.next) {
            node.right.next = node.next.left;
        }
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    }
    dfs(root);
    return root;
};
