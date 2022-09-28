function minDeletionSize (A: string[]): number {
    const M = A.length;
    const N = A[0].length;
    let result = 0;
    for (let j = 0; j < N; j++) {
        for (let i = 1; i < M; i++) {
            if (A[i][j] < A[i - 1][j]) {
                result++;
                break;
            }
        }
    }
    return result;
}
