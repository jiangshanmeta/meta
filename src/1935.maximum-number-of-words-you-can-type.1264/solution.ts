function canBeTypedWords (text: string, brokenLetters: string): number {
    const set = new Set(brokenLetters);
    return text.split(' ').reduce((count, word) => {
        let pass = true;
        for (const letter of word) {
            if (set.has(letter)) {
                pass = false;
                break;
            }
        }
        return count + (pass ? 1 : 0);
    }, 0);
}
