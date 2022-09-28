function xorOperation (n: number, start: number): number {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result ^= start;
        start += 2;
    }
    return result;
}
