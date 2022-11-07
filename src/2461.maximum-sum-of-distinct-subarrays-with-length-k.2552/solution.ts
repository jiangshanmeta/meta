function maximumSubarraySum (nums: number[], k: number): number {
    let result = 0;
    const set = new Set<number>();
    const map = new Map<number, number>();
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const lastIndex = map.get(nums[i]);
            let index = i - set.size;
            while (index <= lastIndex) {
                set.delete(nums[index]);
                map.delete(nums[index]);
                sum -= nums[index];
                index++;
            }
        }
        set.add(nums[i]);
        map.set(nums[i], i);
        sum += nums[i];

        if (set.size === k) {
            result = Math.max(result, sum);
            sum -= nums[i - k + 1];
            set.delete(nums[i - k + 1]);
            map.delete(nums[i - k + 1]);
        }
    }
    return result;
}
