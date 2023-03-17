function maxScore (nums: number[]): number {
    nums.sort((a, b) => b - a);
    let result = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > 0) {
            result++;
        } else {
            break;
        }
    }
    return result;
}
