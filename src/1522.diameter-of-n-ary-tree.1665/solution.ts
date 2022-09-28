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

function diameter (root: Node): number {
    let result = 1;
    function dfs (root:Node) {
        if (root.children.length === 0) {
            return 1;
        }
        const subs = root.children.map(node => dfs(node)).sort((a, b) => b - a);
        if (subs.length === 1) {
            result = Math.max(result, subs[0] + 1);
        } else {
            result = Math.max(result, subs[0] + subs[1] + 1);
        }

        return subs[0] + 1;
    }
    root && dfs(root);
    return result - 1;
}
