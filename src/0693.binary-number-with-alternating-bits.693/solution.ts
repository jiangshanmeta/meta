function hasAlternatingBits (n: number): boolean {
    let last = n & 1;
    n >>>= 1;
    while (n > 0) {
        const digit = n & 1;
        if ((digit ^ last) === 0) {
            return false;
        }
        last = digit;
        n >>>= 1;
    }
    return true;
}
