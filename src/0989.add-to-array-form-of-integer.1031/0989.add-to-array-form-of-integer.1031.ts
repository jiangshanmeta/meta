function addToArrayForm (A: number[], K: number): number[] {
    A.reverse();
    let addon = 0;
    let index = 0;
    while (index < A.length && K > 0) {
        const kDigit = K % 10;
        K = (K - kDigit) / 10;
        const sum = addon + A[index] + kDigit;
        const digit = sum % 10;
        A[index++] = digit;
        addon = (sum - digit) / 10;
    }
    while (addon && index < A.length) {
        const sum = addon + A[index];
        const digit = sum % 10;
        A[index++] = digit;
        addon = (sum - digit) / 10;
    }

    while (K > 0) {
        const kDigit = K % 10;
        K = (K - kDigit) / 10;
        const sum = addon + kDigit;
        const digit = sum % 10;
        A.push(digit);
        addon = (sum - digit) / 10;
    }

    if (addon) {
        A.push(addon);
    }

    return A.reverse();
}
