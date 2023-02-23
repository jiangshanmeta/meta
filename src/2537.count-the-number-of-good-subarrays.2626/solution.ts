function countGood (nums: number[], k: number): number {
    let result = 0;
    const map = new Map<number, number>();
    let count = 0;
    let left = 0;
    let right = 0;
    while (left < nums.length) {
        while (right < nums.length && count < k) {
            const num = nums[right++];
            let prevCount = 0;
            if (map.has(num)) {
                prevCount = map.get(num)!;
                count += prevCount;
            }
            map.set(num, prevCount + 1);
        }
        if (count >= k) {
            result += nums.length - right + 1;
        }

        const currentCount = map.get(nums[left])!;
        map.set(nums[left++], currentCount - 1);
        count -= (currentCount - 1);
    }
    return result;
}
