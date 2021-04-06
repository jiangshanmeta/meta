function minimumAbsDifference (arr: number[]): number[][] {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    const result:number[][] = [];
    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff === minDiff) {
            result.push([
                arr[i - 1],
                arr[i],
            ]);
        } else if (diff < minDiff) {
            minDiff = diff;
            result.length = 0;
            result.push([
                arr[i - 1],
                arr[i],
            ]);
        }
    }
    return result;
}
