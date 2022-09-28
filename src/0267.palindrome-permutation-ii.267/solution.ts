function generatePalindromes (s: string): string[] {
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    let hasOdd = false;
    let oddLetter = '';
    const candidates:string[] = [];
    for (const [letter, count, ] of map) {
        if (count & 1) {
            if (hasOdd) {
                return [];
            }
            hasOdd = true;
            oddLetter = letter;
        }
        for (let i = 0; i < (count >> 1); i++) {
            candidates.push(letter);
        }
    }
    const used:boolean[] = new Array(candidates.length).fill(false);
    const result:string[] = [];
    function backTracking (current:string) {
        if (current.length >= 2 * candidates.length) {
            result.push(current);
            return;
        }
        for (let i = 0; i < candidates.length; i++) {
            if (used[i]) {
                continue;
            }
            if (i > 0 && candidates[i] === candidates[i - 1] && !used[i - 1]) {
                continue;
            }
            used[i] = true;
            backTracking(`${candidates[i]}${current}${candidates[i]}`);
            used[i] = false;
        }
    }
    backTracking(oddLetter);

    return result;
}
