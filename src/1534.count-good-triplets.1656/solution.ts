function countGoodTriplets (arr: number[], a: number, b: number, c: number): number {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) > a) {
                continue;
            }
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    result++;
                }
            }
        }
    }
    return result;
}
