function minimumOperations (grid: number[][]): number {
    let result = 0;
    const M = grid.length;
    const N = grid[0].length;
    for (let j = 0; j < N; j++) {
        for (let i = 1; i < M; i++) {
            if (grid[i][j] <= grid[i - 1][j]) {
                result += grid[i - 1][j] + 1 - grid[i][j];
                grid[i][j] = grid[i - 1][j] + 1;
            }
        }
    }
    return result;
}
