function minLengthAfterRemovals(nums: number[]): number {
    let max = 0;
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const num = map.has(nums[i]) ? map.get(nums[i])! + 1 : 1;
        max = Math.max(max, num);
        map.set(nums[i], num)
    }
    if (max >= nums.length - max) {
        return max - (nums.length - max);
    }
    return nums.length % 2;
};