function map (arr: number[], fn: (n: number, i: number) => number): number[] {
    const result = new Array<number>(arr.length);
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }
    return result;
}
export { map, };
