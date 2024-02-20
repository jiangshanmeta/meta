function maxOperations(nums: number[]): number {
    const S = nums[0] + nums[1];
    let result = 1;
    for (let i = 2; i < nums.length; i += 2) {
        if (i + 1 === nums.length) {
            break;
        }
        if (nums[i] + nums[i + 1] === S) {
            result++
        } else {
            break;
        }
    }
    return result
};