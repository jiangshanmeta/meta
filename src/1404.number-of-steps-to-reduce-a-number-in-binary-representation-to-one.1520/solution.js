/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    const stack = s.split('');
    let result = 0;
    while (stack.length > 1) {
        // 偶数的除二
        if (stack[stack.length - 1] === '0') {
            stack.pop();
            result++;
        } else {
            // 奇数的+1
            result++;
            // 顺便把除2做了
            while (stack.length && stack[stack.length - 1] === '1') {
                stack.pop();
                result++;
            }
            stack.pop();
            stack.push('1');
        }
    }
    return result;
};
