function minimumPossibleSum (n: number, target: number): number {
    const MOD = 10 ** 9 + 7;
    const H = target >> 1;
    if (H >= n) {
        return (n * (n + 1) / 2) % MOD;
    }
    n -= H;
    const bigH = BigInt(H);
    const bigTarget = BigInt(target);
    const bigN = BigInt(n);
    return Number(((bigH + 1n) * bigH / 2n + bigN * bigTarget + (bigN - 1n) * bigN / 2n) % BigInt(MOD));
}
