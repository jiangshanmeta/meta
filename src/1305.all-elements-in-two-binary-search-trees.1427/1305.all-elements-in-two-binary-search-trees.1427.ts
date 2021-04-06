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

function getAllElements (root1: TreeNode | null, root2: TreeNode | null): number[] {
    const seq1:number[] = [];
    root1 !== null && inOrder(root1, seq1);
    const seq2:number[] = [];
    root2 !== null && inOrder(root2, seq2);
    let index1 = 0;
    let index2 = 0;
    const result:number[] = [];
    while (index1 < seq1.length && index2 < seq2.length) {
        if (seq1[index1] < seq2[index2]) {
            result.push(seq1[index1++]);
        } else {
            result.push(seq2[index2++]);
        }
    }
    while (index1 < seq1.length) {
        result.push(seq1[index1++]);
    }
    while (index2 < seq2.length) {
        result.push(seq2[index2++]);
    }
    return result;
}

function inOrder (root:TreeNode, result:number[]):void {
    root.left !== null && inOrder(root.left, result);
    result.push(root.val);
    root.right !== null && inOrder(root.right, result);
}
