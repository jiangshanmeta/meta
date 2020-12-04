/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    const result = [];
    backTracking([], result, n, k);
    return k > result.length ? '' : result[k - 1];
};
const candidate = [
    'a', 'b', 'c', ];
function backTracking (sequence, result, n, k) {
    if (result.length === k) {
        return;
    }
    if (sequence.length === n) {
        result.push(sequence.join(''));
        return;
    }
    for (let i = 0; i < 3; i++) {
        if (sequence.length && sequence[sequence.length - 1] === candidate[i]) {
            continue;
        }
        sequence.push(candidate[i]);
        backTracking(sequence, result, n, k);
        sequence.pop();
    }
}
