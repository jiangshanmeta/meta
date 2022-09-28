function binaryGap (n: number): number {
    let lastIndex = -1;
    let index = 0;
    let result = 0;
    while (n) {
        if (n & 1) {
            if (lastIndex !== -1) {
                result = Math.max(result, index - lastIndex);
            }
            lastIndex = index;
        }
        index++;
        n >>= 1;
    }
    return result;
}
