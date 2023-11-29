function checkStrings (s1: string, s2: string): boolean {
    const count1 = new Array<number>(26).fill(0);
    const count2 = new Array<number>(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        const c1 = s1.charCodeAt(i) - 97;
        const c2 = s2.charCodeAt(i) - 97;
        if (i & 1) {
            count1[c1]++;
            count1[c2]--;
        } else {
            count2[c1]++;
            count2[c2]--;
        }
    }
    return count1.every(item => item === 0) && count2.every(item => item === 0);
}
