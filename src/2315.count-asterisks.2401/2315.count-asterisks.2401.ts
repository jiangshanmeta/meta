function countAsterisks (s: string): number {
    let result = 0;
    let inner = false;
    for (const c of s) {
        if (c === '|') {
            inner = !inner;
        } else if (!inner && c === '*') {
            result++;
        }
    }
    return result;
}
