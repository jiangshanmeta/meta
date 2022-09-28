function numEnclaves (A: number[][]): number {
    const M = A.length;
    if (M === 0) {
        return 0;
    }
    const N = A[0].length;
    function dfs (x:number, y:number) {
        if (x < 0 || y < 0 || x === M || y === N || A[x][y] === 0) {
            return;
        }
        A[x][y] = 0;
        dfs(x - 1, y);
        dfs(x + 1, y);
        dfs(x, y - 1);
        dfs(x, y + 1);
    }
    for (let j = 0; j < N; j++) {
        dfs(0, j);
        dfs(M - 1, j);
    }
    for (let i = 1; i < M - 1; i++) {
        dfs(i, 0);
        dfs(i, N - 1);
    }
    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (A[i][j] === 1) {
                result++;
            }
        }
    }
    return result;
}
