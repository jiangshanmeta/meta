function sumOfUnique (nums: number[]): number {
    const map = new Map<number, number>();
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (map.get(nums[i])! === 1) {
                result -= nums[i];
                map.set(nums[i], 2);
            }
        } else {
            map.set(nums[i], 1);
            result += nums[i];
        }
    }
    return result;
}
