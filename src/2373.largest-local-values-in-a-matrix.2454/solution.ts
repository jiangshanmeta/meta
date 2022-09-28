function largestLocal (grid: number[][]): number[][] {
    const M = grid.length;
    const N = grid[0].length;
    const result = new Array<number[]>(M - 2);
    const calcMax = (x:number, y:number) => {
        let res = grid[x][y];
        for (let dx = -1; dx < 2; dx++) {
            for (let dy = -1; dy < 2; dy++) {
                res = Math.max(res, grid[x + dx][y + dy]);
            }
        }
        return res;
    };

    for (let i = 1; i < M - 1; i++) {
        result[i - 1] = new Array(N - 2);
        for (let j = 1; j < N - 1; j++) {
            result[i - 1][j - 1] = calcMax(i, j);
        }
    }
    return result;
}
