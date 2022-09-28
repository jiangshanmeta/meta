function divideArray (nums: number[]): boolean {
    const map = new Map<number, number>();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1);
        } else {
            map.set(num, 1);
        }
    }
    for (const item of map.values()) {
        if (item % 2 !== 0) {
            return false;
        }
    }
    return true;
}
