function gridGame (grid: number[][]): number {
    const N = grid[0].length;
    if (N === 1) {
        return 0;
    }
    let suffix = 0;
    for (let i = 1; i < N; i++) {
        suffix += grid[0][i];
    }
    let result = suffix;
    let prefix = grid[1][0];
    for (let j = 1; j < N; j++) {
        suffix -= grid[0][j];
        result = Math.min(result, Math.max(prefix, suffix));
        prefix += grid[1][j];
    }
    return result;
}
