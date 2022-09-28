/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (!root) {
        return root;
    }
    const seq = [];
    inOrder(root, seq);
    for (let i = 0; i < seq.length; i++) {
        seq[i].left = i === 0 ? seq[seq.length - 1] : seq[i - 1];
        seq[i].right = i === seq.length - 1 ? seq[0] : seq[i + 1];
    }
    return seq[0];
};

function inOrder (root, sequence) {
    root.left && inOrder(root.left, sequence);
    sequence.push(root);
    root.right && inOrder(root.right, sequence);
}
