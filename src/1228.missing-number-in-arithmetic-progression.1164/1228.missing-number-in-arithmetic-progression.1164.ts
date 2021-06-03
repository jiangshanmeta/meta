function missingNumber (arr: number[]): number {
    const diff = (arr[arr.length - 1] - arr[0]) / arr.length;
    let low = 0;
    let high = arr.length - 1;
    let index = arr.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (arr[mid] !== arr[0] + diff * mid) {
            index = Math.min(index, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return arr[0] + diff * index;
}
