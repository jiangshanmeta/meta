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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var findDistance = function (root, p, q) {
    if (!root || p === q) {
        return 0;
    }

    const path1 = [root, ];
    const path2 = [root, ];
    findPath(root, p, path1);
    findPath(root, q, path2);

    for (let i = 1; i < Math.min(path1.length, path2.length); i++) {
        if (path1[i] !== path2[i]) {
            return path1.length - i + path2.length - i;
        }
    }
    return Math.abs(path1.length - path2.length);
};

function findPath (root, targetVal, sequence) {
    if (root.val === targetVal) {
        return true;
    }
    if (root.left) {
        sequence.push(root.left);
        const rst = findPath(root.left, targetVal, sequence);
        if (rst) {
            return true;
        }
        sequence.pop();
    }

    if (root.right) {
        sequence.push(root.right);
        const rst = findPath(root.right, targetVal, sequence);
        if (rst) {
            return true;
        }
        sequence.pop();
    }

    return false;
}
