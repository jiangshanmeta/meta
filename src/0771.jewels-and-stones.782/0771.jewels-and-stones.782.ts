function numJewelsInStones (J: string, S: string): number {
    const set = new Set<string>(J);
    let result = 0;
    for (let i = 0; i < S.length; i++) {
        if (set.has(S[i])) {
            result++;
        }
    }
    return result;
}
