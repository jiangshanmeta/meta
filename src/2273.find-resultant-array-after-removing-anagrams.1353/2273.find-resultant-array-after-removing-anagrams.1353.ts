function removeAnagrams (words: string[]): string[] {
    const map = new Map<string, string>();
    for (const w of words) {
        map.set(w, w.split('').sort().join(''));
    }
    const result = [words[0], ];
    for (let i = 1; i < words.length; i++) {
        if (map.get(words[i]) !== map.get(result[result.length - 1])) {
            result.push(words[i]);
        }
    }

    return result;
}
