function minimumSum (n: number, k: number): number {
    const h = k >> 1;
    if (h >= n) {
        return (1 + n) * n / 2;
    }
    const c = n - h;
    return (1 + h) * h / 2 + c * (k + k + c - 1) / 2;
}
