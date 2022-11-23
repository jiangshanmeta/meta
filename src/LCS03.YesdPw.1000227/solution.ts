function largestArea (grid: string[]): number {
    const M = grid.length;
    const N = grid[0].length;
    const visited = new Array<boolean[]>(M);
    for (let i = 0; i < M; i++) {
        visited[i] = new Array<boolean>(N).fill(false);
    }
    let result = 0;

    let isValid = true;
    let count = 0;
    const dfs = (x:number, y:number, id:string) => {
        if (x === -1 || y === -1 || x === M || y === N || grid[x][y] === '0') {
            isValid = false;
            return;
        }
        if (visited[x][y] || grid[x][y] !== id) {
            return;
        }
        visited[x][y] = true;
        count++;
        dfs(x + 1, y, id);
        dfs(x - 1, y, id);
        dfs(x, y - 1, id);
        dfs(x, y + 1, id);
    };

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === '0' || visited[i][j]) {
                continue;
            }
            isValid = true;
            count = 0;
            dfs(i, j, grid[i][j]);
            if (isValid) {
                result = Math.max(result, count);
            }
        }
    }

    return result;
}
