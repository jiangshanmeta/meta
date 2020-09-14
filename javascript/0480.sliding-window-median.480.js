/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    const result = [];
    // slideWindow是从小到大排好的滑动窗口中的元素
    const slideWindow = nums.slice(0, k - 1).sort((a, b) => a - b);
    const isOdd = !!(k & 1);
    const slideMid = k >> 1;
    for (let i = k - 1; i < nums.length; i++) {
        let value = nums[i];
        let index = slideWindow.length;
        let low = 0;
        let high = slideWindow.length - 1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (slideWindow[mid] >= value) {
                index = Math.min(index, mid);
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        // 加入nums[i]
        slideWindow.splice(index, 0, value);
        if (isOdd) {
            result.push(slideWindow[slideMid]);
        } else {
            result.push((slideWindow[slideMid - 1] + slideWindow[slideMid]) / 2);
        }
        // 滑动窗口要后移了 干掉第一个元素
        value = nums[i - k + 1];
        low = 0;
        high = slideWindow.length;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (slideWindow[mid] === value) {
                slideWindow.splice(mid, 1);
                break;
            } else if (slideWindow[mid] < value) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return result;
};
