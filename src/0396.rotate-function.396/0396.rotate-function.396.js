/**
 * @param {number[]} A
 * @return {number}
 */
// http://www.cnblogs.com/grandyang/p/5869791.html
// F(i) = F(i-1) + sum - n*A[n-i]
var maxRotateFunction = function (A) {
    let before = 0;
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        before += i * A[i];
    }
    let result = before;
    for (let i = 1; i < A.length; i++) {
        before = before + sum - A.length * A[A.length - i];
        result = Math.max(result, before);
    }
    return result;
};
