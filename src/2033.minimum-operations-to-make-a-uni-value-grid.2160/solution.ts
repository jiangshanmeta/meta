function minOperations (grid: number[][], x: number): number {
    const rest = grid[0][0] % x;
    const M = grid.length;
    const N = grid[0].length;
    const seq:number[] = [];
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] % x !== rest) {
                return -1;
            }
            seq.push(grid[i][j]);
        }
    }
    seq.sort((a, b) => a - b);
    let res = 0;
    const t = seq[seq.length >> 1];
    for (let i = 0; i < seq.length; i++) {
        res += Math.abs(seq[i] - t) / x;
    }
    return res;
}
