function areSentencesSimilar (sentence1: string[], sentence2: string[], similarPairs: string[][]): boolean {
    if (sentence1.length !== sentence2.length) {
        return false;
    }
    const map = new Map<string, string[]>();
    for (const [a, b, ] of similarPairs) {
        if (!map.has(a)) {
            map.set(a, []);
        }
        if (!map.has(b)) {
            map.set(b, []);
        }
        map.get(a).push(b);
        map.get(b).push(a);
    }

    for (let i = 0; i < sentence1.length; i++) {
        if (sentence1[i] === sentence2[i]) {
            continue;
        }
        if (map.has(sentence1[i]) && map.get(sentence1[i]).some(item => item === sentence2[i])) {
            continue;
        }
        return false;
    }
    return true;
}
