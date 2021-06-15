function findSwapValues (array1: number[], array2: number[]): number[] {
    const set = new Set<number>();
    let sum1 = 0;
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
        set.add(array1[i]);
    }
    let sum2 = 0;
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }
    const diff = (sum2 - sum1) / 2;
    for (let i = 0; i < array2.length; i++) {
        if (set.has(array2[i] - diff)) {
            return [
                array2[i] - diff,
                array2[i],
            ];
        }
    }

    return [];
}
