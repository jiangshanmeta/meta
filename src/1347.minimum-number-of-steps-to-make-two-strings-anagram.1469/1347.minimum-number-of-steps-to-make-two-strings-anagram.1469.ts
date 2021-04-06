function minSteps (s: string, t: string): number {
    const counts:number[] = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
        counts[t.charCodeAt(i) - 97]--;
    }
    let result = 0;
    for (let i = 0; i < 26; i++) {
        if (counts[i] > 0) {
            result += counts[i];
        }
    }
    return result;
}
