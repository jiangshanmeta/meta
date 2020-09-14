/**
 * @param {string} s
 * @return {number}
 */
// 注意题目中所说的split it in the maximum amount of balanced strings指的是所有字符都用上
// 否则 LLLLRLRLRRRR这种问题应该返回3而不是1
// 所以从头开始计数 两个数量相等即得到一个平衡子串
var balancedStringSplit = function (s) {
    let result = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            result++;
        }
    }
    return result;
};
