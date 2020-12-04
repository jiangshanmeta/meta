/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    const half = arr.length / 2;
    // 统计每个数字出现次数
    const numberCountMap = {};
    for (let i = 0; i < arr.length; i++) {
        numberCountMap[arr[i]] = (numberCountMap[arr[i]] || 0) + 1;
    }
    // 次数从大到小
    // 优先移除次数大的
    const counts = Object.values(numberCountMap).sort((a, b) => b - a);
    let removeCount = 0;
    let index = 0;
    while (index < counts.length && removeCount < half) {
        removeCount += counts[index++];
    }
    return index;
};
