function filter (arr: number[], fn: (n: number, i: number) => any): number[] {
    const result:number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
}
