function maxProduct(nums: number[]): number {
    let result = nums[0];
    let max = nums[0];
    let min = nums[0];
    for(let i=1;i<nums.length;i++){
        let a = max*nums[i];
        let b = min*nums[i];
        result = Math.max(
            a,
            b,
            nums[i],
            result
        );
        max = Math.max(a,b,nums[i]);
        min = Math.min(a,b,nums[i]);
    }
    return result;
};