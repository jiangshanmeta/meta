function findChampion (grid: number[][]): number {
    const N = grid.length;
    for (let j = 0; j < N; j++) {
        let has = false;
        for (let i = 0; i < N; i++) {
            if (grid[i][j] === 1) {
                has = true;
                break;
            }
        }
        if (!has) {
            return j;
        }
    }
    return 0;
}
