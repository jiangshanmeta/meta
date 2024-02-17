function longestPrefix(s: string): string {
    const next = new Array<number>(s.length).fill(0);
    let count = 0;
    for (let i = 1; i < s.length; i++) {
        while (count > 0 && s[i] !== s[count]) {
            count = next[count - 1];
        }
        if (s[i] === s[count]) {
            count++;
        }
        next[i] = count;
    }
    return s.slice(0, next[next.length - 1]);
};