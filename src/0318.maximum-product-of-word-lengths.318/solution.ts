function maxProduct (words: string[]): number {
    const bitwise = words.map((word) => {
        let bit = 0;
        for (const letter of word) {
            bit |= (1 << (letter.charCodeAt(0) - 97));
        }
        return bit;
    });

    let result = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if ((bitwise[i] & bitwise[j]) === 0) {
                result = Math.max(result, words[i].length * words[j].length);
            }
        }
    }
    return result;
}
