function checkInclusion (s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false;
    }
    const s1Counts = new Array<number>(26).fill(0);
    const s2Counts = new Array<number>(26).fill(0);
    for (const char of s1) {
        s1Counts[char.charCodeAt(0) - 97]++;
    }
    for (let i = 0; i < s1.length - 1; i++) {
        s2Counts[s2.charCodeAt(i) - 97]++;
    }
    for (let i = s1.length - 1; i < s2.length; i++) {
        s2Counts[s2.charCodeAt(i) - 97]++;
        if (same(s1Counts, s2Counts)) {
            return true;
        }
        s2Counts[s2.charCodeAt(i - s1.length + 1) - 97]--;
    }

    return false;
}

function same (s1:number[], s2:number[]) {
    return s1.every((item, index) => item === s2[index]);
}
