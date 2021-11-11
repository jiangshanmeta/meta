/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];
    const sequence = [];
    const backTracking = (index) => {
        if (sequence.length === k) {
            result.push(sequence.slice());
            return;
        }
        if (index > n || sequence.length + n - index + 1 < k) {
            return;
        }
        backTracking(index + 1);

        sequence.push(index);
        backTracking(index + 1);
        sequence.pop();
    };
    backTracking(1);
    return result;
};
