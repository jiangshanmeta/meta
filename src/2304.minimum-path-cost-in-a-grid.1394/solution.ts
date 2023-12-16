function minPathCost (grid: number[][], moveCost: number[][]): number {
    let row = [...grid[0], ];
    const M = grid.length;
    const N = grid[0].length;
    for (let i = 1; i < M; i++) {
        const nrow = new Array<number>(N);
        for (let j = 0; j < N; j++) {
            let res = Infinity;
            for (let k = 0; k < N; k++) {
                res = Math.min(res, row[k] + moveCost[grid[i - 1][k]][j]);
            }
            res += grid[i][j];
            nrow[j] = res;
        }
        row = nrow;
    }
    return Math.min(...row);
}
