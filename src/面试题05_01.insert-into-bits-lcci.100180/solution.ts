function insertBits (N: number, M: number, i: number, j: number): number {
    const mask = ~(((1 << (j - i + 1)) - 1) << i);
    return (mask & N) | (M << i);
}
