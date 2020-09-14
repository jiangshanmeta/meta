/**
 * @param {string} S
 * @return {number}
 */
const mod = 10 ** 9 + 7;
var distinctSubseqII = function (S) {
    // duplicate[i] 记录字母表第i个字符有多少已经出现的组合
    const duplicate = new Array(26).fill(0);
    let result = 0;
    let previous = 0;
    for (let i = 0; i < S.length; i++) {
        const code = S.charCodeAt(i) - 97;
        // count是以S[i]为结尾的独一无二的字符
        // 不考虑重复是previous+1个
        // 考虑重复所以要减去duplicate[code]
        // 还要加上mod再%是因为 经过多次mod运算 previous可能比duplicate[code]小了
        // 要保证count为正数

        const count = (previous + 1 - duplicate[code] + mod) % mod;
        result = (result + count) % mod;
        previous = (previous + count) % mod;
        duplicate[code] = (duplicate[code] + count) % mod;
    }
    return result;
};
