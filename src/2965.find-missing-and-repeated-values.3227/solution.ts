function findMissingAndRepeatedValues (grid: number[][]): number[] {
    let axorb = 0;
    const n = grid.length;
    for (let i = 1; i <= n * n; i++) {
        axorb ^= i;
    }

    const set = new Set<number>();
    let a = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (set.has(grid[i][j])) {
                a = grid[i][j];
            }
            axorb ^= grid[i][j];
            set.add(grid[i][j]);
        }
    }

    return [a, axorb ^ a, ];
}
