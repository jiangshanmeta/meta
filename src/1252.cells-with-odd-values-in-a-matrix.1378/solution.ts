function oddCells (m: number, n: number, indices: number[][]): number {
    const rows = new Array<number>(m).fill(0);
    const cols = new Array<number>(n).fill(0);
    for (const [x, y, ] of indices) {
        rows[x] ^= 1;
        cols[y] ^= 1;
    }
    const oddR = rows.reduce((sum, item) => sum + item, 0);
    const oddC = cols.reduce((sum, item) => sum + item, 0);

    return oddR * (n - oddC) + oddC * (m - oddR);
}
