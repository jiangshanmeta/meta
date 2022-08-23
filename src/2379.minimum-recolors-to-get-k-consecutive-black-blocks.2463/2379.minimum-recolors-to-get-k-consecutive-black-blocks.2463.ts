function minimumRecolors (blocks: string, k: number): number {
    let count = 0;
    let result = k;
    for (let i = 0; i < k - 1; i++) {
        if (blocks[i] === 'W') {
            count++;
        }
    }
    for (let i = k - 1; i < blocks.length; i++) {
        if (blocks[i] === 'W') {
            count++;
        }
        result = Math.min(result, count);
        if (blocks[i - k + 1] === 'W') {
            count--;
        }
    }
    return result;
}
