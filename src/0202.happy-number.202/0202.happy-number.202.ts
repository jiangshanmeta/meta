function isHappy (n: number): boolean {
    const set = new Set<number>();
    set.add(n);
    while (n !== 1) {
        let sum = 0;
        while (n > 0) {
            const digit = n % 10;
            sum += digit ** 2;
            n = (n - digit) / 10;
        }
        if (set.has(sum)) {
            return false;
        }
        set.add(sum);
        n = sum;
    }
    return true;
}
