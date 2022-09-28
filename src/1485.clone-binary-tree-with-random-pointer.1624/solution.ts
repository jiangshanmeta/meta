/**
 * Definition for a binary tree node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     random: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null, random?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomBinaryTree (root: Node | null): NodeCopy {
    if (!root) {
        return null;
    }
    const map = new Map<Node, NodeCopy>();
    function copy (root:Node) {
        const c = new NodeCopy(root.val);
        map.set(root, c);
        if (root.left) {
            c.left = copy(root.left);
        }
        if (root.right) {
            c.right = copy(root.right);
        }
        return c;
    }
    const cRoot = copy(root);
    function fixRandom (root:Node) {
        const c = map.get(root);
        if (root.random) {
            c.random = map.get(root.random);
        }
        root.left && fixRandom(root.left);
        root.right && fixRandom(root.right);
    }
    fixRandom(root);
    return cRoot;
}
