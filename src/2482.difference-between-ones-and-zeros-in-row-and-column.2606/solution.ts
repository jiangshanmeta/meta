
function onesMinusZeros (grid: number[][]): number[][] {
    const M = grid.length;
    const N = grid[0].length;
    const rows0 = new Array<number>(M).fill(0);
    const cols0 = new Array<number>(N).fill(0);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 0) {
                rows0[i]++;
                cols0[j]++;
            }
        }
    }

    const result:number[][] = new Array(M);
    for (let i = 0; i < M; i++) {
        const row = new Array<number>(N);
        for (let j = 0; j < N; j++) {
            row[j] = N - rows0[i] * 2 + M - cols0[j] * 2;
        }
        result[i] = row;
    }

    return result;
}
