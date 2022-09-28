function smallestRepunitDivByK (K: number): number {
    let result = 0;
    let rest = 0;
    const set = new Set<number>();
    while (!set.has(rest)) {
        set.add(rest);
        result++;
        rest = (rest * 10 + 1) % K;
        if (rest === 0) {
            return result;
        }
    }
    return -1;
}
