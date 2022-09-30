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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
    if (!root) {
        return root;
    }
    const bfs = (ns, level) => {
        const nns = [];
        for (let i = 0; i < ns.length; i++) {
            ns[i].left && nns.push(ns[i].left);
            ns[i].right && nns.push(ns[i].right);
        }
        if (level % 2 === 1) {
            ns.reverse();
        }
        if (nns.length) {
            bfs(nns, level + 1);
            for (let i = 0; i < ns.length; i++) {
                ns[i].left = nns[2 * i];
                ns[i].right = nns[2 * i + 1];
            }
        }
    };
    bfs([root, ], 0);
    return root;
};
