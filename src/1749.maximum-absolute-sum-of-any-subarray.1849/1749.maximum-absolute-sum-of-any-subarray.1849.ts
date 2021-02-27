function maxAbsoluteSum(nums: number[]): number {
    let result = Math.abs(nums[0]);
    let prevMax = nums[0];
    let prevMin = nums[0];
    for(let i=1;i<nums.length;i++){
        prevMax = Math.max(0,prevMax)+nums[i];
        prevMin = Math.min(0,prevMin)+nums[i];
        result = Math.max(result,Math.abs(prevMax),Math.abs(prevMin))
    }
    return result;
};