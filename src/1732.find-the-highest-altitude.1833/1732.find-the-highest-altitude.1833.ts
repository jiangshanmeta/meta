function largestAltitude (gain: number[]): number {
    let result = 0;
    let height = 0;
    for (let i = 0; i < gain.length; i++) {
        height += gain[i];
        result = Math.max(result, height);
    }
    return result;
}
