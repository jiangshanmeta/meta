function maxMatrixSum(matrix: number[][]): number {
    const N = matrix.length;
    let result = 0;
    const negatives: number[] = [];
    let hasZero = false;
    let minPositive = 10 ** 5 + 1;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === 0) {
                hasZero = true;
                continue;
            }
            if (matrix[i][j] > 0) {
                result += matrix[i][j]
                minPositive = Math.min(minPositive, matrix[i][j])
            } else {
                negatives.push(matrix[i][j]);
            }
        }
    }
    if (hasZero || negatives.length % 2 === 0) {
        for (let i = 0; i < negatives.length; i++) {
            result -= negatives[i];
        }
        return result
    }
    negatives.sort((a, b) => b - a);
    if (-negatives[0] > minPositive) {
        result = result - 2 * minPositive - negatives[0];

    } else {
        result += negatives[0];

    }


    for (let i = 1; i < negatives.length; i++) {
        result -= negatives[i]
    }
    return result
};