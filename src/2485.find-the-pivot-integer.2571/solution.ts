function pivotInteger (n: number): number {
    let rest = n * (n + 1) / 2;
    let sum = 0;
    for (let x = 1; x <= n; x++) {
        sum += x;
        if (sum === rest) {
            return x;
        }
        rest -= x;
    }
    return -1;
}
