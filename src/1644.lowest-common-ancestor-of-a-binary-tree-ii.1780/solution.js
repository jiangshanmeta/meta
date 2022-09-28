/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || !p || !q) {
        return null;
    }

    const path1 = [root, ];
    const found1 = findPath(root, p, path1);
    if (!found1) {
        return null;
    }
    const path2 = [root, ];
    const found2 = findPath(root, q, path2);
    if (!found2) {
        return null;
    }
    for (let i = 1; i < Math.min(path1.length, path2.length); i++) {
        if (path1[i] !== path2[i]) {
            return path1[i - 1];
        }
    }
    if (path1.length < path2.length) {
        return path1[path1.length - 1];
    } else {
        return path2[path2.length - 1];
    }
};

function findPath (root, target, sequence) {
    if (root === target) {
        return true;
    }
    if (root.left) {
        sequence.push(root.left);
        const rst = findPath(root.left, target, sequence);
        if (rst) {
            return true;
        }
        sequence.pop();
    }

    if (root.right) {
        sequence.push(root.right);
        const rst = findPath(root.right, target, sequence);
        if (rst) {
            return true;
        }
        sequence.pop();
    }
    return false;
}
