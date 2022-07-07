function decodeMessage (key: string, message: string): string {
    const map = new Map<string, string>();
    for (const c of key) {
        if (c === ' ' || map.has(c)) {
            continue;
        }
        map.set(c, String.fromCharCode(map.size + 97));
    }
    map.set(' ', ' ');

    return message.split('').map((c) => map.get(c)).join('');
}
