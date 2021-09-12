/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    const s = [];
    const backTracking = (l, r) => {
        if (l > 0) {
            s.push('(');
            backTracking(l - 1, r);
            s.pop();
        }
        if (r > l) {
            s.push(')');
            backTracking(l, r - 1);
            s.pop();
        }
        if (l === 0 && r === 0) {
            result.push(s.join(''));
        }
    };
    backTracking(n, n, s);
    return result;
};
