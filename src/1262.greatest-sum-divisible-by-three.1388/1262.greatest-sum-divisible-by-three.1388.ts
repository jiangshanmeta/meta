function maxSumDivThree(nums: number[]): number {
    const dp:number[] = [0,-Infinity,-Infinity];
    for(let i=0;i<nums.length;i++){
        const nDp = [0,0,0];
        const mod = nums[i]%3;
        for(let j=0;j<3;j++){
            nDp[(j+mod)%3] = dp[j]+nums[i];
        }
        for(let j=0;j<3;j++){
            dp[j] = Math.max(dp[j],nDp[j]);
        }
    }
    return dp[0]
};