function longestString(x: number, y: number, z: number): number {
    return 2 * (z + Math.min(x, y) * 2 + (x === y ? 0 : 1))
};