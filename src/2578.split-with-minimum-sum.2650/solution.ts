function splitNum (num: number): number {
    const digits:number[] = [];
    while (num > 0) {
        const digit = num % 10;
        if (digit !== 0) {
            digits.push(digit);
        }
        num = (num - digit) / 10;
    }
    let num1 = 0;
    let num2 = 0;
    digits.sort((a, b) => a - b);
    let index = 0;
    while (index < digits.length) {
        if (index & 1) {
            num2 = num2 * 10 + digits[index++];
        } else {
            num1 = num1 * 10 + digits[index++];
        }
    }

    return num1 + num2;
}
