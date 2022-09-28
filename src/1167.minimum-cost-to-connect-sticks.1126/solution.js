/**
 * @param {number[]} sticks
 * @return {number}
 */
// 贪心 尽可能先试用费用较小的两个
var connectSticks = function (sticks) {
    // 从大到小排列
    sticks.sort((a, b) => b - a);
    let result = 0;
    while (sticks.length > 1) {
        // 找到费用最小的两个
        const cost = sticks.pop() + sticks.pop();
        result += cost;
        // 合并后的二分插入到数组中
        let low = 0;
        let high = sticks.length - 1;
        let target = sticks.length;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (sticks[mid] < cost) {
                target = Math.min(target, mid);
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        sticks.splice(target, 0, cost);
    }
    return result;
};
