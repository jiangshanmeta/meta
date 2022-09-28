/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
    helper(A.length, A, B, C);
};

function helper (n, A, B, C) {
    if (n === 1) {
        C.push(A.pop());
        return;
    }
    helper(n - 1, A, C, B);
    C.push(A.pop());
    helper(n - 1, B, A, C);
}
