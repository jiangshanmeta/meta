function countCompleteDayPairs (hours: number[]): number {
    const counts = new Array(24).fill(0);
    for (const n of hours) {
        counts[n % 24]++;
    }
    let result = 0;
    for (let i = 1; i < 12; i++) {
        result += counts[i] * counts[24 - i];
    }
    if (counts[0] > 0) {
        result += counts[0] * (counts[0] - 1) / 2;
    }
    if (counts[12] > 0) {
        result += counts[12] * (counts[12] - 1) / 2;
    }
    return result;
}
