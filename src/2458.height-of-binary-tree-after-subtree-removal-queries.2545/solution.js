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
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function (root, queries) {
    if (!root) {
        return [];
    }
    const depthMap = new Map();
    const findDepth = (node) => {
        let depth = 0;
        if (node.left && node.right) {
            const l = findDepth(node.left);
            const r = findDepth(node.right);
            depth = Math.max(l, r) + 1;
        } else if (node.left) {
            depth = findDepth(node.left) + 1;
        } else if (node.right) {
            depth = findDepth(node.right) + 1;
        }
        depthMap.set(node.val, depth);
        return depth;
    };
    findDepth(root);

    const removedMap = new Map();
    const findRemovedDepth = (node, current, max) => {
        removedMap.set(node.val, max);
        current++;
        if (node.left && node.right) {
            findRemovedDepth(node.left, current, Math.max(max, current + depthMap.get(node.right.val)));
            findRemovedDepth(node.right, current, Math.max(max, current + depthMap.get(node.left.val)));
        } else if (node.left) {
            findRemovedDepth(node.left, current, Math.max(max, current - 1));
        } else if (node.right) {
            findRemovedDepth(node.right, current, Math.max(max, current - 1));
        }
    };
    findRemovedDepth(root, 0, 0);

    return queries.map((query) => removedMap.get(query));
};
