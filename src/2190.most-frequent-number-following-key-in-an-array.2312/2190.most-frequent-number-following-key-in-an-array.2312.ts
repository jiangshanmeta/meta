function mostFrequent (nums: number[], key: number): number {
    const countMap = new Map<number, number>();
    let result = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== key) {
            continue;
        }
        if (countMap.has(nums[i + 1])) {
            countMap.set(nums[i + 1], countMap.get(nums[i + 1])! + 1);
        } else {
            countMap.set(nums[i + 1], 1);
        }
        const count = countMap.get(nums[i + 1])!;
        if (count > maxCount) {
            result = nums[i + 1];
            maxCount = count;
        }
    }
    return result;
}
