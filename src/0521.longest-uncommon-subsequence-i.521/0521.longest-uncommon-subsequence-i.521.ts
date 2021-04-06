function findLUSlength (a: string, b: string): number {
    if (a === b) {
        return -1;
    }
    return Math.max(a.length, b.length);
}
