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

class CBTInserter {
    nodeArray:TreeNode[] = [];
    constructor (root: TreeNode | null) {
        if (!root) {
            return;
        }
        let index = 0;
        this.nodeArray.push(root);
        while (index < this.nodeArray.length) {
            const node = this.nodeArray[index];
            if (node.left) {
                this.nodeArray.push(node.left);
            }
            if (node.right) {
                this.nodeArray.push(node.right);
            }
            index++;
        }
    }

    insert (v: number): number {
        const index = this.nodeArray.length;
        const parent = (index - 1) >> 1;
        const node = new TreeNode(v);
        this.nodeArray.push(node);
        const result = this.nodeArray[parent].val;
        if (2 * parent + 1 === index) {
            this.nodeArray[parent].left = node;
        } else {
            this.nodeArray[parent].right = node;
        }

        return result;
    }

    get_root (): TreeNode | null {
        return this.nodeArray[0];
    }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
