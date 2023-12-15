function maxMoves (grid: number[][]): number {
    const M = grid.length;
    const N = grid[0].length;
    let result = 0;
    let cols = new Array<number>(M).fill(0);

    for (let j = 1; j < N; j++) {
        const ncols = new Array<number>(M);
        for (let i = 0; i < M; i++) {
            let current = 0;
            if (grid[i][j] > grid[i][j - 1] && (j === 1 || cols[i] > 0)) {
                current = cols[i] + 1;
            }

            if (i > 0 && grid[i][j] > grid[i - 1][j - 1] && (j === 1 || cols[i - 1] > 0)) {
                current = Math.max(current, cols[i - 1] + 1);
            }
            if (i + 1 < M && grid[i][j] > grid[i + 1][j - 1] && (j === 1 || cols[i + 1] > 0)) {
                current = Math.max(current, cols[i + 1] + 1);
            }
            ncols[i] = current;
            result = Math.max(result, current);
        }

        cols = ncols;
    }
    return result;
}
