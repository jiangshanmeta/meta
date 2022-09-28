function countLetters (S: string): number {
    let result = 0;
    let index = 0;
    while (index < S.length) {
        const char = S[index];
        const start = index++;
        while (index < S.length && S[index] === char) {
            index++;
        }
        const count = (index - start);
        result += (1 + count) * count / 2;
    }
    return result;
}
