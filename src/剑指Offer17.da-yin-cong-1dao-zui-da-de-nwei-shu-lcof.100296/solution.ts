function printNumbers (n: number): number[] {
    const result:number[] = [];
    for (let i = 1; i < 10 ** n; i++) {
        result.push(i);
    }
    return result;
}
