function minChanges (n: number, k: number): number {
    if (k > n) {
        return -1;
    }
    let cnt = 0;
    while (n > 0) {
        const a = n & 1;
        const b = k & 1;
        if (a !== b) {
            if (a === 1) {
                cnt++;
            } else {
                return -1;
            }
        }
        n >>= 1;
        k >>= 1;
    }
    return cnt;
}
