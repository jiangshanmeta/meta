function areSimilar (mat: number[][], k: number): boolean {
    const M = mat.length;
    const N = mat[0].length;
    k %= N;
    if (k === 0) {
        return true;
    }
    const newMat = new Array<number[]>(M);
    for (let i = 1; i < M; i += 2) {
        newMat[i] = [...mat[i].slice(N - k), ...mat[i].slice(0, N - k), ];
    }
    for (let i = 0; i < M; i += 2) {
        newMat[i] = [...mat[i].slice(k), ...mat[i].slice(0, k), ];
    }
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (mat[i][j] !== newMat[i][j]) {
                return false;
            }
        }
    }
    return true;
}
