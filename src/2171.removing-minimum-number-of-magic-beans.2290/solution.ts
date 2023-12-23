function minimumRemoval (beans: number[]): number {
    beans.sort((a, b) => a - b);
    let sum = beans.reduce((acc, item) => acc + item, 0);
    let result = sum;
    let acc = 0;
    for (let i = 0; i < beans.length; i++) {
        sum -= beans[i];
        result = Math.min(result, acc + sum - beans[i] * (beans.length - i - 1));
        acc += beans[i];
    }

    return result;
}
