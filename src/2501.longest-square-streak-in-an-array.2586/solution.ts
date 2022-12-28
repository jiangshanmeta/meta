function longestSquareStreak (nums: number[]): number {
    nums.sort((a, b) => a - b);
    let result = -1;
    const all = new Set(nums);
    const visited = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        if (visited.has(nums[i])) {
            continue;
        }
        let base = nums[i] ** 2;
        let count = 1;
        while (all.has(base)) {
            count++;
            visited.add(base);
            base = base ** 2;
        }
        if (count > 1) {
            result = Math.max(count, result);
        }
    }
    return result;
}
