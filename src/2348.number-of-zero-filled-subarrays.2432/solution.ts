function zeroFilledSubarray (nums: number[]): number {
    let result = 0;
    let index = 0;
    while (index < nums.length) {
        if (nums[index++] !== 0) {
            continue;
        }
        let n = 1;
        while (index < nums.length && nums[index++] === 0) {
            n++;
        }
        result += (n + 1) * n / 2;
    }
    return result;
}
