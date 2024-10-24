function canMakeSquare (grid: string[][]): boolean {
    const N = grid.length;
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - 1; j++) {
            let cnt = 0;
            if (grid[i][j] === 'B') {
                cnt++;
            }
            if (grid[i + 1][j] === 'B') {
                cnt++;
            }
            if (grid[i][j + 1] === 'B') {
                cnt++;
            }
            if (grid[i + 1][j + 1] === 'B') {
                cnt++;
            }
            if (cnt !== 2) {
                return true;
            }
        }
    }
    return false;
}
