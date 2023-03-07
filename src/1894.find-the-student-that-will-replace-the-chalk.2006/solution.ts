function chalkReplacer (chalk: number[], k: number): number {
    const prefixSum = new Array<number>(chalk.length);
    prefixSum[0] = chalk[0];
    for (let i = 1; i < chalk.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + chalk[i];
    }
    k %= prefixSum[prefixSum.length - 1];
    let low = 0;
    let high = chalk.length - 1;

    if (k < prefixSum[0]) {
        return 0;
    }

    while (low <= high) {
        const mid = (low + high) >> 1;
        if (prefixSum[mid] > k) {
            if ((mid > 0 && prefixSum[mid - 1] <= k)) {
                return mid;
            }
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return 0;
}
