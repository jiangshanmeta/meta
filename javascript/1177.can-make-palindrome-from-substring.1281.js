/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
    // counts[i+1] s从0到s[i] 词频统计
    const counts = [
        new Array(26).fill(0), ];
    for (let i = 0; i < s.length; i++) {
        const newCount = Array.from(counts[i]);
        newCount[s.charCodeAt(i) - 97]++;
        counts.push(newCount);
    }
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        const [
            left, right, k, ] = queries[i];
        let oddCount = 0;
        for (let j = 0; j < 26; j++) {
            // 计算从left到right该字母有几个
            const count = counts[right + 1][j] - counts[left][j];
            count % 2 === 1 && oddCount++;
        }
        // 一次变换能处理掉两个成单的字母 加一是因为还可以有一个剩余的成单字母
        result.push(oddCount <= k * 2 + 1);
    }
    return result;
};
