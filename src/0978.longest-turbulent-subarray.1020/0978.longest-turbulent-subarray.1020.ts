function maxTurbulenceSize (arr: number[]): number {
    let result = 1;
    let l1 = 1;
    let l2 = 1;
    for (let i = 1; i < arr.length; i++) {
        if (i & 1) {
            if (arr[i] > arr[i - 1]) {
                l1++;
                result = Math.max(result, l1);
            } else {
                l1 = 1;
            }

            if (arr[i] < arr[i - 1]) {
                l2++;
                result = Math.max(result, l2);
            } else {
                l2 = 1;
            }
        } else {
            if (arr[i] < arr[i - 1]) {
                l1++;
                result = Math.max(result, l1);
            } else {
                l1 = 1;
            }

            if (arr[i] > arr[i - 1]) {
                l2++;
                result = Math.max(result, l2);
            } else {
                l2 = 1;
            }
        }
    }
    return result;
}
