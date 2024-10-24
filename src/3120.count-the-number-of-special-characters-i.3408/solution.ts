function numberOfSpecialChars (word: string): number {
    let lower = 0;
    let upper = 0;
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        if (code < 97) {
            lower |= (1 << (code - 97));
        } else {
            upper |= (1 << (code - 65));
        }
    }
    let total = lower & upper;
    let result = 0;
    while (total !== 0) {
        result++;
        total &= (total - 1);
    }
    return result;
}
