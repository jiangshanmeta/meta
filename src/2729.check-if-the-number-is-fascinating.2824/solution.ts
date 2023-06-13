function isFascinating (n: number): boolean {
    const str = `${n}${2 * n}${3 * n}`;
    const counts = new Array<boolean>(10).fill(false);
    for (let i = 0; i < str.length; i++) {
        const digit = str[i];
        if (digit === '0') {
            return false;
        }
        if (counts[digit]) {
            return false;
        }
        counts[digit] = true;
    }
    for (let i = 1; i < 10; i++) {
        if (!counts[i]) {
            return false;
        }
    }
    return true;
}
