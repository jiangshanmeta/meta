function isSubsequence (s: string, t: string): boolean {
    let indexS = 0;
    let indexT = 0;
    while (indexS < s.length && indexT < t.length) {
        if (s[indexS] === t[indexT]) {
            indexS++;
            indexT++;
        } else {
            indexT++;
        }
    }
    return indexS === s.length;
}
