/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    if(jobDifficulty.length<d){
        return -1;
    }
    const rangeMax = new Array(jobDifficulty.length);
    for(let i=0;i<rangeMax.length;i++){
        rangeMax[i] = new Array(jobDifficulty.length);
        rangeMax[i][i] = jobDifficulty[i];
        for(let j=i+1;j<jobDifficulty.length;j++){
            rangeMax[i][j] = Math.max(rangeMax[i][j-1],jobDifficulty[j]);
        }
    }
    // dp[i][j] 分为i+1组 jobDifficulty[0...j]范围内 最小难度和
    // 时间复杂度O(dN^2)
    const dp = new Array(d);
    dp[0] = rangeMax[0].slice(0);
    for(let i=1;i<d;i++){
        dp[i] = new Array(jobDifficulty.length).fill(Infinity);
        for(let j=i;j<jobDifficulty.length;j++){
            for(let k=i-1;k<j;k++){
                dp[i][j] = Math.min(dp[i][j],dp[i-1][k]+rangeMax[k+1][j]);
            }
        }
    }

    return dp[d-1][jobDifficulty.length-1]
};