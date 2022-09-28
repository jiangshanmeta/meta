/**
 * @param {number[]} arr
 * @return {number}
 */
// 类似于leetcode 55
// 这题特殊之处是元素是 0~arr.length-1
// arr[i] 对应元素 j 则 arr[j]和arr[i]必须分到同一组
var maxChunksToSorted = function (arr) {
    let count = 0;
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < arr.length) {
        while (leftIndex <= rightIndex) {
            rightIndex = Math.max(rightIndex, arr[leftIndex]);
            leftIndex++;
        }
        count++;
        rightIndex = leftIndex;
    }
    return count;
};
