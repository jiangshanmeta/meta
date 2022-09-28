/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
    let result = 0;

    function dfs (root) {
        if (!root) {
            return [
                0, ];
        }
        if (!root.left && !root.right) {
            return [
                0, 1, ];
        }
        const left = dfs(root.left);
        const right = dfs(root.right);
        const rightSum = new Array(right.length).fill(0);
        for (let i = 1; i < right.length; i++) {
            rightSum[i] = rightSum[i - 1] + right[i];
        }

        for (let i = 1; i < Math.min(distance, left.length); i++) {
            const rest = distance - i;
            result += left[i] * rightSum[rest < right.length ? rest : rightSum.length - 1];
        }
        const next = new Array(Math.max(left.length, right.length) + 1).fill(0);
        for (let i = 1; i < next.length; i++) {
            if (i - 1 < left.length) {
                next[i] += left[i - 1];
            }
            if (i - 1 < right.length) {
                next[i] += right[i - 1];
            }
        }

        return next;
    }
    dfs(root);

    return result;
};
