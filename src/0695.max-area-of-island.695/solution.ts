function maxAreaOfIsland (grid: number[][]): number {
    const M = grid.length;
    if (M === 0) {
        return 0;
    }
    const N = grid[0].length;
    function dfs (x:number, y:number):number {
        if (x < 0 || x === M || y < 0 || y === N || grid[x][y] === 0) {
            return 0;
        }
        grid[x][y] = 0;

        return 1 + dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1);
    }
    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 0) {
                continue;
            }
            result = Math.max(result, dfs(i, j));
        }
    }

    return result;
}
