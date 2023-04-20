function rowAndMaximumOnes (mat: number[][]): number[] {
    let index = -1;
    let count = -1;
    for (let i = 0; i < mat.length; i++) {
        let c = 0;
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                c++;
            }
        }
        if (c > count) {
            index = i;
            count = c;
        }
    }

    return [index, count, ];
}
