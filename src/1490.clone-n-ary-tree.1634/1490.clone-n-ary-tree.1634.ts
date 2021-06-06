/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function cloneTree (root: Node | null): Node | null {
    if (!root) {
        return root;
    }
    return new Node(root.val, root.children.map(item => cloneTree(item)));
}
