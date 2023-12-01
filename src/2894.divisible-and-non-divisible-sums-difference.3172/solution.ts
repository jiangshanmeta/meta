function differenceOfSums (n: number, m: number): number {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            result -= i;
        } else {
            result += i;
        }
    }
    return result;
}
