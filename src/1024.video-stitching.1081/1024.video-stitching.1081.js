/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
// 动态规划
var videoStitching = function (clips, T) {
    // 按照开始时间从小到大排序
    clips.sort((a, b) => a[0] - b[0]);
    // 最小的开始时间必须为0
    if (clips[0][0] > 0) {
        return -1;
    }
    if (T === 0) {
        return 1;
    }
    const dp = new Array(T + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < clips.length; i++) {
        const [
            start, end, ] = clips[i];
        if (dp[start] === Infinity) {
            break;
        }
        // 更新(start,end]所需要的最长时间
        for (let j = start + 1; j < end + 1; j++) {
            dp[j] = Math.min(dp[j], dp[start] + 1);
        }
    }

    return dp[T] === Infinity ? -1 : dp[T];
};
