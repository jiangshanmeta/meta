function isArmstrong (n: number): boolean {
    let k = 0;
    const digits:number[] = [];
    let m = n;
    while (m) {
        const digit = m % 10;
        digits.push(digit);
        m = (m - digit) / 10;
        k++;
    }
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i] ** k;
    }
    return sum === n;
}
