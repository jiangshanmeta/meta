function minSteps (s: string, t: string): number {
    const counts = new Array<number>(26).fill(0);
    for (const c of s) {
        counts[c.charCodeAt(0) - 97]++;
    }
    for (const c of t) {
        counts[c.charCodeAt(0) - 97]--;
    }

    return counts.reduce((acc, item) => acc + Math.abs(item), 0);
}
