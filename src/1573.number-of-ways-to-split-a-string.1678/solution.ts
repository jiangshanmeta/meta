function numWays (s: string): number {
    const MOD = 10 ** 9 + 7;
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            c++;
        }
    }
    if (c % 3 !== 0) {
        return 0;
    }
    if (c === 0) {
        const n = s.length;
        return ((n - 2) * (n - 1) / 2) % MOD;
    }
    c /= 3;
    let index = 0;
    let c1 = 0;
    while (c1 < c) {
        if (s[index] === '1') {
            c1++;
        }
        index++;
    }
    let z1 = 0;
    while (index < s.length && s[index] === '0') {
        z1++;
        index++;
    }
    c1 = 0;
    while (c1 < c) {
        if (s[index] === '1') {
            c1++;
        }
        index++;
    }
    let z2 = 0;
    while (index < s.length && s[index] === '0') {
        z2++;
        index++;
    }

    return (z1 + 1) * (z2 + 1) % MOD;
}
