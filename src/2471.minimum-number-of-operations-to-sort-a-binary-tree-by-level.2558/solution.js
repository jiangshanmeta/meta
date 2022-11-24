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
 * @return {number}
 */
var minimumOperations = function (root) {
    let result = 0;
    let nodes = [root, ];
    while (nodes.length > 0) {
        const nLevel = [];
        const vals = [];
        for (let i = 0; i < nodes.length; i++) {
            const n = nodes[i];
            vals.push(n.val);
            if (n.left) {
                nLevel.push(n.left);
            }
            if (n.right) {
                nLevel.push(n.right);
            }
        }

        const sorted = [...vals, ].sort((a, b) => a - b);
        const valIndexMap = vals.reduce((map, val, index) => {
            map.set(val, index);
            return map;
        }, new Map());

        for (let j = 0; j < sorted.length; j++) {
            if (sorted[j] === vals[j]) {
                continue;
            }
            const index = valIndexMap.get(sorted[j]);

            valIndexMap.set(vals[j], index);
            vals[index] = vals[j];
            result++;
        }

        nodes = nLevel;
    }

    return result;
};
