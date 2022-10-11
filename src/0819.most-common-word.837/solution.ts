function mostCommonWord (paragraph: string, banned: string[]): string {
    paragraph = paragraph.replace(/[!?',;.]/g, ' ').toLowerCase();
    const words = paragraph.split(' ');
    const bannedSet = new Set(banned);
    const map = new Map<string, number>();
    for (const w of words) {
        if (w === ' ' || w === '' || bannedSet.has(w)) {
            continue;
        }
        map.set(w, map.has(w) ? map.get(w) + 1 : 1);
    }

    let max = 0;
    let result = '';
    for (const [w, c, ] of map) {
        if (c > max) {
            max = c;
            result = w;
        }
    }

    return result;
}
