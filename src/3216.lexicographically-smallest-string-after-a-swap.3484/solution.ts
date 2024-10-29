function getSmallestString (s: string): string {
    for (let i = 0; i < s.length - 1; i++) {
        const code1 = s.charCodeAt(i) - 48;
        const code2 = s.charCodeAt(i + 1) - 48;

        if (code1 % 2 === code2 % 2 && code2 < code1) {
            return `${s.slice(0, i)}${s[i + 1]}${s[i]}${s.slice(i + 2)}`;
        }
    }
    return s;
}
