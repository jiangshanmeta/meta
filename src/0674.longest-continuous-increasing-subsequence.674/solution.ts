function findLengthOfLCIS (nums: number[]): number {
    let result = 0;
    let index = 0;
    while (index < nums.length) {
        let count = 1;
        index++;
        while (index < nums.length && nums[index] > nums[index - 1]) {
            count++;
            index++;
        }
        result = Math.max(result, count);
    }
    return result;
}
