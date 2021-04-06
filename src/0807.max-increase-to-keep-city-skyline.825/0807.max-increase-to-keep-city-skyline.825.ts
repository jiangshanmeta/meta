function maxIncreaseKeepingSkyline (grid: number[][]): number {
    const M = grid.length;
    const N = grid[0].length;
    const horizontal:number[] = new Array(N).fill(0);
    const vertical:number[] = new Array(M).fill(0);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            horizontal[j] = Math.max(horizontal[j], grid[i][j]);
            vertical[i] = Math.max(vertical[i], grid[i][j]);
        }
    }
    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            result += Math.min(horizontal[j], vertical[i]) - grid[i][j];
        }
    }

    return result;
}
