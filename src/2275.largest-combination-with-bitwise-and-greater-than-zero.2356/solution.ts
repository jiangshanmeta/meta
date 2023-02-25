function largestCombination (candidates: number[]): number {
    const bits = new Array<number>(32).fill(0);
    for (let num of candidates) {
        let index = 0;
        while (num > 0) {
            bits[index++] += (num & 1);
            num >>= 1;
        }
    }
    return Math.max(...bits);
}
