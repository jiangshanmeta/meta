function similarPairs (words: string[]): number {
    const map = new Map<number, number>();
    let result = 0;

    for (const word of words) {
        const key = calcKey(word);
        if (map.has(key)) {
            const count = map.get(key)!;
            result += count;
            map.set(key, count + 1);
        } else {
            map.set(key, 1);
        }
    }

    return result;
}

function calcKey (word:string) {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        result |= 1 << (word.charCodeAt(i) - 97);
    }
    return result;
}
