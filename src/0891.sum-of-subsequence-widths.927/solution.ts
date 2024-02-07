function sumSubseqWidths(nums: number[]): number {
    const MOD = 10**9+7;
    nums.sort((a,b)=>a-b);
    let prefix1 = 0;
    let prefix2 = 0;
    let result = 0;
    for(let i=1;i<nums.length;i++){
        prefix1 = (prefix1*2+1)%MOD;
        result = (result+prefix1*nums[i])%MOD;
        prefix2 = (prefix2*2+nums[i-1])%MOD;
        result = (result-prefix2)%MOD
    }
    return (result+MOD)%MOD;
};