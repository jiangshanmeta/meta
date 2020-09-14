/**
 * @param {string} S
 * @return {string}
 */
// 遍历实现
var removeVowels = function (S) {
    const vowelMap = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
    };
    const result = [];
    for (let i = 0; i < S.length; i++) {
        if (!vowelMap[S[i]]) {
            result.push(S[i]);
        }
    }

    return result.join('');
};

/**
 * @param {string} S
 * @return {string}
 */
// 正则实现
var removeVowels = function (S) {
    return S.replace(/[aeiou]/g, '');
};
