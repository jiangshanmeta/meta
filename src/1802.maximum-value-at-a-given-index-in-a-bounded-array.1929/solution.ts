function maxValue (n: number, index: number, maxSum: number): number {
    let low = 1;
    let high = maxSum;
    let result = 1;
    while (low <= high) {
        const indexValue = low + ((high - low) >> 1);
        let curSum = 0;
        const startIndex = index - (indexValue - 1);
        if (startIndex < 0) {
            const count = index + 1;
            curSum += count * indexValue + count * (1 - count) / 2;
        } else {
            curSum += startIndex + (indexValue + 1) * indexValue / 2;
        }

        if (index !== n - 1) {
            const endIndex = index + indexValue - 1;
            if (endIndex > n - 1) {
                const count = n - 1 - (index + 1) + 1;
                curSum += count * (indexValue - 1) + count * (1 - count) / 2;
            } else {
                curSum += (1 + indexValue - 1) * (indexValue - 1) / 2 + n - 1 - endIndex;
            }
        }

        if (curSum > maxSum) {
            high = indexValue - 1;
        } else {
            result = Math.max(result, indexValue);
            low = indexValue + 1;
        }
    }
    return result;
}
