/**
 * @param {string[]} words
 * @return {number}
 */
// 很像最长增长子序列
var longestStrChain = function (words) {
    let result = 1;
    // 按照长度排序
    words.sort((a, b) => a.length - b.length);

    const dp = new Array(words.length).fill(1);
    for (let i = 1; i < words.length; i++) {
        const L = words[i].length;
        for (let j = i - 1; j > -1; j--) {
            if (words[j].length === L) {
                continue;
            } else if (words[j].length === L - 1) {
                // 长度-1的且构成前体的 找最大值
                if (isPredecessor(words[j], words[i])) {
                    dp[i] = Math.max(dp[j] + 1, dp[j]);
                    result = Math.max(dp[i], result);
                }
            } else {
                break;
            }
        }
    }
    return result;
};
// 判断是否是Predecessor
function isPredecessor (word1, word2) {
    let index1 = 0;
    let index2 = 0;
    let diff = false;
    while (index1 < word1.length && index2 < word2.length) {
        if (word1[index1] === word2[index2]) {
            index1++;
            index2++;
        } else if (diff) {
            return false;
        } else {
            diff = true;
            index2++;
        }
    }
    return true;
}
