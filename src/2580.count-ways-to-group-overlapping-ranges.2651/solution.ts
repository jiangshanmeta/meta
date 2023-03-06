function countWays (ranges: number[][]): number {
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [ranges[0], ];
    for (let i = 1; i < ranges.length; i++) {
        const last = merged[merged.length - 1];
        const current = ranges[i];
        if (current[0] > last[1]) {
            merged.push(current);
        } else {
            last[1] = Math.max(last[1], current[1]);
        }
    }
    const mod = 10 ** 9 + 7;
    let result = 1;
    for (let i = 0; i < merged.length; i++) {
        result = (result * 2) % mod;
    }
    return result;
}
