function frequencySort (s: string): string {
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    const keys = [...map.keys(), ].sort((a, b) => map.get(b) - map.get(a));
    const result:string[] = [];
    for (let i = 0; i < keys.length; i++) {
        result.push(keys[i].repeat(map.get(keys[i])));
    }
    return result.join('');
}
