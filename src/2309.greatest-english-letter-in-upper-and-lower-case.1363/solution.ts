function greatestLetter (s: string): string {
    const flags = new Array<number>(26).fill(0);
    for (const c of s) {
        const code = c.charCodeAt(0);
        if (code > 96) {
            flags[code - 97] |= 1;
        } else {
            flags[code - 65] |= 2;
        }
    }
    for (let i = 25; i > -1; i--) {
        if (flags[i] === 3) {
            return String.fromCharCode(i + 65);
        }
    }

    return '';
}
