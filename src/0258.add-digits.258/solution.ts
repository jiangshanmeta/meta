function addDigits (num: number): number {
    if (num < 10) {
        return num;
    }
    let result = 0;
    while (num) {
        const digit = num % 10;
        result += digit;
        num = (num - digit) / 10;
    }
    return addDigits(result);
}
