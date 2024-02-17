function shortestPalindrome(s: string): string {
    if (s.length === 0) {
        return s;
    }
    const s2 = s.split('').reverse().join('');
    const next = getNext(s);
    let count = 0;
    for (let i = 0; i < s2.length; i++) {
        while (count > 0 && s2[i] !== s[count]) {
            count = next[count - 1];
        }
        if (s2[i] === s[count]) {
            count++
        }
        if (i === s2.length - 1) {
            break;
        }
        if (count === s.length) {
            count = next[count - 1];
        }
    }
    return s2 + s.slice(count)
};

function getNext(pattern: string) {
    const next = new Array<number>(pattern.length);
    next[0] = 0;
    let count = 0
    for (let i = 1; i < pattern.length; i++) {
        while (count > 0 && pattern[i] !== pattern[count]) {
            count = next[count - 1]
        }
        if (pattern[i] === pattern[count]) {
            count++
        }
        next[i] = count
    }
    return next;
}