/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const indexStack = [
        -1, ];
    const parentheseStack = [];
    for (let i = 0; i < s.length; i++) {
        // 能匹配的把就pop
        if (s[i] === ')' && parentheseStack.length > 0 && parentheseStack[parentheseStack.length - 1] === '(') {
            parentheseStack.pop();
            indexStack.pop();
        } else {
            parentheseStack.push(s[i]);
            indexStack.push(i);
        }
    }
    indexStack.push(s.length);
    let result = 0;
    for (let i = 1; i < indexStack.length; i++) {
        result = Math.max(result, indexStack[i] - indexStack[i - 1] - 1);
    }
    return result;
};
