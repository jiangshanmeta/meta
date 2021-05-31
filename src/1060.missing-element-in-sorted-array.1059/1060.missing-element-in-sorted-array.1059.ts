function missingElement (nums: number[], k: number): number {
    for (let i = 1; i < nums.length; i++) {
        const contain = nums[i] - nums[i - 1] - 1;
        if (k > contain) {
            k -= contain;
            continue;
        }
        return nums[i - 1] + k;
    }
    return nums[nums.length - 1] + k;
}
