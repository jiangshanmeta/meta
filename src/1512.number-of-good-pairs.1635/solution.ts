function numIdenticalPairs (nums: number[]): number {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])! + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    return [...map.values(), ].reduce((sum, item) => {
        return sum + item * (item - 1) / 2;
    }, 0);
}
