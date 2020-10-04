function rob(nums: number[]): number {
    if(nums.length === 0){
        return 0;
    }
    const dp:number[] = [];
    dp[0] = nums[0];
    if(nums.length>1){
        dp[1] = Math.max(nums[0],nums[1]);
    }
    for(let i=2;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i]);
    }

    return dp[nums.length-1]
};