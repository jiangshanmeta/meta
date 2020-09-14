/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let result = '';
    // 左括号个数
    let leftCount = 0;
    let startIndex = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            leftCount++;
        } else {
            // 遇到最外层对应的右括号
            if (leftCount === 1) {
                result = `${result}${S.substring(startIndex + 1, i)}`;
                startIndex = i + 1;
            }
            leftCount--;
        }
    }
    return result;
};
