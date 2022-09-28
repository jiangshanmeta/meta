// 后序遍历

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

function postorderTraversalSequence (node, sequence) {
    node.left && postorderTraversalSequence(node.left, sequence);
    node.right && postorderTraversalSequence(node.right, sequence);
    sequence.push(node.val);
}

var postorderTraversal = function (root) {
    const sequence = [];
    root && postorderTraversalSequence(root, sequence);
    return sequence;
};

// 非递归实现
var postorderTraversal = function (root) {
    const stack1 = [];
    const stack2 = [];
    while (root) {
        stack1.push(root);
        root = root.left;
    }
    const result = [];
    while (stack1.length) {
        root = stack1.pop();
        // 说明此时是第二次遇到
        if (stack2.length && stack2[stack2.length - 1] === root) {
            result.push(root.val);
            stack2.pop();
        } else {
            // 第一次遇到该节点
            stack1.push(root);
            stack2.push(root);
            root = root.right;
            while (root) {
                stack1.push(root);
                root = root.left;
            }
        }
    }
    return result;
};
