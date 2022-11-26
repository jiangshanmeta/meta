function numMatchingSubseq (s: string, words: string[]): number {
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        if (match(s, words[i])) {
            result++;
        }
    }
    return result;
}

function match (s:string, t:string):boolean {
    let indexS = 0;
    let indexT = 0;
    while (indexS < s.length && indexT < t.length) {
        if (s[indexS] === t[indexT]) {
            indexS++;
            indexT++;
        } else {
            indexS++;
        }
    }
    return indexT === t.length;
}
