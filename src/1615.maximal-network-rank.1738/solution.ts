function maximalNetworkRank (n: number, roads: number[][]): number {
    const counts = new Array<number>(n).fill(0);
    const set = new Set<number>();
    for (let [a, b, ] of roads) {
        if (a > b) {
            a ^= b;
            b ^= a;
            a ^= b;
        }
        counts[a]++;
        counts[b]++;
        set.add(n * a + b);
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let cur = counts[i] + counts[j];
            if (set.has(i * n + j)) {
                cur--;
            }
            res = Math.max(res, cur);
        }
    }
    return res;
}
