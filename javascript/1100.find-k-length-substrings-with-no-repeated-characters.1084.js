// Given a string S, return the number of substrings of length K with no repeated characters.
/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
// 滑动窗口
var numKLenSubstrNoRepeats = function (S, K) {
    // 窗口大小比S.length还大
    if (K > S.length) {
        return 0;
    }
    // counts统计在窗口内字母出现次数
    const counts = new Array(26).fill(0);

    for (let i = 0; i < K - 1; i++) {
        counts[S.charCodeAt(i) - 97]++;
    }

    let result = 0;
    for (let i = K - 1; i < S.length; i++) {
        // 窗口右移 新添加一个字母
        counts[S.charCodeAt(i) - 97]++;
        if (counts.every(item => item < 2)) {
            result++;
        }
        // 窗口右移 把最左侧的字母干掉
        counts[S.charCodeAt(i - K + 1) - 97]--;
    }
    return result;
};
