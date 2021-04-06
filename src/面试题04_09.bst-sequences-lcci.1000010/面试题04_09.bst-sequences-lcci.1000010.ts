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

function BSTSequences (root: TreeNode | null): number[][] {
    if (root === null) {
        return [[], ];
    }
    if (root.left && root.right) {
        const left = BSTSequences(root.left);
        const right = BSTSequences(root.right);
        const result:number[][] = [];
        const sequence = [root.val, ];
        for (let i = 0; i < left.length; i++) {
            for (let j = 0; j < right.length; j++) {
                backTracking(left[i], right[j], 0, 0, sequence, result);
            }
        }
        return result;
    } else if (root.left) {
        return BSTSequences(root.left).map(row => {
            row.unshift(root.val);
            return row;
        });
    } else if (root.right) {
        return BSTSequences(root.right).map(row => {
            row.unshift(root.val);
            return row;
        });
    } else {
        return [
            [root.val, ],
        ];
    }
}

function backTracking (A:number[], B:number[], index1:number, index2:number, sequence:number[], result:number[][]) {
    if (index1 === A.length && index2 === B.length) {
        result.push(sequence.slice(0));
        return;
    }
    if (index1 < A.length) {
        sequence.push(A[index1]);
        backTracking(A, B, index1 + 1, index2, sequence, result);
        sequence.pop();
    }
    if (index2 < B.length) {
        sequence.push(B[index2]);
        backTracking(A, B, index1, index2 + 1, sequence, result);
        sequence.pop();
    }
}
