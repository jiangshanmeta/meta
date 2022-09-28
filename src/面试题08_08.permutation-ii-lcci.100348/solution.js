/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
    const result = [];
    backTracking([], S.split('').sort(), new Array(S.length).fill(false), result);
    return result;
};

function backTracking (sequence, S, used, result) {
    if (sequence.length === S.length) {
        result.push(sequence.join(''));
        return;
    }
    for (let i = 0; i < S.length; i++) {
        if (used[i]) {
            continue;
        }
        if (i > 0 && S[i] === S[i - 1] && !used[i - 1]) {
            continue;
        }
        sequence.push(S[i]);
        used[i] = true;
        backTracking(sequence, S, used, result);
        used[i] = false;
        sequence.pop();
    }
}
