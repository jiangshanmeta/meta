function sumOfFlooredPairs (nums: number[]): number {
    const MAX = Math.max(...nums);
    const counts = new Array<number>(MAX + 1).fill(0);
    for (const n of nums) {
        counts[n]++;
    }
    const prefixs = new Array<number>(counts.length + 1);
    prefixs[0] = 0;
    for (let i = 0; i < counts.length; i++) {
        prefixs[i + 1] = prefixs[i] + counts[i];
    }
    let res = 0;
    const MOD = 10 ** 9 + 7;

    for (let i = 1; i < counts.length; i++) {
        if (counts[i] === 0) {
            continue;
        }
        let l = i;
        let r = Math.min(counts.length, 2 * i);
        let f = 1;
        while (l < counts.length) {
            res = (res + counts[i] * (prefixs[r] - prefixs[l]) * f) % MOD;
            l = r;
            r = Math.min(r + i, counts.length);
            f++;
        }
    }
    return res;
}
