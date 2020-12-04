/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    const hash = {};
    for (let i = 0; i < A.length; i++) {
        const word = A[i];
        const even = [];
        const odd = [];
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                even.push(word[j]);
            } else {
                odd.push(word[j]);
            }
        }
        // 分别拿出奇数偶数个，若special-equivalent，则排序后组成的新字符串相同
        const stdStr = even.sort().join('') + odd.sort().join('');

        if (hash[stdStr] === undefined) {
            hash[stdStr] = 1;
        } else {
            hash[stdStr]++;
        }
    }

    return Object.keys(hash).length;
};
