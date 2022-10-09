function islandPerimeter (grid: number[][]): number {
    const dxs = [0, 0, 1, -1, ];
    const dys = [1, -1, 0, 0, ];
    let result = 0;
    const M = grid.length;
    const N = grid[0].length;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 0) {
                continue;
            }
            for (let k = 0; k < 4; k++) {
                const tx = i + dxs[k];
                const ty = j + dys[k];
                if (tx < 0 || tx === M || ty < 0 || ty === N) {
                    result++;
                    continue;
                }
                if (grid[tx][ty] === 0) {
                    result++;
                }
            }
        }
    }
    return result;
}
