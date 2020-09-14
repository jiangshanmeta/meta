/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let count = 0;
    let startIndex = 0;
    for (let i = 0; i < g.length; i++) {
        // 找到第一个能满足的
        while (startIndex < s.length) {
            if (s[startIndex++] >= g[i]) {
                count++;
                break;
            }
        }
    }

    return count;
};
