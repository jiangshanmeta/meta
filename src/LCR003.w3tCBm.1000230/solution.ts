function countBits (n: number): number[] {
    const results:number[] = new Array(n + 1);
    results[0] = 0;
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i >> 1] + (i & 1);
    }
    return results;
}
