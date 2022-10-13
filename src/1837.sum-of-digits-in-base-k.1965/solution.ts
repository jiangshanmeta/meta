function sumBase (n: number, k: number): number {
    let result = 0;
    while (n > 0) {
        const m = n % k;
        result += m;
        n = (n - m) / k;
    }
    return result;
}
