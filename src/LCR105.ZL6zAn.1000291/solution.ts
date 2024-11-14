function maxAreaOfIsland (grid: number[][]): number {
    const M = grid.length;
    const N = grid[0].length;

    const backTracking = (x:number, y:number) => {
        if (x < 0 || y < 0 || x === M || y === N || grid[x][y] === 0) {
            return 0;
        }
        grid[x][y] = 0;

        return 1 + backTracking(x - 1, y) + backTracking(x + 1, y) + backTracking(x, y - 1) + backTracking(x, y + 1);
    };

    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j]) {
                result = Math.max(result, backTracking(i, j));
            }
        }
    }
    return result;
}
