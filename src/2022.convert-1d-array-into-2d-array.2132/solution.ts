function construct2DArray (original: number[], m: number, n: number): number[][] {
    if (original.length !== m * n) {
        return [];
    }
    const result:number[][] = new Array(m);
    for (let i = 0; i < m; i++) {
        result[i] = new Array(n);
    }

    for (let i = 0; i < original.length; i++) {
        const y = i % n;
        const x = (i - y) / n;
        result[x][y] = original[i];
    }

    return result;
}
