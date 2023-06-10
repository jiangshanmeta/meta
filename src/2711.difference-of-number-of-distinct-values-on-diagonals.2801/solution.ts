function differenceOfDistinctValues (grid: number[][]): number[][] {
    const M = grid.length;
    const N = grid[0].length;
    const result = new Array<number[]>(M);
    for (let i = 0; i < M; i++) {
        result[i] = new Array<number>(N);
    }

    function diagonal (i:number, j:number) {
        let x = i;
        let y = j;
        const set = new Set<number>();
        const map = new Map<number, number>();
        while (x < M && y < N) {
            const item = grid[x][y];
            if (map.has(item)) {
                map.set(item, map.get(item)! + 1);
            } else {
                map.set(item, 1);
            }

            x++;
            y++;
        }

        x = i;
        y = j;
        while (x < M && y < N) {
            const item = grid[x][y];
            const count = map.get(item)!;
            if (count > 1) {
                map.set(item, count - 1);
            } else {
                map.delete(item);
            }

            result[x][y] = Math.abs(set.size - map.size);
            set.add(item);
            x++;
            y++;
        }
    }

    for (let j = 0; j < N; j++) {
        diagonal(0, j);
    }
    for (let i = 1; i < M; i++) {
        diagonal(i, 0);
    }

    return result;
}
