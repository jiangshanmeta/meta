function findClosestElements (arr: number[], k: number, x: number): number[] {
    let left = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (arr[mid] > x) {
            high = mid - 1;
        } else {
            left = Math.max(left, mid);
            low = mid + 1;
        }
    }

    let right = left + 1;
    const result:number[] = [];
    while (k > 0 && left > -1 && right < arr.length) {
        if (arr[right] - x < x - arr[left]) {
            result.push(arr[right++]);
        } else {
            result.push(arr[left--]);
        }
        k--;
    }
    while (k > 0 && left > -1) {
        result.push(arr[left--]);
        k--;
    }
    while (k > 0 && right < arr.length) {
        result.push(arr[right++]);
        k--;
    }
    result.sort((a, b) => a - b);
    return result;
}
