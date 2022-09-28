/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function createBinaryTree (descriptions: number[][]): TreeNode | null {
    const map = new Map<number, TreeNode>();
    const c2p = new Map<number, number>();
    for (const [parent, child, isLeft, ] of descriptions) {
        if (!map.has(parent)) {
            map.set(parent, new TreeNode(parent));
        }
        if (!map.has(child)) {
            map.set(child, new TreeNode(child));
        }
        map.get(parent)![isLeft ? 'left' : 'right'] = map.get(child);
        c2p.set(child, parent);
    }
    let p = descriptions[0][0];
    while (c2p.has(p)) {
        p = c2p.get(p);
    }
    return map.get(p)!;
}
