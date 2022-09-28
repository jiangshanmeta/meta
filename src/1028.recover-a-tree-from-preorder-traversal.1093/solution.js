/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
    const stack = [];
    let index = 0;
    while (index < S.length) {
        // 解析出节点所在的深度
        let depth = 0;
        while (index < S.length && S[index] === '-') {
            depth++;
            index++;
        }
        // 解析出节点值
        const start = index;
        while (index < S.length && S[index] !== '-') {
            index++;
        }

        // 把栈中深度>=该节点的都pop出去
        // 使得栈顶元素为当前元素的父元素
        while (stack.length > depth) {
            stack.pop();
        }

        const node = new TreeNode(S.substring(start, index));
        if (stack.length) {
            const last = stack[stack.length - 1];
            if (!last.left) {
                last.left = node;
            } else {
                last.right = node;
            }
        }
        stack.push(node);
    }

    return stack[0];
};
