function countQuadruplets (nums: number[]): number {
    const map = new Map<number, number>();
    let result = 0;
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            const sum = nums[i] + nums[j];
            map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
        }
        for (let k = j + 2; k < nums.length; k++) {
            const diff = nums[k] - nums[j + 1];
            if (map.has(diff)) {
                result += map.get(diff);
            }
        }
    }
    return result;
}
