function numDifferentIntegers (word: string): number {
    const set = new Set<number>();
    let index = 0;
    while (index < word.length) {
        if (!isDigit(word[index])) {
            index++;
            continue;
        }
        const start = index++;
        while (index < word.length && isDigit(word[index])) {
            index++;
        }
        set.add(+word.slice(start, index));
    }
    return set.size;
}

function isDigit (c:string) {
    const code = c.charCodeAt(0);
    return code > 47 && code < 58;
}
