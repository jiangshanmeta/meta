function findMatrix (nums: number[]): number[][] {
    const map = new Map<number, number>();
    let maxCount = 0;
    for (const num of nums) {
        const count = map.has(num) ? map.get(num)! + 1 : 1;
        maxCount = Math.max(maxCount, count);
        map.set(num, count);
    }
    const result:number[][] = [];
    const keys = [...map.keys(), ];

    while (maxCount > 0) {
        const row:number[] = [];
        for (const key of keys) {
            const count = map.get(key)!;
            if (count === 0) {
                continue;
            }
            row.push(key);
            map.set(key, count - 1);
        }
        result.push(row);
        maxCount--;
    }

    return result;
}
