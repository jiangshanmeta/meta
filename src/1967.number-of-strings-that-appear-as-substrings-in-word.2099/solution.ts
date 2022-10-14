function numOfStrings (patterns: string[], word: string): number {
    let result = 0;
    for (const pattern of patterns) {
        if (word.includes(pattern)) {
            result++;
        }
    }
    return result;
}
