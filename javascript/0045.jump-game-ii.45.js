/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心实现
// 时间复杂度O(n)
var jump = function (nums) {
    // 到[left,right]区域内需要的最小步数是result
    let result = 0;
    let left = 0;
    let right = 0;
    while (right < nums.length - 1) {
        // 衍生出下一个区域
        let newRight = right;
        for (let i = left; i <= right; i++) {
            newRight = Math.max(newRight, i + nums[i]);
        }
        result++;
        // 其实需要判断right是否增加 但是题目中已经说了最后一个可到达 就直接更新left right了
        left = right + 1;
        right = newRight;
    }
    return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划实现
// 对于第i个节点 更新后面nums[i]个节点的路径长度
// 时间复杂度O(n^2)
var jump = function (nums) {
    const dp = new Array(nums.length).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        if (dp[i] === Infinity || nums[i] === 0) {
            continue;
        }
        for (let j = i + 1; j < Math.min(i + nums[i] + 1, nums.length); j++) {
            dp[j] = Math.min(dp[j], dp[i] + 1);
        }
    }

    return dp[nums.length - 1];
};
