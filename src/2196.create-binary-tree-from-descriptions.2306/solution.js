/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    const map = {};
    const c2p = {};
    for (const [parent, child, isLeft, ] of descriptions) {
        if (!map[child]) {
            map[child] = new TreeNode(child);
        }

        if (!map[parent]) {
            map[parent] = new TreeNode(parent);
        }
        map[parent][isLeft ? 'left' : 'right'] = map[child];
        c2p[child] = parent;
    }
    let p = descriptions[0][0];
    while (c2p[p] !== undefined) {
        p = c2p[p];
    }

    return map[p];
};
