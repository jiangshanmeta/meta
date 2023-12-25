function constructProductMatrix (grid: number[][]): number[][] {
    const M = grid.length;
    const N = grid[0].length;
    const pre = new Array<number[]>(M);
    const suf = new Array<number[]>(M);
    let acc = 1;
    const MOD = 12345;
    for (let i = 0; i < M; i++) {
        pre[i] = new Array<number>(N);
        for (let j = 0; j < N; j++) {
            pre[i][j] = acc;
            acc = (acc * grid[i][j]) % MOD;
        }
    }
    acc = 1;
    for (let i = M - 1; i > -1; i--) {
        suf[i] = new Array<number>(N);
        for (let j = N - 1; j > -1; j--) {
            suf[i][j] = acc * pre[i][j] % MOD;
            acc = (acc * grid[i][j]) % MOD;
        }
    }

    return suf;
}
