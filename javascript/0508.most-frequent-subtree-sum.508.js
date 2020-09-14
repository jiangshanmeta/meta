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
// 后序遍历
var findFrequentTreeSum = function (root) {
    if (root === null) {
        return [];
    }

    const map = {};

    function divideConquer (node) {
        const left = (node.left && divideConquer(node.left)) || 0;
        const right = (node.right && divideConquer(node.right)) || 0;

        const sum = left + right + node.val;

        if (map[sum] === undefined) {
            map[sum] = 0;
        }
        map[sum]++;
        return sum;
    }

    divideConquer(root);

    const map2 = {};
    const counts = [];

    Object.keys(map).forEach((num) => {
        const count = map[num];
        counts.push(count);
        if (map2[count] === undefined) {
            map2[count] = [];
        }
        map2[count].push(+num);
    });

    return map2[Math.max.apply(null, counts)];
};
