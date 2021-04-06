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

function isCousins (root: TreeNode | null, x: number, y: number): boolean {
    if (!root) {
        return false;
    }
    const seq1:number[] = [];
    const seq2:number[] = [];
    findPath(root, seq1, x);
    findPath(root, seq2, y);
    console.log(seq1, seq2);
    return seq1.length === seq2.length && seq1.length > 1 && seq1[0] !== seq2[0];
}

function findPath (root:TreeNode, sequence:number[], val:number):boolean {
    if (root.val === val) {
        return true;
    }
    if (root.left) {
        const rst = findPath(root.left, sequence, val);
        if (rst) {
            sequence.push(root.val);
            return true;
        }
    }

    if (root.right) {
        const rst = findPath(root.right, sequence, val);
        if (rst) {
            sequence.push(root.val);
            return true;
        }
    }
    return false;
}
