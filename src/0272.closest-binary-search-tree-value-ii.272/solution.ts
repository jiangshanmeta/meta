
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

function closestKValues (root: TreeNode | null, target: number, k: number): number[] {
    if (!root) {
        return [];
    }
    const seq:number[] = [];
    inOrder(root, seq);
    let low = 0;
    let high = seq.length - 1;
    let left = -1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (seq[mid] > target) {
            high = mid - 1;
        } else {
            left = Math.max(left, mid);
            low = mid + 1;
        }
    }
    let right = left + 1;
    const result:number[] = [];
    while (k > 0 && left > -1 && right < seq.length) {
        if (target - seq[left] < seq[right] - target) {
            result.push(seq[left--]);
        } else {
            result.push(seq[right++]);
        }
        k--;
    }
    while (k > 0 && left > -1) {
        result.push(seq[left--]);
        k--;
    }
    while (k > 0 && right < seq.length) {
        result.push(seq[right++]);
        k--;
    }

    return result;
}

function inOrder (root:TreeNode, seq:number[]) {
    root.left && inOrder(root.left, seq);
    seq.push(root.val);
    root.right && inOrder(root.right, seq);
}
