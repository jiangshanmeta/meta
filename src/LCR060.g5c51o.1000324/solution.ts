function topKFrequent (nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (const n of nums) {
        if (map.has(n)) {
            map.set(n, map.get(n)! + 1);
        } else {
            map.set(n, 1);
        }
    }
    return [...map, ].sort((a, b) => b[1] - a[1]).map(item => item[0]).slice(0, k);
}
