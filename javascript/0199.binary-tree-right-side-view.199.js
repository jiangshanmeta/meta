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
// 层序遍历
var rightSideView = function (root) {
    if (!root) {
        return [];
    }

    const rst = [];

    let stack = [
        root, ];
    while (stack.length) {
        const newStack = [];
        rst.push(stack[stack.length - 1].val);
        for (let i = 0; i < stack.length; i++) {
            const node = stack[i];
            node.left && newStack.push(node.left);
            node.right && newStack.push(node.right);
        }

        stack = newStack;
    }
    return rst;
};
