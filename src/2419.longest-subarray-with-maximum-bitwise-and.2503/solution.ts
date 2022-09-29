function longestSubarray (nums: number[]): number {
    let maxNum = 0;
    let maxLength = 0;
    let index = 0;
    while (index < nums.length) {
        const num = nums[index++];
        if (num < maxNum) {
            continue;
        }
        let count = 1;
        while (index < nums.length && nums[index] === num) {
            count++;
            index++;
        }
        if (num > maxNum) {
            maxNum = num;
            maxLength = count;
        } else if (num === maxNum) {
            maxLength = Math.max(maxLength, count);
        }
    }
    return maxLength;
}
