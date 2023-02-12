function rangeAddQueries (n: number, queries: number[][]): number[][] {
    const diffs = new Array<number[]>(n);
    for (let i = 0; i < n; i++) {
        diffs[i] = new Array<number>(n).fill(0);
    }
    for (const [row1, col1, row2, col2, ] of queries) {
        for (let i = row1; i <= row2; i++) {
            diffs[i][col1]++;
            if (col2 + 1 < n) {
                diffs[i][col2 + 1]--;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            diffs[i][j] += diffs[i][j - 1];
        }
    }

    return diffs;
}
