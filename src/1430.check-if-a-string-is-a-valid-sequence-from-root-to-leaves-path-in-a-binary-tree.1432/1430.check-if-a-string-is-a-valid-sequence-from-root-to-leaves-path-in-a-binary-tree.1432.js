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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr) {
    if (!root) {
        return false;
    }
    let levelNodes = [
        root, ];
    let index = 0;
    while (index < arr.length && levelNodes.length) {
        if (index === arr.length - 1) {
            return levelNodes.some((node) => {
                return !node.left && !node.right && node.val === arr[index];
            });
        }
        levelNodes = levelNodes.reduce((list, node) => {
            if (node.val === arr[index]) {
                node.left && list.push(node.left);
                node.right && list.push(node.right);
            }
            return list;
        }, []);
        index++;
    }
    return false;
};
