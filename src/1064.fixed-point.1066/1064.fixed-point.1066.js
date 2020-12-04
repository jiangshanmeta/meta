/**
 * @param {number[]} A
 * @return {number}
 */
// 直接暴力搜
var fixedPoint = function (A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] === i) {
            return i;
        }
    }
    return -1;
};
