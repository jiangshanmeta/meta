/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let index = 0;
    function parse () {
        const result = [];
        while (index < s.length && s[index] !== ')') {
            if (s[index] === '(') {
                index++;
                // 处理子括号
                result.push(...parse().reverse().join(''));
            } else {
                result.push(s[index++]);
            }
        }
        index++;
        return result;
    }
    return parse().join('');
};
