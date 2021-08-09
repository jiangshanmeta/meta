function isThree (n: number): boolean {
    if (n < 4) {
        return false;
    }
    const root = Math.sqrt(n);
    if (!Number.isInteger(root)) {
        return false;
    }
    for (let i = 2; i < root; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
