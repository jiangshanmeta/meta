/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    backTracking(n, n, [], result);
    return result;
};

function backTracking (leftCount, rightCount, sequence, result) {
    if (leftCount === 0 && rightCount === 0) {
        result.push(sequence.join(''));
        return;
    }
    if (leftCount > 0) {
        sequence.push('(');
        backTracking(leftCount - 1, rightCount, sequence, result);
        sequence.pop();
    }

    if (rightCount > leftCount) {
        sequence.push(')');
        backTracking(leftCount, rightCount - 1, sequence, result);
        sequence.pop();
    }
}
