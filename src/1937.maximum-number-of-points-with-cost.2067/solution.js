/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    const M = points.length;
    const N = points[0].length;
    let dp = points[0];
    for (let i = 1; i < M; i++) {
        const nDp = new Array(N);
        let prevMax = -Infinity;
        for (let j = 0; j < N; j++) {
            const val = Math.max(prevMax, dp[j]);
            nDp[j] = val;
            prevMax = val - 1;
        }
        let nextMax = -Infinity;
        for (let j = N - 1; j > -1; j--) {
            const val = Math.max(nextMax, dp[j]);
            nDp[j] = Math.max(nDp[j], val) + points[i][j];
            nextMax = val - 1;
        }
        dp = nDp;
    }
    return Math.max(...dp);
};
