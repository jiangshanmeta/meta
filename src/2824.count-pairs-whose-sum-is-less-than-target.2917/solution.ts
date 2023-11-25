function countPairs (nums: number[], target: number): number {
    let result = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        const max = target - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        let index = i;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < max) {
                index = Math.max(mid, index);
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        result += index - i;
    }
    return result;
}
