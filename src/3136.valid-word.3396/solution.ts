function isValid (word: string): boolean {
    if (word.length < 3) {
        return false;
    }
    let yuanyin = false;
    let fuyin = false;
    const set = new Set('aeiouAEIOU');
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        const isDigi = code >= 48 && code <= 57;
        const isValid = (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || isDigi;
        if (!isValid) {
            return false;
        }
        if (isDigi) {
            continue;
        }
        if (set.has(word[i])) {
            yuanyin = true;
        } else {
            fuyin = true;
        }
    }
    return yuanyin && fuyin;
}
