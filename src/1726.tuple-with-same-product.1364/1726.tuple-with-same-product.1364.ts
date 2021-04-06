function tupleSameProduct (nums: number[]): number {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const multi = nums[i] * nums[j];
            if (map.has(multi)) {
                map.set(multi, map.get(multi)! + 1);
            } else {
                map.set(multi, 1);
            }
        }
    }
    return [...map.values(), ].reduce((sum, count) => {
        return sum + count * (count - 1) / 2;
    }, 0) * 8;
}
