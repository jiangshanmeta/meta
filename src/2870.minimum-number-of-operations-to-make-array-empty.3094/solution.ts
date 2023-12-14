function minOperations (nums: number[]): number {
    const map = new Map<number, number>();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1);
        } else {
            map.set(num, 1);
        }
    }
    let r = 0;
    for (const c of map.values()) {
        if (c === 1) {
            return -1;
        }
        r += Math.ceil(c / 3);
    }
    return r;
}
