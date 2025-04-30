function zigzagTraversal (grid: number[][]): number[] {
    const result:number[] = [];
    const M = grid.length;
    const N = grid[0].length;
    const J = N % 2 === 0 ? N - 1 : N - 2;
    for (let i = 0; i < M; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < N; j += 2) {
                result.push(grid[i][j]);
            }
        } else {
            for (let j = J; j > -1; j -= 2) {
                result.push(grid[i][j]);
            }
        }
    }

    return result;
}
