function checkValidGrid (grid: number[][]): boolean {
    let x = 0;
    let y = 0;
    const N = grid.length;
    const MAX = N * N;
    let current = 1;
    while (current < MAX) {
        const deltas = [
            [2, 1, ],
            [2, -1, ],
            [-2, 1, ],
            [-2, -1, ],
            [1, 2, ],
            [1, -2, ],
            [-1, 2, ],
            [-1, -2, ],
        ];
        let found = false;
        for (const [dx, dy, ] of deltas) {
            const nx = x + dx;
            if (nx < 0 || nx >= N) {
                continue;
            }
            const ny = y + dy;
            if (ny < 0 || ny >= N) {
                continue;
            }
            if (grid[nx][ny] === current) {
                found = true;
                x = nx;
                y = ny;
                break;
            }
        }
        if (!found) {
            return false;
        }
        current++;
    }
    return true;
}
