function getRow (rowIndex: number): number[] {
    const result:number[] = new Array(rowIndex + 1).fill(1);
    for (let i = 2; i < rowIndex + 1; i++) {
        for (let j = i - 1; j > 0; j--) {
            result[j] += result[j - 1];
        }
    }
    return result;
}
