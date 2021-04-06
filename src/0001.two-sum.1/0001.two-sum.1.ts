function twoSum (nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [<number>map.get(target - nums[i]), i, ];
        }
        map.set(nums[i], i);
    }
    return [];
}
