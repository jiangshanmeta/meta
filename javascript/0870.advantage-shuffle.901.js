/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// 贪心
var advantageCount = function (A, B) {
    // 类似于田忌赛马
    // 对于B中的元素 从大到小 看A中剩余元素有没有比它大的
    // 如果有就用最大的和它配对
    // 如果没有就用最小的和它配对
    const result = new Array(A.length);
    A.sort((a, b) => b - a);
    const sortedB = B.map((value, index) => {
        return {
            value,
            index,
        };
    }).sort((a, b) => b.value - a.value);

    let leftIndex = 0;
    let rightIndex = A.length - 1;

    for (let i = 0; i < sortedB.length; i++) {
        const {
            value, index,
        } = sortedB[i];
        if (value < A[leftIndex]) {
            result[index] = A[leftIndex++];
        } else {
            result[index] = A[rightIndex--];
        }
    }
    return result;
};
