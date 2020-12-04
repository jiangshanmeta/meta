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
var findMode = function (root) {
    if (!root) {
        return [];
    }
    let max = 0;
    let lastVal;
    let modes = [];
    let counter = 0;

    function inOrderTravel (node) {
        node.left && inOrderTravel(node.left);

        if (node.val !== lastVal) {
            lastVal = node.val;
            counter = 1;
        } else {
            counter++;
        }

        if (counter > max) {
            max = counter;
            modes = [
                node.val, ];
        } else if (counter === max) {
            modes.push(node.val);
        }

        node.right && inOrderTravel(node.right);
    }

    inOrderTravel(root);
    return modes;
};
