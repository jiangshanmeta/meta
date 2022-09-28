function numSpecial (mat: number[][]): number {
    const M:number = mat.length;
    if (M === 0) {
        return 0;
    }
    const N:number = mat[0].length;
    const vertical:number[] = new Array(M).fill(0);
    const horizontal:number[] = new Array(N).fill(0);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (mat[i][j] === 1) {
                vertical[i]++;
                horizontal[j]++;
            }
        }
    }
    let result = 0;
    for (let i = 0; i < M; i++) {
        if (vertical[i] !== 1) {
            continue;
        }
        for (let j = 0; j < N; j++) {
            if (mat[i][j] === 1 && horizontal[j] === 1) {
                result++;
            }
        }
    }
    return result;
}
