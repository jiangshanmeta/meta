function minimizeArrayValue (nums: number[]): number {
    let left = 0;
    let right = Math.max(...nums);
    let result = right;
    while (left <= right) {
        const mid = (left + right) >> 1;
        const copy = [...nums, ];
        for (let i = copy.length - 1; i > 0; i--) {
            if (copy[i] > mid) {
                const diff = copy[i] - mid;
                copy[i] = mid;
                copy[i - 1] += diff;
            }
        }
        if (copy[0] > mid) {
            left = mid + 1;
        } else {
            result = Math.min(result, mid);
            right = mid - 1;
        }
    }
    return result;
}
