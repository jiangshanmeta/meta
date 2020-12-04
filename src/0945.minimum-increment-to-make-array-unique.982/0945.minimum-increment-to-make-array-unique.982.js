/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
    // 从小到大排个序
    A.sort((a, b) => a - b);
    let count = 0;
    // 后面的元素要看前一个元素决定增长多少
    for (let i = 1; i < A.length; i++) {
        if (A[i] <= A[i - 1]) {
            const delta = A[i - 1] - A[i] + 1;
            A[i] += delta;
            count += delta;
        }
    }

    return count;
};
