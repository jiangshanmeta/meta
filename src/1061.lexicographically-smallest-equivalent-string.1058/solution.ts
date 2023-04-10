function smallestEquivalentString (s1: string, s2: string, baseStr: string): string {
    const parents = new Array<number>(26);
    for (let i = 0; i < 26; i++) {
        parents[i] = i;
    }
    for (let i = 0; i < s1.length; i++) {
        let code1 = s1.charCodeAt(i) - 97;
        let code2 = s2.charCodeAt(i) - 97;
        let p1 = parents[code1];
        let p2 = parents[code2];
        while (parents[p1] !== p1) {
            p1 = parents[p1];
        }
        while (parents[p2] !== p2) {
            p2 = parents[p2];
        }
        const target = Math.min(p1, p2);
        parents[p1] = target;
        parents[p2] = target;
        while (code1 !== target) {
            const n = parents[code1];
            parents[code1] = target;
            code1 = n;
        }
        while (code2 !== target) {
            const n = parents[code2];
            parents[code2] = target;
            code2 = n;
        }
    }
    const result:string[] = [];
    for (let i = 0; i < baseStr.length; i++) {
        let code = baseStr.charCodeAt(i) - 97;
        let p = parents[code];
        while (parents[p] !== p) {
            p = parents[p];
        }
        while (code !== p) {
            const n = parents[code];
            parents[code] = p;
            code = n;
        }
        result.push(String.fromCharCode(parents[code] + 97));
    }

    return result.join('');
}
