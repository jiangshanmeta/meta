function digitCount (num: string): boolean {
    const counts = new Array<number>(10).fill(0);
    for (const n of num) {
        counts[n]++;
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== String(counts[i])) {
            return false;
        }
    }
    return true;
}
