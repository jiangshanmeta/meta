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
 */
var BSTIterator = function (root) {
    this.sequence = [];
    root && inOrder(root, this.sequence);
    this.index = 0;
};

function inOrder (root, sequence) {
    root.left && inOrder(root.left, sequence);
    sequence.push(root.val);
    root.right && inOrder(root.right, sequence);
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.index < this.sequence.length;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.sequence[this.index++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function () {
    return this.index > 1;
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function () {
    this.index -= 2;
    return this.sequence[this.index++];
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */
