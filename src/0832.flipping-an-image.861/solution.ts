function flipAndInvertImage (A: number[][]): number[][] {
    const M = A.length;
    if (M === 0) {
        return A;
    }
    const N = A[0].length;
    if (N === 0) {
        return A;
    }
    for (let i = 0; i < M; i++) {
        let left = 0;
        let right = N - 1;
        while (left <= right) {
            const tmp = A[i][right] ^ 1;
            A[i][right--] = A[i][left] ^ 1;
            A[i][left++] = tmp;
        }
    }
    return A;
}
