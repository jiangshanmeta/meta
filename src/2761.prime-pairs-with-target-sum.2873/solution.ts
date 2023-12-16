function findPrimePairs (n: number): number[][] {
    const flags = new Array<boolean>(n + 1).fill(true);
    const primes:number[] = [];
    for (let i = 2; i < flags.length; i++) {
        if (!flags[i]) {
            continue;
        }
        primes.push(i);
        for (let j = i * 2; j < flags.length; j += i) {
            flags[j] = false;
        }
    }
    const set = new Set(primes);

    const result:number[][] = [];
    for (let i = 2; i <= n / 2; i++) {
        if (set.has(i) && set.has(n - i)) {
            result.push([i, n - i, ]);
        }
    }
    return result;
}
