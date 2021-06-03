function transformArray (arr: number[]): number[] {
    let hasDiff = true;

    while (hasDiff) {
        const nArr = [...arr, ];
        hasDiff = false;
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
                nArr[i]++;
                hasDiff = true;
            } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                nArr[i]--;
                hasDiff = true;
            }
        }
        arr = nArr;
    }
    return arr;
}
