function plusOne (digits: number[]): number[] {
    let addon = 1;
    let index = digits.length - 1;
    while (addon && index > -1) {
        const sum = digits[index] + addon;
        const digit = sum % 10;
        digits[index] = digit;
        addon = (sum - digit) / 10;
        index--;
    }
    if (addon) {
        digits.unshift(addon);
    }
    return digits;
}
