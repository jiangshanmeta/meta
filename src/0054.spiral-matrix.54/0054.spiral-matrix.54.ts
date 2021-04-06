function spiralOrder (matrix: number[][]): number[] {
    const result:number[] = [];
    let rowL = 0;
    let rowH = matrix.length - 1;
    let colL = 0;
    let colH = matrix[0].length - 1;
    while (rowL <= rowH && colL <= colH) {
        for (let j = colL; j <= colH; j++) {
            result.push(matrix[rowL][j]);
        }
        for (let i = rowL + 1; i <= rowH; i++) {
            result.push(matrix[i][colH]);
        }
        if (rowL !== rowH) {
            for (let j = colH - 1; j >= colL; j--) {
                result.push(matrix[rowH][j]);
            }
        }
        if (colL !== colH) {
            for (let i = rowH - 1; i > rowL; i--) {
                result.push(matrix[i][colL]);
            }
        }
        rowL++;
        rowH--;
        colL++;
        colH--;
    }
    return result;
}
