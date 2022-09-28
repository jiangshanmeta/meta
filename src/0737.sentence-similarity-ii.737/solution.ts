function areSentencesSimilarTwo (words1: string[], words2: string[], pairs: string[][]): boolean {
    if (words1.length !== words2.length) {
        return false;
    }
    const map = new Map<string, string>();
    for (const [a, b, ] of pairs) {
        if (!map.has(a)) {
            map.set(a, a);
        }
        if (!map.has(b)) {
            map.set(b, b);
        }
        let pA = map.get(a);
        while (map.get(pA) !== pA) {
            pA = map.get(pA);
        }
        let pB = map.get(b);
        while (map.get(pB) !== pB) {
            pB = map.get(pB);
        }

        const commonP = pA < pB ? pA : pB;
        pA = a;
        pB = b;
        while (pA !== commonP) {
            const next = map.get(pA);
            map.set(pA, commonP);
            pA = next;
        }
        while (pB !== commonP) {
            const next = map.get(pB);
            map.set(pB, commonP);
            pB = next;
        }
    }

    for (let a of map.keys()) {
        let pA = map.get(a);
        while (pA !== map.get(pA)) {
            pA = map.get(pA);
        }
        while (a !== pA) {
            const next = map.get(a);
            map.set(a, pA);
            a = next;
        }
    }

    for (let i = 0; i < words1.length; i++) {
        if (words1[i] === words2[i]) {
            continue;
        }
        if (!map.has(words1[i]) || !map.has(words2[i]) || map.get(words1[i]) !== map.get(words2[i])) {
            return false;
        }
    }
    return true;
}
