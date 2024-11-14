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
    if (!root || !p) {
        return null;
    }
    if (p.right) {
        let result = p.right;
        while (result.left) {
            result = result.left;
        }
        return result;
    }
    const path = [];
    while (root !== p) {
        path.push(root);
        if (root.val > p.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    path.push(p);

    for (let i = path.length - 2; i > -1; i--) {
        if (path[i + 1] === path[i].left) {
            return path[i];
        }
    }
    return null;
};
