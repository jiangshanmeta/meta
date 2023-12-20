function circularPermutation (n: number, start: number): number[] {
    const result = new Array<number>(2 ** n);
    let index = -1;
    for (let i = 0; i < result.length; i++) {
        result[i] = (i >> 1) ^ i;
        if (result[i] === start) {
            index = i;
        }
    }
    return [...result.slice(index), ...result.slice(0, index), ];
}
