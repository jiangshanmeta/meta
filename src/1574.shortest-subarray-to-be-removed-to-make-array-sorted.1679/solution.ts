function findLengthOfShortestSubarray (arr: number[]): number {
    let L = 1;
    while (L < arr.length && arr[L] >= arr[L - 1]) {
        L++;
    }
    if (L === arr.length) {
        return 0;
    }
    L--;
    let R = arr.length - 2;
    while (R > -1 && arr[R] <= arr[R + 1]) {
        R--;
    }
    R++;
    if (arr[R] >= arr[L]) {
        return R - L - 1;
    }
    let result = Math.min(arr.length - L - 1, R);
    let r = arr.length - 1;
    while (L > -1) {
        if (arr[L] > arr[arr.length - 1]) {
            L--;
            continue;
        }
        while (r - 1 >= R && arr[r - 1] >= arr[L]) {
            r--;
        }
        result = Math.min(result, r - L - 1);
        L--;
    }
    return result;
}
