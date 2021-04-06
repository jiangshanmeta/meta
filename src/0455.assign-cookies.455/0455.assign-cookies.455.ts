function findContentChildren (g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let indexG = 0;
    let indexS = 0;
    let result = 0;
    while (indexG < g.length && indexS < s.length) {
        if (s[indexS] >= g[indexG]) {
            result++;
            indexS++;
            indexG++;
        } else {
            indexS++;
        }
    }
    return result;
}
