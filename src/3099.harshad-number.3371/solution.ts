function sumOfTheDigitsOfHarshadNumber (x: number): number {
    let n = x;
    let sum = 0;
    while (n > 0) {
        const digi = n % 10;
        sum += digi;
        n = (n - digi) / 10;
    }
    if (x % sum === 0) {
        return sum;
    }
    return -1;
}
