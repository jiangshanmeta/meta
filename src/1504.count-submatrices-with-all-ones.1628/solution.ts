function numSubmat (mat: number[][]): number {
    const M = mat.length;
    const N = mat[0].length;
    const cols = new Array<number>(N).fill(0);
    let result = 0;
    for (let i = 0; i < M; i++) {
        let left = 0;
        for (let j = 0; j < N; j++) {
            if (mat[i][j] === 0) {
                left = 0;
                cols[j] = 0;
            } else {
                cols[j]++;
                let max = cols[j];
                for (let k = j; k >= j - left; k--) {
                    max = Math.min(max, cols[k]);
                    result += max;
                }
                left++;
            }
        }
    }
    return result;
}
