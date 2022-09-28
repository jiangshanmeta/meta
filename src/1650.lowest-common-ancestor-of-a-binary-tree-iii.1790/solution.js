/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function (p, q) {
    let depth1 = getDepth(p);
    let depth2 = getDepth(q);
    while (depth1 > depth2) {
        p = p.parent;
        depth1--;
    }
    while (depth2 > depth1) {
        q = q.parent;
        depth2--;
    }

    while (p !== q) {
        p = p.parent;
        q = q.parent;
    }
    return p;
};

function getDepth (root) {
    let result = 0;
    while (root) {
        result++;
        root = root.parent;
    }

    return result;
}
