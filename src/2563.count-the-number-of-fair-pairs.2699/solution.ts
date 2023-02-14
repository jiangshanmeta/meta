function countFairPairs (nums: number[], lower: number, upper: number): number {
    let result = 0;
    nums.sort((a, b) => a - b);
    let left = nums.length - 1;
    let right = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        if (right <= i) {
            break;
        }
        left = Math.max(left, i);

        while (right > i && nums[i] + nums[right] > upper) {
            right--;
        }
        while (left > i && nums[i] + nums[left] >= lower) {
            left--;
        }

        result += right - left;
    }

    return result;
}
