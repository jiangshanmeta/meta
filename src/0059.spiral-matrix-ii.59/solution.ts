function generateMatrix (n: number): number[][] {
    const result:number[][] = [];
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n);
    }
    let count = 1;
    for (let k = 0; k < (n >> 1); k++) {
        const H = n - k - 1;
        for (let j = k; j <= H; j++) {
            result[k][j] = count++;
        }
        for (let i = k + 1; i <= H; i++) {
            result[i][H] = count++;
        }

        for (let j = H - 1; j >= k; j--) {
            result[H][j] = count++;
        }

        for (let i = H - 1; i > k; i--) {
            result[i][k] = count++;
        }
    }

    if (n & 1) {
        const center = n >> 1;
        result[center][center] = count;
    }

    return result;
}
