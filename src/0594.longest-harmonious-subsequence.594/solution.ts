function findLHS (nums: number[]): number {
    const map = new Map<number, number>();
    for (const n of nums) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }

    let result = 0;
    for (const [num, count, ] of map) {
        if (map.has(num + 1)) {
            result = Math.max(result, count + map.get(num + 1));
        }
    }
    return result;
}
