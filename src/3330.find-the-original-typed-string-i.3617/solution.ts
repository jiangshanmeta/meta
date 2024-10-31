function possibleStringCount (word: string): number {
    let result = 1;
    let index = 0;
    while (index < word.length) {
        const char = word[index++];
        let cnt = 0;
        while (index < word.length && word[index] === char) {
            cnt++;
            index++;
        }
        result += cnt;
    }
    return result;
}
