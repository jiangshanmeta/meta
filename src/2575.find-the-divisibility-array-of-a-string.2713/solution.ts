function divisibilityArray (word: string, m: number): number[] {
    const result = new Array<number>(word.length);
    let prefix = 0;
    for (let i = 0; i < word.length; i++) {
        prefix = prefix * 10 + (+word[i]);
        if (prefix % m === 0) {
            result[i] = 1;
        } else {
            result[i] = 0;
        }
        prefix %= m;
    }
    return result;
}
