/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    // 把所有的奇数对应的索引放这
    const indexs = [
        -1, ];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & 1) {
            indexs.push(i);
        }
    }
    indexs.push(nums.length);
    // 有点类似滑动窗口了
    let result = 0;
    for (let i = k; i < indexs.length - 1; i++) {
        const start = i + 1 - k;
        result += (indexs[start] - indexs[start - 1]) * (indexs[i + 1] - indexs[i]);
    }
    return result;
};
