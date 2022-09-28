function countOdds (low: number, high: number): number {
    if (low % 2 === 0) {
        low++;
    }
    if (high % 2 === 0) {
        high--;
    }
    if (high < low) {
        return 0;
    }
    return (high - low) / 2 + 1;
}
