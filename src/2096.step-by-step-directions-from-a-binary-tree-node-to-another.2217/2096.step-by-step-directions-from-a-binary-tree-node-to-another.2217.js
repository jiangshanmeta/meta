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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
    if (!root) {
        return '';
    }
    const pathS = [];
    const pathD = [];
    findPath(root, pathS, startValue);
    findPath(root, pathD, destValue);
    const result = [];
    let index = pathS.length - 1;
    while (index >= pathD.left) {
        index--;
        result.push('U');
    }
    while (pathD[index] !== pathS[index]) {
        index--;
        result.push('U');
    }
    while (index < pathD.length - 1) {
        if (pathD[index + 1] === pathD[index].left) {
            result.push('L');
        } else {
            result.push('R');
        }
        index++;
    }
    return result.join('');
};

function findPath (root, paths, target) {
    paths.push(root);
    if (root.val === target) {
        return true;
    }
    if (root.left) {
        const rst = findPath(root.left, paths, target);
        if (rst) {
            return true;
        }
    }
    if (root.right) {
        const rst = findPath(root.right, paths, target);
        if (rst) {
            return true;
        }
    }
    paths.pop();
    return false;
}
