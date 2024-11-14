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

class BSTIterator {
    stack:TreeNode[];
    constructor (root: TreeNode | null) {
        this.stack = [];
        while (root) {
            this.stack.push(root);
            root = root.left;
        }
    }

    next (): number {
        let node = this.stack.pop();
        const result = node.val;
        node = node.right;
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
        return result;
    }

    hasNext (): boolean {
        return this.stack.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
