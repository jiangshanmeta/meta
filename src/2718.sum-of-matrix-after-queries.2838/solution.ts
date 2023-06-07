function matrixSumQueries (n: number, queries: number[][]): number {
    const mapRow = new Map<number, number[]>();
    const mapCol = new Map<number, number[]>();
    for (let i = 0; i < queries.length; i++) {
        const item = queries[i];
        if (item[0] === 0) {
            mapRow.set(item[1], [...item, i, ]);
        } else {
            mapCol.set(item[1], [...item, i, ]);
        }
    }

    const rowValues = [...mapRow.values(), ].sort((a, b) => a[3] - b[3]);
    const colValues = [...mapCol.values(), ].sort((a, b) => a[3] - b[3]);
    let indexRow = 0;
    let indexCol = 0;
    let result = 0;
    let sum = colValues.reduce((acc, item) => acc + item[2], 0);

    while (indexRow < rowValues.length) {
        const rowData = rowValues[indexRow];
        const rowVal = rowData[2];
        while (indexCol < colValues.length && colValues[indexCol][3] < rowData[3]) {
            sum -= colValues[indexCol][2];
            indexCol++;
        }
        result += sum + (n - (colValues.length - indexCol)) * rowVal;
        indexRow++;
    }

    for (const colData of colValues) {
        const colVal = colData[2];
        result += (n - rowValues.length) * colVal;
    }

    return result;
}
