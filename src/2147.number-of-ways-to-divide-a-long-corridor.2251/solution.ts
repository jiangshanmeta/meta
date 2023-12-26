function numberOfWays (corridor: string): number {
    const indexs:number[] = [];
    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') {
            indexs.push(i);
        }
    }
    if (indexs.length === 0 || indexs.length % 2 === 1) {
        return 0;
    }
    let res = 1;
    const MOD = 10 ** 9 + 7;
    for (let i = 1; i < indexs.length - 1; i += 2) {
        res = (res * (indexs[i + 1] - indexs[i])) % MOD;
    }
    return res;
}
