function alternatingSubarray (nums: number[]): number {
    let result = -1;
    let index = 0;
    while (index + 1 < nums.length) {
        if (nums[index] + 1 !== nums[index + 1]) {
            index++;
            continue;
        }
        const start = index;
        index += 2;
        let diff = -1;
        while (index < nums.length && nums[index] - nums[index - 1] === diff) {
            index++;
            diff = -diff;
        }

        result = Math.max(result, index - start);
        if (nums[index] - nums[index - 1] === 1) {
            index--;
        }
    }
    return result;
}
