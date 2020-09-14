/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
// 检查是否是子序列
function isSubseqquence (str, sub) {
    let index = -1;
    for (let i = 0; i < sub.length; i++) {
        index = str.indexOf(sub[i], index + 1);
        if (index === -1) {
            return false;
        }
    }
    return true;
}

var findLongestWord = function (s, d) {
    // 排序 长度从大到小排列 同长度按照字典序从小到大排列
    d.sort((a, b) => {
        const la = a.length;
        const lb = b.length;
        if (la !== lb) {
            return lb - la;
        }
        return a < b ? -1 : 1;
    });
    // 这样遇到的第一个满足subsequence的就是答案
    for (let i = 0; i < d.length; i++) {
        if (isSubseqquence(s, d[i])) {
            return d[i];
        }
    }
    return '';
};
