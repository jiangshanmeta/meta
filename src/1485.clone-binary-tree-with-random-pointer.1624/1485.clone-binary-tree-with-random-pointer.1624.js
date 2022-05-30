/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = next === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function (root) {
    if (!root) {
        return root;
    }
    const map = new Map();
    function dfs1 (root) {
        const copy = new NodeCopy(root.val);
        map.set(root, copy);
        root.left && dfs1(root.left);
        root.right && dfs1(root.right);
    }
    dfs1(root);

    function dfs2 (root) {
        const copy = map.get(root);
        if (root.left) {
            copy.left = map.get(root.left);
        }
        if (root.right) {
            copy.right = map.get(root.right);
        }
        if (root.random) {
            copy.random = map.get(root.random);
        }

        root.left && dfs2(root.left);
        root.right && dfs2(root.right);
    }
    dfs2(root);
    return map.get(root);
};
