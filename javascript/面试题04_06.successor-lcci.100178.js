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
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    if (p.right) {
        p = p.right;
        while (p.left) {
            p = p.left;
        }
        return p;
    }

    const sequence = [];
    findNode(root, p, sequence);
    for (let i = sequence.length - 2; i > -1; i--) {
        if (sequence[i + 1] === sequence[i].left) {
            return sequence[i];
        }
    }
    return null;
};

function findNode (root, p, sequence) {
    if (!root) {
        return false;
    }
    sequence.push(root);
    if (root.val === p.val) {
        return true;
    }
    if (findNode(root.left, p, sequence)) {
        return true;
    }
    if (findNode(root.right, p, sequence)) {
        return true;
    }
    sequence.pop();
    return false;
}
