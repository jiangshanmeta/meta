function findMaxFish (grid: number[][]): number {
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            result = Math.max(result, dfs(grid, i, j));
        }
    }
    return result;
}

function dfs (grid:number[][], x:number, y:number): number {
    if (x < 0 || y < 0 || x === grid.length || y === grid[0].length || grid[x][y] === 0) {
        return 0;
    }
    const result = grid[x][y];
    grid[x][y] = 0;
    return result + dfs(grid, x - 1, y) + dfs(grid, x + 1, y) + dfs(grid, x, y - 1) + dfs(grid, x, y + 1);
}
