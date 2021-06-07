/**
 * Definition for a binary tree node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     parent: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null, parent?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.parent = (parent===undefined ? null : parent)
 *     }
 * }
 */

function lowestCommonAncestor (p: Node | null, q: Node | null): Node | null {
    if (!p || !q) {
        return null;
    }
    let depthP = getDepth(p);
    let depthQ = getDepth(q);
    while (depthP > depthQ) {
        p = p.parent;
        depthP--;
    }
    while (depthQ > depthP) {
        q = q.parent;
        depthQ--;
    }
    while (p !== q) {
        p = p.parent;
        q = q.parent;
    }
    return p;
}

function getDepth (root:Node) {
    let result = 0;
    while (root) {
        result++;
        root = root.parent;
    }
    return result;
}
