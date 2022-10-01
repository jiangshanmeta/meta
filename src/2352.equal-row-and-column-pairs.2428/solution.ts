function equalPairs (grid: number[][]): number {
    const N = grid.length;
    const rowMap = new Map<string, number>();

    for (let i = 0; i < N; i++) {
        const row:number[] = [];
        for (let j = 0; j < N; j++) {
            row.push(grid[i][j]);
        }
        const key = row.join(',');
        if (rowMap.has(key)) {
            rowMap.set(key, rowMap.get(key) + 1);
        } else {
            rowMap.set(key, 1);
        }
    }
    let result = 0;
    for (let j = 0; j < N; j++) {
        const col:number[] = [];
        for (let i = 0; i < N; i++) {
            col.push(grid[i][j]);
        }
        const key = col.join(',');
        if (!rowMap.has(key)) {
            continue;
        }
        result += rowMap.get(key);
    }

    return result;
}
