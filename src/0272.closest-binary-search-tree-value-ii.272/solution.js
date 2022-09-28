/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function (root, target, k) {
    const seq = [];
    inOrder(root, seq);
    if (seq[0] >= target) {
        return seq.slice(0, k);
    }
    if (seq[seq.length - 1] <= target) {
        return seq.slice(seq.length - k);
    }
    let index = 0;
    let low = 0;
    let high = seq.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (seq[mid] > target) {
            high = mid - 1;
        } else {
            index = Math.max(index, mid);
            low = mid + 1;
        }
    }

    let left = index;
    let right = index + 1;
    const result = [];
    while (k > 0 && left > -1 && right < seq.length) {
        const diff1 = target - seq[left];
        const diff2 = seq[right] - target;
        if (diff1 < diff2) {
            result.push(seq[left--]);
        } else {
            result.push(seq[right++]);
        }
        k--;
    }
    while (k > 0 && left > -1) {
        k--;
        result.push(seq[left--]);
    }
    while (k > 0 && right < seq.length) {
        k--;
        result.push(seq[right++]);
    }

    return result;
};

function inOrder (root, seq) {
    root.left && inOrder(root.left, seq);
    seq.push(root.val);
    root.right && inOrder(root.right, seq);
}
