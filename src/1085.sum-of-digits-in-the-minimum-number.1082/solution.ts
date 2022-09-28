function sumOfDigits (A: number[]): number {
    let min = Math.min(...A);
    let sum = 0;
    while (min) {
        const digit = min % 10;
        sum += digit;
        min = (min - digit) / 10;
    }
    return (sum & 1) ^ 1;
}
