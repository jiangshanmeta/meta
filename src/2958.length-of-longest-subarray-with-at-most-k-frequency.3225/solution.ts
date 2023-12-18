function maxSubarrayLength (nums: number[], k: number): number {
    let result = 0;
    let left = 0;
    let right = 0;
    const map = new Map<number, number>();
    while (left < nums.length) {
        while (right < nums.length) {
            const c = map.has(nums[right]) ? map.get(nums[right])! : 0;
            if (c === k) {
                break;
            }
            map.set(nums[right], c + 1);
            right++;
        }
        result = Math.max(result, right - left);
        if (right === nums.length) {
            break;
        }
        map.set(nums[left], map.get(nums[left])! - 1);
        left++;
    }
    return result;
}
