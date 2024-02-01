function maxNonOverlapping (nums: number[], target: number): number {
    const map = new Map<number, number>();
    map.set(0, -1);
    let lastIndex = -2;
    let sum = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - target)) {
            const prevIndex = map.get(sum - target)! + 1;
            if (prevIndex > lastIndex) {
                result++;
                lastIndex = i;
            }
        }
        map.set(sum, i);
    }
    return result;
}
