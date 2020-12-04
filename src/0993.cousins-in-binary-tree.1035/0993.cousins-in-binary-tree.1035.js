/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

function findNode (root, target, path) {
    if (root.val === target) {
        return true;
    }
    if (root.left) {
        path.push(root.left.val);
        if (findNode(root.left, target, path)) {
            return true;
        } else {
            path.pop();
        }
    }

    if (root.right) {
        path.push(root.right.val);
        if (findNode(root.right, target, path)) {
            return true;
        } else {
            path.pop();
        }
    }

    return false;
}

var isCousins = function (root, x, y) {
    const xPath = [];
    findNode(root, x, xPath);
    const yPath = [];
    findNode(root, y, yPath);

    if (xPath.length === yPath.length && xPath[xPath.length - 2] !== yPath[yPath.length - 2]) {
        return true;
    }
    return false;
};
