function fixedPoint (arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return i;
        }
    }
    return -1;
}
