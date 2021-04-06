function sumZero (n: number): number[] {
    const result:number[] = [];
    if (n & 1) {
        result.push(0);
    }
    const half = n >> 1;
    for (let i = 1; i <= half; i++) {
        result.push(i);
        result.push(-i);
    }
    return result;
}
