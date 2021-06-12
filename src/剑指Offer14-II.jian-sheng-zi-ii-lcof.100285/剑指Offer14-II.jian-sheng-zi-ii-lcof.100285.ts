function cuttingRope (n: number): number {
    if (n < 4) {
        return n - 1;
    }
    let result = 1;
    while (n > 4) {
        result = result * 3 % 1000000007;
        n -= 3;
    }
    return result * n % 1000000007;
}
