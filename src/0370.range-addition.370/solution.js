/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function (length, updates) {
    const sequence = new Array(length).fill(0);
    for (const [left, right, inc, ] of updates) {
        sequence[left] += inc;
        if (right + 1 < sequence.length) {
            sequence[right + 1] -= inc;
        }
    }
    for (let i = 1; i < sequence.length; i++) {
        sequence[i] += sequence[i - 1];
    }
    return sequence;
};
