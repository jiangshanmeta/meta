class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class CBTInserter {
    sequence:TreeNode[] = [];
    constructor (root: TreeNode | null) {
        if (root) {
            this.sequence.push(root);
            let index = 0;
            while (index < this.sequence.length) {
                if (this.sequence[index].left) {
                    this.sequence.push(this.sequence[index].left);
                }
                if (this.sequence[index].right) {
                    this.sequence.push(this.sequence[index].right);
                }
                index++;
            }
        }
    }

    insert (v: number): number {
        const node = new TreeNode(v);
        this.sequence.push(node);
        if (this.sequence.length === 1) {
            return v;
        }

        const parent = (this.sequence.length >> 1) - 1;
        if (2 * parent + 1 === this.sequence.length - 1) {
            this.sequence[parent].left = node;
        } else {
            this.sequence[parent].right = node;
        }

        return this.sequence[parent].val;
    }

    get_root (): TreeNode | null {
        if (this.sequence.length === 0) {
            return null;
        }
        return this.sequence[0];
    }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
