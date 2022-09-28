/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
// 判断是否是子序列(不一定要连续的)
function isSubsequence (S, sub) {
    let index = -1;
    for (let i = 0; i < sub.length; i++) {
        index = S.indexOf(sub[i], index + 1);
        if (index === -1) {
            return false;
        }
    }
    return true;
}

var numMatchingSubseq = function (S, words) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > S.length) {
            continue;
        }
        isSubsequence(S, words[i]) && count++;
    }
    return count;
};
