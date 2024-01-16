function maxFrequencyElements (nums: number[]): number {
    const frequencies = new Array<number>(101).fill(0);
    let maxFre = 0;
    let maxFreCount = 0;
    for (const n of nums) {
        frequencies[n]++;
        if (frequencies[n] > maxFre) {
            maxFre = frequencies[n];
            maxFreCount = 1;
        } else if (frequencies[n] === maxFre) {
            maxFreCount++;
        }
    }
    return maxFre * maxFreCount;
}
