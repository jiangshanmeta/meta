function hIndex (citations: number[]): number {
    let result = 0;
    let low = 0;
    let high = citations.length;
    while (low <= high) {
        const mid = (low + high) >>> 1;
        const h = citations.length - mid;
        if (citations[mid] >= h) {
            result = Math.max(result, h);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}
