function replaceElements (arr: number[]): number[] {
    let rightMax = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for (let i = arr.length - 2; i > -1; i--) {
        const val = arr[i];
        arr[i] = rightMax;
        rightMax = Math.max(val, rightMax);
    }
    return arr;
}
