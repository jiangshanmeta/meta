// nums[i] - i != nums[j] - j
// 以此作为聚合的key
function countBadPairs (nums: number[]): number {
    const L = nums.length;
    let result = 0;
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i] - i;
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    for (const n of map.values()) {
        result += n * (L - n);
    }

    return result / 2;
}
