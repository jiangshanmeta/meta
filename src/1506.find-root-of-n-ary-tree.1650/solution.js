/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function (tree) {
    const map = new Map();
    const heights = tree.map((root) => {
        return getHeight(root);
    });
    function getHeight (root) {
        if (map.has(root.val)) {
            return map.get(root.val);
        }
        const height = root.children.length === 0 ? 1 : Math.max(...root.children.map(item => getHeight(item))) + 1;
        map.set(root.val, height);
        return height;
    }
    let root = null;
    let height = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] > height) {
            root = tree[i];
            height = heights[i];
        }
    }
    return root;
};
