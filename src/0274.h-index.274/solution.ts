function hIndex (citations: number[]): number {
    citations.sort((a, b) => b - a);
    let result = 0;
    let low = 0;
    let high = citations.length;
    while (low <= high) {
        const mid = (low + high) >>> 1;
        if (citations[mid] > mid) {
            result = Math.max(result, mid + 1);
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}
