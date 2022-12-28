function deleteGreatestValue (grid: number[][]): number {
    for (const row of grid) {
        row.sort((a, b) => a - b);
    }
    let result = 0;
    const M = grid.length;
    const N = grid[0].length;
    for (let j = 0; j < N; j++) {
        let max = 0;
        for (let i = 0; i < M; i++) {
            max = Math.max(max, grid[i][j]);
        }
        result += max;
    }

    return result;
}
