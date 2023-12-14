function countCompleteSubarrays (nums: number[]): number {
    let result = 0;
    let left = 0;
    let right = 0;
    const D = new Set(nums).size;
    const map = new Map<number, number>();
    while (left < nums.length) {
        while (right < nums.length && map.size < D) {
            if (map.has(nums[right])) {
                map.set(nums[right], map.get(nums[right])! + 1);
            } else {
                map.set(nums[right], 1);
            }
            right++;
        }

        if (map.size === D) {
            result += nums.length - right + 1;
        } else {
            break;
        }
        const c = map.get(nums[left])!;
        if (c === 1) {
            map.delete(nums[left]);
        } else {
            map.set(nums[left], c - 1);
        }
        left++;
    }
    return result;
}
