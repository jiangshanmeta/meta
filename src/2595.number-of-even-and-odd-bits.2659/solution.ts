function evenOddBit (n: number): number[] {
    const digits = n.toString(2).split('').reverse();
    let a = 0;
    let b = 0;
    for (let i = 0; i < digits.length; i++) {
        if (i & 1) {
            if (digits[i] === '1') {
                b++;
            }
        } else {
            if (digits[i] === '1') {
                a++;
            }
        }
    }
    return [a, b, ];
}
