function findColumnWidth (grid: number[][]): number[] {
    const M = grid.length;
    const N = grid[0].length;
    const result = new Array<number>(N);
    for (let j = 0; j < N; j++) {
        let item = 0;
        for (let i = 0; i < M; i++) {
            item = Math.max(item, String(grid[i][j]).length);
        }
        result[j] = item;
    }
    return result;
}
