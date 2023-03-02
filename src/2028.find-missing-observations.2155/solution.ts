function missingRolls (rolls: number[], mean: number, n: number): number[] {
    let sum = (rolls.length + n) * mean;
    for (const roll of rolls) {
        sum -= roll;
    }
    if (sum < n || sum > 6 * n) {
        return [];
    }
    const avg = Math.floor(sum / n);
    const rest = sum % n;
    const result = new Array<number>(n).fill(avg);
    for (let i = 0; i < rest; i++) {
        result[i]++;
    }
    return result;
}
