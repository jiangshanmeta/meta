function appendCharacters (s: string, t: string): number {
    let indexS = 0;
    let indexT = 0;
    while (indexS < s.length && indexT < t.length) {
        if (s[indexS] === t[indexT]) {
            indexS++;
            indexT++;
            continue;
        }
        indexS++;
    }
    return t.length - indexT;
}
