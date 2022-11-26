function unequalTriplets (nums: number[]): number {
    let result = 0;
    nums.sort((a, b) => a - b);
    let index = 0;
    while (index < nums.length) {
        const left = index;
        const num = nums[index++];
        while (index < nums.length && nums[index] === num) {
            index++;
        }
        const mid = index - left;
        result += left * mid * (nums.length - left - mid);
    }
    return result;
}
