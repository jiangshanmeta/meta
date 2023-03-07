function findFarmland (land: number[][]): number[][] {
    const result:number[][] = [];
    let i = 0;
    while (i < land.length) {
        let j = 0;
        while (j < land[0].length) {
            if (land[i][j] === 0) {
                j++;
                continue;
            }
            let m = j + 1;
            while (m < land[0].length && land[i][m] === 1) {
                m++;
            }
            m--;
            let n = i + 1;
            while (n < land.length && land[n][m] === 1) {
                n++;
            }
            n--;
            result.push([i, j, n, m, ]);
            for (let p = i; p <= n; p++) {
                for (let q = j; q <= m; q++) {
                    land[p][q] = 0;
                }
            }
            j = m + 1;
        }
        i++;
    }
    return result;
}
