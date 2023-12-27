const MOD = BigInt(10 ** 9 + 7);

function countGoodNumbers (n: number): number {
    const H = Math.floor(n / 2);
    return Number(pow(5n, H + (n % 2 === 1 ? 1 : 0)) * pow(4n, H) % MOD);
}

function pow (base:bigint, n:number) {
    let res = 1n;
    while (n) {
        if (n % 2 === 1) {
            res = (res * base) % MOD;
        }
        base = (base * base) % MOD;
        n = Math.floor(n / 2);
    }
    return res;
}
