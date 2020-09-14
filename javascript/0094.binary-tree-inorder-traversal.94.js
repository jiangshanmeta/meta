// 中序遍历不解释
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
// 递归实现
var inorderTraversal = function (root) {
    if (!root) {
        return [];
    }

    function inorder (node, sequence) {
        node.left && inorder(node.left, sequence);
        sequence.push(node.val);
        node.right && inorder(node.right, sequence);
    }
    const sequence = [];
    inorder(root, sequence);
    return sequence;
};

// 非递归实现
var inorderTraversal = function (root) {
    const result = [];
    const stack = [];
    while (root) {
        stack.push(root);
        root = root.left;
    }
    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);
        node = node.right;
        while (node) {
            stack.push(node);
            node = node.left;
        }
    }
    return result;
};
