function halvesAreAlike (s: string): boolean {
    const set = new Set([
        'a',
        'e',
        'i',
        'o',
        'u',
        'A',
        'E',
        'I',
        'O',
        'U',
    ]);

    let count = 0;
    const half = s.length >> 1;
    for (let i = 0; i < half; i++) {
        if (set.has(s[i])) {
            count++;
        }
    }
    for (let i = half; i < s.length; i++) {
        if (set.has(s[i])) {
            count--;
        }
    }
    return count === 0;
}
