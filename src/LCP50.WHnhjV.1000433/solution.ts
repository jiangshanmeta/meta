function giveGem (gem: number[], operations: number[][]): number {
    for (const [from, to, ] of operations) {
        const half = gem[from] >>> 1;
        gem[from] -= half;
        gem[to] += half;
    }
    let max = -Infinity;
    let min = Infinity;
    for (const n of gem) {
        max = Math.max(max, n);
        min = Math.min(min, n);
    }
    return max - min;
}
