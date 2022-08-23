function repeatedCharacter (s: string): string {
    const flags = new Array<boolean>(26).fill(false);
    for (const c of s) {
        const code = c.charCodeAt(0) - 97;
        if (flags[code]) {
            return c;
        }
        flags[code] = true;
    }
    return '';
}
