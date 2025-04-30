function smallestNumber (n: number): number {
    let result = 0;
    while (n > 0) {
        result = result * 2 + 1;
        n >>= 1;
    }
    return result;
}
