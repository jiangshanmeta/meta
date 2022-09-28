function minBitFlips (start: number, goal: number): number {
    let num = start ^ goal;
    let result = 0;
    while (num) {
        num &= (num - 1);
        result++;
    }
    return result;
}
