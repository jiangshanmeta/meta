function satisfiesConditions (grid: number[][]): boolean {
    const M = grid.length;
    const N = grid[0].length;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (i + 1 < M && grid[i + 1][j] !== grid[i][j]) {
                return false;
            }
            if (j + 1 < N && grid[i][j + 1] === grid[i][j]) {
                return false;
            }
        }
    }
    return true;
}
