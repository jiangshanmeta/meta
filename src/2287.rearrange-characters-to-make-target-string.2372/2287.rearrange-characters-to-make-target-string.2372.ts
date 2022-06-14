function rearrangeCharacters (s: string, target: string): number {
    const countS = count(s);
    const countT = count(target);
    let result = s.length;
    for (let i = 0; i < 26; i++) {
        if (countT[i] === 0) {
            continue;
        }
        result = Math.min(result, (countS[i] / countT[i]) | 0);
    }
    return result;
}

function count (s:string) {
    const result = new Array<number>(26).fill(0);
    for (const c of s) {
        result[c.charCodeAt(0) - 97]++;
    }
    return result;
}
