function imageSmoother (M: number[][]): number[][] {
    const R = M.length;
    const C = M[0].length;
    const result:number[][] = new Array(R);
    for (let i = 0; i < R; i++) {
        result[i] = new Array(C);
        for (let j = 0; j < C; j++) {
            let sum = 0;
            let count = 0;
            for (let dx = -1; dx < 2; dx++) {
                const x = i + dx;
                if (x === -1 || x === R) {
                    continue;
                }
                for (let dy = -1; dy < 2; dy++) {
                    const y = j + dy;
                    if (y === -1 || y === C) {
                        continue;
                    }
                    sum += M[x][y];
                    count++;
                }
            }
            result[i][j] = Math.floor(sum / count);
        }
    }

    return result;
}
