/**
 * @param {number[]} A
 * @return {boolean}
 */
// 时间复杂度O(nlogn)，决定于排序那里
var canReorderDoubled = function (A) {
    // countBy
    const countMap = {};
    for (let i = 0; i < A.length; i++) {
        if (countMap[A[i]] === undefined) {
            countMap[A[i]] = 1;
        } else {
            countMap[A[i]]++;
        }
    }
    // 按照绝对值大小从小到大排序
    A.sort((a, b) => Math.abs(a) - Math.abs(b));
    // 从小到大，看看有可否成对的较大的元素
    for (let i = 0; i < A.length; i++) {
        if (countMap[A[i]] === 0) {
            continue;
        }
        if (countMap[2 * A[i]] === undefined || countMap[2 * A[i]] === 0) {
            return false;
        }
        // 已使用该元素
        countMap[A[i]]--;
        countMap[2 * A[i]]--;
    }
    return true;
};
