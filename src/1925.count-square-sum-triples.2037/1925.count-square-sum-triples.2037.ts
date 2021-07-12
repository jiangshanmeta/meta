function countTriples (n: number): number {
    let result = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const c = Math.sqrt(i * i + j * j);
            if (Number.isInteger(c) && c <= n) {
                result += 2;
            }
        }
    }
    return result;
}
