function numberOfCuts (n: number): number {
    if (n > 1 && n % 2 === 1) {
        return n;
    }
    return n >> 1;
}
