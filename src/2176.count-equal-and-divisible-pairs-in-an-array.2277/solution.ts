function countPairs (nums: number[], k: number): number {
    const map = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i])!.push(i);
    }
    let result = 0;
    for (const indexs of map.values()) {
        for (let i = 0; i < indexs.length - 1; i++) {
            for (let j = i + 1; j < indexs.length; j++) {
                if (indexs[i] * indexs[j] % k === 0) {
                    result++;
                }
            }
        }
    }
    return result;
}
