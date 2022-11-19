function leastMinutes (n: number): number {
    return Math.ceil(Math.log2(n)) + 1;
}
