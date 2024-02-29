function longestPalindrome(s: string): string {
    const str = new Array<string>(2 * s.length + 1);
    for (let i = 0; i < s.length; i++) {
        str[2 * i] = '#';
        str[2 * i + 1] = s[i];
    }
    str[str.length - 1] = '#';

    let maxLen = 0;
    let endIndex = 0;
    let r = 0;
    let c = 0;
    const p = new Array<number>(str.length);
    for (let i = 0; i < str.length; i++) {
        let len = r > i ? Math.min(r - i, p[2 * c - i]) : 1;
        while (i + len < str.length && i - len > -1 && str[i + len] === str[i - len]) {
            len++;
        }

        if (i + len > r) {
            r = i + len;
            c = i;
        }
        p[i] = len;
        if (len > maxLen) {
            maxLen = len;
            endIndex = i + len;
        }
    }

    endIndex >>= 1;


    return s.slice(endIndex - maxLen + 1, endIndex)
};